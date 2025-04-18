const fs = require("fs")
const { Client } = require("@notionhq/client")

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const databaseId = process.env.NOTION_DATABASE_ID

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
    const props = page.properties
    return {
      title: props["Title"].title[0]?.plain_text || "",
      description: props["Description"]?.rich_text[0]?.plain_text || "",
      tags: props["Tags"]?.multi_select?.map((tag) => tag.name) || [],
      liveURL: props["Live URL"]?.url || "",
      github: props["GitHub"]?.url || "",
      slug: slugify(props["Title"].title[0]?.plain_text || ""),
    }
  })

  fs.writeFileSync("src/data/portfolioData.json", JSON.stringify(formatted, null, 2))
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
}

fetchNotionData()
