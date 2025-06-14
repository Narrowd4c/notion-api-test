import 'dotenv/config'

import { Client } from '@notionhq/client';

const notion = new Client({ auth:  process.env.NOTION_API_KEY });

(async () => {
  const blockId = process.env.NOTION_PAGE_ID;  // also accept page ID
  const response = await notion.blocks.children.append({
    block_id: blockId,
    children: [
      {
        "heading_2": {
          "rich_text": [
            {
              "text": {
                "content": "Lacinato kale"
              }
            }
          ]
        }
      },
      {
        "paragraph": {
          "rich_text": [
            {
              "text": {
                "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                "link": {
                  "url": "https://en.wikipedia.org/wiki/Lacinato_kale"
                }
              }
            }
          ]
        }
      }
    ],
  });
  console.log(response);
})();