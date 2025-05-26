# Cloudflare Worker for Rathblog

A Cloudflare Worker implementation that manages the Rathblog's edge functionality, providing features like offline page handling and request processing at the edge.

## 🚀 Features

- **Offline Page Handling**: Serves a friendly offline page when the origin server is unavailable
- **Edge Processing**: Leverages Cloudflare's global network for optimal performance
- **Custom Error Pages**: Provides user-friendly error responses

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/get-started/) (Cloudflare Workers CLI)
- Cloudflare account with Workers subscription

## 🛠️ Setup

1. **Install Dependencies**
```bash 
npm install
```

2. **Configure Wrangler**
    - Ensure your `wrangler.toml` is properly configured with your account details
    - Update any environment-specific variables

3. **Local Development**
```bash 
wrangler dev
```

4. **Deployment** 
```bash 
wrangler publish
```

## 🏗️ Project Structure
```
cloudflare-worker-rathblog/
├── offline-page.js     # Handles offline page responses
├── wrangler.toml          # Cloudflare Worker configuration
└── README.md             # Project documentation
```
## 🔧 Configuration

The worker can be configured through the `wrangler.toml` file. Make sure to set appropriate:
- Routes
- Environment variables
- Zone ID
- Account ID

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
```bash
    git checkout -b feature/amazing-feature
```
3. Commit your changes
```bash
git commit -m 'Add some amazing feature'
```
4. Push to the branch
```bash
git push origin feature/amazing-feature
```
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Ian Rathbone

## 🙏 Acknowledgments

- Cloudflare Workers platform
- The Cloudflare community
- All contributors to this project

---

For more information about Cloudflare Workers, visit the [official documentation](https://developers.cloudflare.com/workers/).
