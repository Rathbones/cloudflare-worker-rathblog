# 🤖 Copilot Instructions for Cloudflare Worker: Rathblog Offline

This document provides guidance for AI assistants (like GitHub Copilot, ChatGPT, and other helpful bots) as well as human developers working with the **Cloudflare Worker Rathblog** project.

---

## 🧭 Project Overview

This Cloudflare Worker handles edge functionality for [Rathblog](https://rathbone.dev), including an offline fallback page when the blog is unavailable. It’s designed to improve **resilience, performance**, and **developer joy**.

---

## 🔍 Key Components

1. `index.js`  
   - Primary handler for serving the offline HTML content  
   - Follows the Cloudflare Workers `fetch` event pattern  
   - Returns a clean, minimal response for offline visitors

2. `wrangler.toml`  
   - Configuration for Cloudflare deployment  
   - Defines Worker name, compatibility date, entry point, and environment details

---

## 🧑‍💻 Development Guidelines

### ✨ General Principles

- Use modern JavaScript (ES2020+)
- Prefer `async/await` for asynchronous flows
- Keep code clean, expressive, and documented
- Fail gracefully and respond clearly

### ⚙️ Worker Implementation

- Use the `fetch` event to handle requests  
- Always return a valid `Response` object  
- Set headers explicitly (e.g. `Content-Type`, `Cache-Control`)  
- Implement basic CORS headers if needed  
- Consider Worker size/memory limits (especially for future features)

---

## ✍️ Feature Implementation Tips

### 🔄 Request Handling

- Always use `async/await`  
- Gracefully handle unexpected requests  
- Return appropriate status codes (e.g. `200`, `404`, `503`)  
- Be explicit with MIME types  

### 🎨 Response Generation

- Inline HTML for simple offline pages  
- Set headers like:  
    Content-Type: text/html; charset=UTF-8  
    Cache-Control: no-store  

### 💥 Error Handling

- Catch exceptions  
- Show friendly fallback messages  
- Log to `console.error()` if needed

---

## 🧪 Testing Guidelines

### 🛠 Local Testing

Use:

    wrangler dev

Or test in Cloudflare’s production environment:

    wrangler dev --remote

Verify:

- HTML renders as expected  
- Headers are correct  
- Offline logic works even if your origin PC is off

### 🚀 Production Testing

- Test from another network or browser  
- Confirm Cloudflare correctly serves fallback page  
- Check logs using `wrangler tail` for runtime issues

---

## 📦 Dependencies

- Node.js v18+ (LTS recommended)  
- Wrangler CLI v3 or v4  
- Cloudflare account (Free plan is sufficient)

---

## ⚙️ Configuration

### wrangler.toml

Ensure the file includes:

    name = "rathblogoffline"
    main = "index.js"
    compatibility_date = "2025-05-26"

- Keep up to date with Workers API compatibility  
- Document new config values as needed

---

## 🔐 Security Guidelines

- Validate input data (even if minimal)  
- Avoid logging sensitive headers  
- Set secure headers like:  
    X-Content-Type-Options: nosniff  
    Referrer-Policy: strict-origin-when-cross-origin  
    Content-Security-Policy (optional for inline HTML)

---

## 🚄 Performance Guidelines

- Keep responses small and static  
- Avoid dynamic rendering where possible  
- Use [Cache API](https://developers.cloudflare.com/workers/runtime-apis/cache/) if adding versioned content  
- Minimise memory and CPU usage

---

## 📚 Documentation Requirements

- Update this file and `README.md` for changes  
- Document new config flags, routes, or runtime patterns  
- Include examples and comments for new features  
- Add a `CHANGELOG.md` if project scope expands

---

## 🧠 TL;DR for Copilot

- Entry point: `index.js`  
- Config file: `wrangler.toml`  
- Purpose: Serve an offline page when blog origin is down  
- Deploy with: `wrangler publish`

---

## 🛠 Deployment Process

    # Install dependencies
    npm install

    # Run locally
    wrangler dev

    # Deploy to Cloudflare
    wrangler publish

---

## 🗃 Version Control Guidelines

- Use clear, conventional commits (e.g. `feat: add fallback page`)  
- Create feature branches from `main`  
- Submit pull requests for changes  
- Clean up branches after merging

---

## 👨‍🔧 Maintenance

Maintained by **Ian Rathbone**.  
All changes should align with Rathblog’s tone: curious, resilient, and welcoming.

---

💡 Questions or contributions? Open an issue or summon Copilot.  
🧪 Testing offline pages should feel like a warm cup of tea: reliable, refreshing, and slightly nostalgic.
