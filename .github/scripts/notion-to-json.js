const fs = require("fs")
const { Client } = require("@notionhq/client")

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const databaseId = process.env.NOTION_DATABASE_ID

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple hyphens with a single hyphen
    .trim(); // Trim hyphens from start and end
};

// Convert tags string to an array
const tagsArray = (inputData.tags || '').split(',').map(tag => tag.trim());

// Function to convert bullet list strings to HTML
const convertToHtmlList = (text) => {
  const items = text.split('\n').map(item => item.replace(/•\s*/, '').trim()).filter(Boolean);
  return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
};

// Convert impact, problem, and solution to HTML lists
const impactHtml = convertToHtmlList(inputData.impact || '');
const problemHtml = convertToHtmlList(inputData.problem || '');
const solutionHtml = convertToHtmlList(inputData.solution || '');

async function fetchNotionData() {
  const pages = []
  let cursor = undefined

  while (true) {
    const response = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
    })

    pages.push(...response.results)

    if (!response.has_more) break
    cursor = response.next_cursor
  }

  const formatted = pages.map((page) => {
    const inputData = page.properties
    // Prepare the final output object
    output = {
      title: inputData.title || '',
      summary: inputData.summary || '',
      overview: inputData.overview || '',
      tags: tagsArray,
      impact: impactHtml,
      problem: problemHtml,
      solution: solutionHtml,
      slug: slug,
    };

    return output;
  })

  fs.writeFileSync("src/data/portfolioData.json", JSON.stringify(formatted, null, 2))
}



fetchNotionData()
