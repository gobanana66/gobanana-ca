const fs = require("fs");
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

// Utility to convert title to slug
const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Convert bullet list strings to HTML
const convertToHtmlList = (text) => {
  const items = text
    .split("\n")
    .map((item) => item.replace(/•\s*/, "").trim())
    .filter(Boolean);
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
};

// Safely extract plain text from rich_text property
const getText = (field) =>
  field?.[0]?.plain_text || "";

// Safely extract multi-select values
const getTags = (field) =>
  Array.isArray(field) ? field.map((tag) => tag.name) : [];

async function fetchNotionData() {
  const pages = [];
  let cursor = undefined;

  while (true) {
    const response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
    });

    pages.push(...response.results);

    if (!response.has_more) break;
    cursor = response.next_cursor;
  }

  const formatted = pages.map((page) => {
    const props = page.properties;

    const title = getText(props["Title"]?.title);
    const summary = getText(props["Summary"]?.rich_text);
    const overview = getText(props["Overview"]?.rich_text);
    const impact = getText(props["Impact"]?.rich_text);
    const problem = getText(props["Problem"]?.rich_text);
    const solution = getText(props["Solution"]?.rich_text);
    const tags = getTags(props["Tags"]?.multi_select);
    const liveURL = props["Live URL"]?.url || "";
    const github = props["GitHub"]?.url || "";

    return {
      title,
      summary,
      overview,
      tags,
      impact: convertToHtmlList(impact),
      problem: convertToHtmlList(problem),
      solution: convertToHtmlList(solution),
      liveURL,
      github,
      slug: slugify(title),
    };
  });

  fs.writeFileSync(
    "./src/data/portfolioData.json",
    JSON.stringify(formatted, null, 2)
  );
}

fetchNotionData();
