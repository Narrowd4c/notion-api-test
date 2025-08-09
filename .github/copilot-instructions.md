# Notion API Test - Chrome Browser Extension

Notion API Test is a Chrome browser extension built with Vite and Node.js that allows users to quickly save text to Notion pages via the Notion API. The extension provides a simple popup interface for text input and submission.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Setup
- Install dependencies: `npm install` -- takes ~5 seconds. NEVER CANCEL.
- Create environment file: `cp .env.example .env` and fill in your Notion API credentials
- Required environment variables in `.env`:
  ```
  VITE_NOTION_API_KEY=your_notion_api_key_here
  VITE_NOTION_PAGE_ID=your_notion_page_id_here
  ```

### Build and Development
- Build for production: `npm run build` -- takes ~1 second. NEVER CANCEL. Set timeout to 30+ seconds for safety.
- Development server: `npm run dev` -- starts Vite dev server on http://localhost:5173/
- DO NOT use `npm start` - it fails due to ES module import path issues and is not needed for this browser extension

### Environment Setup
- Node.js version: v20.19.4 (confirmed working)
- npm version: 10.8.2 (confirmed working)
- No additional SDKs or tools required beyond Node.js and npm

## Validation

### Manual Testing Steps
- ALWAYS run through this complete validation after making changes:
  1. Build the extension: `npm run build`
  2. Start development server: `npm run dev`
  3. Open browser to http://localhost:5173/
  4. Enter test text in the textarea
  5. Click "送出" (Submit) button
  6. Verify status message changes to show success/failure appropriately
  7. Check browser console for API call attempts

### Extension Installation Testing
- Load the built extension in Chrome:
  1. Build first: `npm run build`
  2. Open Chrome and go to `chrome://extensions/`
  3. Enable "Developer mode"
  4. Click "Load unpacked"
  5. Select the `dist` folder from the project
  6. Test the extension popup functionality

### Expected Behavior
- With valid Notion API credentials: Text should be saved to the specified Notion page
- With invalid/missing credentials: Status should show "儲存失敗！" (Save failed!)
- Without input text: Status should show "請輸入內容！" (Please enter content!)

## Common Tasks

### Repository Structure
```
.
├── README.md              # Project documentation (in Chinese)
├── package.json           # Dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── index.html             # Extension popup HTML
├── server.js              # Main application logic
├── .env.example           # Environment variable template
├── .env                   # Your environment variables (not tracked)
├── .gitignore             # Git ignore rules
├── public/
│   ├── manifest.json      # Chrome extension manifest
│   └── hello_extensions.png # Extension icon
└── dist/                  # Build output (created by Vite)
```

### Key Files to Know
- `server.js` - Contains the Notion API integration logic and DOM event handlers
- `index.html` - The extension's popup interface with Chinese text
- `public/manifest.json` - Chrome extension configuration with API permissions
- `.env` - Environment variables for Notion API key and page ID (must be VITE_ prefixed)

### Dependencies
- `@notionhq/client` v3.1.3 - Official Notion API client
- `dotenv` v16.5.0 - Environment variable loading (though Vite handles the actual env var processing)
- `vite` v6.3.5 - Build tool and development server

### Available npm Scripts
```bash
npm run dev     # Start Vite development server
npm run build   # Build for production
npm start       # BROKEN - Do not use (ES module import issue)
```

### Timing Expectations
- `npm install`: ~4-5 seconds
- `npm run build`: ~1 second
- `npm run dev` startup: ~160ms
- No tests configured (no testing required)

### No Additional Tooling
- No linting configured (no `npm run lint`)
- No testing configured (no `npm run test`)
- No formatting tools configured
- No CI/CD pipelines configured

## Troubleshooting

### Common Issues
- **`npm start` fails**: This is expected. The `server.js` file is meant for browser execution, not Node.js
- **"Failed to fetch" errors**: Expected when testing without valid Notion API credentials
- **Missing environment variables**: Ensure `.env` file exists with `VITE_` prefixed variables
- **Extension doesn't load**: Make sure you built first with `npm run build` and load the `dist` folder

### Environment Variables
- Use `VITE_` prefix for all environment variables (required by Vite)
- Variables are embedded at build time, not runtime
- Create `.env` file from `.env.example` template

### API Integration
- Extension communicates with `https://api.notion.com/*` (configured in manifest.json)
- Requires valid Notion integration token and page/database ID
- Error handling shows Chinese status messages in the UI

## Development Notes

### Making Changes
- Modify `server.js` for API logic changes
- Modify `index.html` for UI changes
- Modify `public/manifest.json` for extension permissions/configuration
- Always test with `npm run dev` first, then build with `npm run build`
- Test both development server and built extension in Chrome

### Code Style
- ES modules with `import`/`export` syntax
- Modern async/await for API calls
- Chinese text in the user interface
- No formal code style enforcement configured