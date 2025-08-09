# Notion Save - 瀏覽器擴充功能

> 透過 Chrome 瀏覽器擴充功能快速新增內容到 Notion 頁面

## 📖 專案簡介

Notion Save 是一個 Chrome 瀏覽器擴充功能，允許使用者透過簡單的彈出式介面直接將文字內容新增到指定的 Notion 頁面中。無需離開當前瀏覽頁面，即可快速記錄想法、筆記或重要資訊到您的 Notion 工作區。

## ✨ 功能特色

### 已完成功能
- ✅ 透過 Notion API 新增文字內容到頁面
- ✅ Chrome 瀏覽器擴充功能介面
- ✅ 簡潔的彈出式操作介面
- ✅ 即時狀態回饋（成功/失敗提示）

### 開發計畫
- [ ] 支援選擇不同頁面或資料庫
- [ ] 在現有頁面中建立子頁面
- [ ] 支援圖片上傳功能
- [ ] 文字格式編輯功能（粗體、斜體等）
- [ ] 支援 Markdown 語法
- [ ] 批次操作功能

## 🛠 技術架構

- **前端框架**: Vite + Vanilla JavaScript
- **API 整合**: @notionhq/client
- **擴充功能**: Chrome Extension Manifest V3
- **環境配置**: dotenv

## 📋 系統需求

- Node.js 16.0 或更高版本
- npm 或 yarn 套件管理器
- Chrome 瀏覽器
- Notion 帳戶及 API 存取權限

## 🚀 安裝與設定

### 1. 取得 Notion API 存取權限

1. 前往 [Notion Integrations](https://www.notion.so/profile/integrations)
2. 點選「Create new integration」建立新的整合
3. 填寫整合名稱（例如：Notion Save Extension）
4. 複製產生的 **Internal Integration Token**（這就是您的 NOTION_API_KEY）
5. 前往您要新增內容的 Notion 頁面
6. 點選頁面右上角的「⋯」選單
7. 選擇「Add connections」→ 選擇您剛建立的整合
8. 複製頁面 URL 中的頁面 ID（32 字元的英數字串）

### 2. 專案設定

```bash
# 複製專案
git clone https://github.com/Narrowd4c/notion-api-test.git
cd notion-api-test

# 安裝相依套件
npm install

# 建立環境變數檔案
touch .env.local
```

### 3. 環境變數配置

在專案根目錄建立 `.env.local` 檔案，並填入以下內容：

```env
VITE_NOTION_API_KEY=your_notion_integration_token
VITE_NOTION_PAGE_ID=your_notion_page_id
```

> ⚠️ **重要提醒**: 請勿將 `.env.local` 檔案提交到版本控制系統中

### 4. 建置專案

```bash
# 開發模式
npm run dev

# 建置生產版本
npm run build
```

### 5. 安裝 Chrome 擴充功能

1. 在 Chrome 瀏覽器網址列輸入 `chrome://extensions/`
2. 開啟右上角的「開發人員模式」
3. 點選「載入未封裝項目」
4. 選擇專案中的 `dist` 資料夾
5. 擴充功能安裝完成！

## 📱 使用方式

1. 點選 Chrome 工具列中的 Notion Save 圖示
2. 在彈出的視窗中輸入要新增的文字內容
3. 點選「送出」按鈕
4. 等待狀態提示確認是否成功新增

## 🏗 開發指南

### 專案結構

```
notion-api-test/
├── public/
│   ├── manifest.json      # Chrome 擴充功能配置
│   └── hello_extensions.png
├── dist/                  # 建置輸出目錄
├── index.html            # 擴充功能彈出視窗
├── server.js             # 主要邏輯程式
├── package.json          # 專案配置
└── .env.local           # 環境變數（需自行建立）
```

### 開發模式

```bash
# 啟動開發伺服器
npm run dev

# 監控檔案變更並自動重新建置
npm run build -- --watch
```

### 建置部署

```bash
# 建置生產版本
npm run build

# 檢查建置結果
ls -la dist/
```

## 🔧 疑難排解

### 常見問題

**Q: 擴充功能無法新增內容到 Notion**
- 確認 `.env.local` 檔案中的 API Key 和 Page ID 是否正確
- 檢查 Notion 整合是否已正確連接到目標頁面
- 確認網路連線正常

**Q: 建置失敗**
- 確認 Node.js 版本是否符合需求
- 刪除 `node_modules` 資料夾後重新執行 `npm install`
- 檢查是否有語法錯誤

**Q: 擴充功能無法載入**
- 確認已在 Chrome 中開啟「開發人員模式」
- 檢查 `manifest.json` 檔案格式是否正確
- 重新建置專案並重新載入擴充功能

## 📚 API 參考資源

- [Notion Developers](https://developers.notion.com/) - 官方開發者文件
- [Notion API Reference](https://developers.notion.com/reference) - API 詳細說明
- [Chrome Extensions Developer Guide](https://developer.chrome.com/docs/extensions/) - Chrome 擴充功能開發指南

## 📄 授權條款

本專案採用 ISC 授權條款。詳細內容請參考 LICENSE 檔案。

## 🤝 貢獻指南

歡迎提交 Issue 或 Pull Request 來改善這個專案！

---

© 2025 Notion Save Extension


