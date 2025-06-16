
import { Client } from '@notionhq/client/';

if (typeof window !== 'undefined') {
  window.fetch = window.fetch.bind(window);
}

const notion = new Client({ auth:  import.meta.env.VITE_NOTION_API_KEY });

async function addToPage(text) {
  const blockId = import.meta.env.VITE_NOTION_PAGE_ID; // // also accept page ID
  const response = await notion.blocks.children.append({
    block_id: blockId,
    children: [
      {
        "paragraph": {
          "rich_text": [
            {
              "text": {
                "content": text,
              }
            }
          ]
        }
      }
    ],
  });
  console.log(response);
}

const submitButton = document.getElementById('submitButton');
const statusMessage = document.getElementById('statusMessage');

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const inputText = document.getElementById('inputField');
  if (inputText.value) {
    try {
      await addToPage(inputText.value);
      console.log('Text added to Notion page successfully');
      statusMessage.textContent = '儲存成功！';
      inputText.value = ''; // Clear the input field after submission
    } catch (error) {

      console.error('Error adding text to Notion page:', error);
      statusMessage.textContent = '儲存失敗！';
    }
  } else {
    console.warn('Input text is empty');
    statusMessage.textContent = '請輸入內容！';
  }
});