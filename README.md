# Notion Save

> 直接透過瀏覽器插件新增內容到 Notion

### 前置作業
進入 https://www.notion.so/profile/integrations 
1. 取得 NOTION_API_KEY 
2. 指定可存取哪些頁面或是資料庫

### Todo
- [X] 可透過 API 新增內容到頁面
- [X] 透過瀏覽器插件介面直接新增
- [ ] 可指定頁面或是資料庫
- [ ] 可在頁面中建立子頁面
- [ ] 可新增圖片
- [ ] 可編輯文字樣式

#### 使用方式
1. 新增 .env 檔案，並填入 NOTION_API_KEY 和 NOTION_PAGE_ID
   ```
   NOTION_API_KEY=your_notion_api_key
   NOTION_PAGE_ID=your_notion_page_id
   ```
2. 執行 npm run build
3. 在 url 輸入 chrome://extensions/
   - 點選「載入未封裝項目」
   - 選擇專案資料夾 dist
  
#### API refrence
https://developers.notion.com/


