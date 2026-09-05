# 📞 TrueCallCheck Web v2.0 — Fast Caller Identification & Phone Lookup

<div align="center">

![TrueCallCheck Banner](https://github.com/user-attachments/assets/ba5a3f02-b225-49b9-8147-8dde385060e0)

[![Version](https://img.shields.io/badge/version-2.0.0-0284c7?style=for-the-badge&logo=react)](https://github.com/GoutamHX/TrueCallCheck-Web/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://github.com/GoutamHX/TrueCallCheck-Web/blob/main/LICENSE)
[![Pricing](https://img.shields.io/badge/Pricing-100%25_Free-10b981?style=for-the-badge)](https://goutamhx.github.io/TrueCallCheck-Web/)
[![Platforms](https://img.shields.io/badge/Platforms-Web_•_Android_•_Telegram-38bdf8?style=for-the-badge)](https://goutamhx.github.io/TrueCallCheck-Web/)
[![GitHub Stars](https://img.shields.io/github/stars/GoutamHX/TrueCallCheck-Web?style=for-the-badge&logo=github)](https://github.com/GoutamHX/TrueCallCheck-Web/stargazers)

<p align="center">
  <b>Fast, modern, and lightweight phone number lookup engine for Indian (+91) telecom networks.</b><br />
  Identify unknown callers, subscriber records, registered carriers, and linked alternate numbers in seconds.
</p>

[**🌐 Explore Live Web App**](https://goutamhx.github.io/TrueCallCheck-Web/) · [**🤖 Telegram Bot**](https://t.me/advancelookupbot) · [**📱 Download Android APK**](https://devuploads.com/w3thg0886brw) · [**👨‍💻 Developer Portfolio**](https://www.imgoutam.dev/)

</div>

---

## ⚡ Overview

**TrueCallCheck Web** is a fast, responsive open-source caller identification and number analysis platform designed for Indian (+91) phone numbers. 

Simply enter any 10-digit mobile number to retrieve comprehensive subscriber details — full name, father's name, registered address, carrier network, circle location, and linked contact numbers — directly in your browser without requiring an account or login.

---

## ✨ Key Features & Capabilities

### 🔍 Instant Caller ID Lookup
- **Fast Search Engine**: Query any 10-digit Indian mobile number in milliseconds.
- **Telecom Coverage**: Supports all major Indian mobile operators including Reliance Jio, Bharti Airtel, Vodafone Idea (Vi), and BSNL across all 22 circles.
- **Record Categorization**: Cleanly separates direct primary search matches from linked alternative numbers.

### 🌓 Modern Workbench UI (Dark & Light Mode)
- **Dual-Theme Parity**: Seamless switching between sleek Obsidian Dark Mode (`#090d16`) and crisp Precision Slate Light Mode (`#f8fafc`).
- **Floating Island Navbar**: Floating glassmorphic pill with one-click section navigation, active link tracking, and instant theme toggling.
- **Tactical Search Console**: Mobile number input with auto-prefixing (`+91 🇮🇳`), quick-clear action, and keyboard shortcuts (`Enter ↵`).
- **One-Click Copy**: Convenient copy chips on mobile numbers, addresses, and document IDs with visual feedback.

### 📊 Telecom Data Points Resolved
| Data Field | Description |
| :--- | :--- |
| **Subscriber Name** | Registered full legal name on the telecom connection |
| **Father / Guardian** | Parent or guardian name listed in directory records |
| **Registered Address** | Verified residential or official location details |
| **Carrier & Circle** | Service provider (Jio, Airtel, Vi, BSNL) and telecom state circle |
| **Email Address** | Registered subscriber email address (if available) |
| **Alternative Numbers** | Secondary or linked contact numbers discovered |
| **Document Identifier** | Masked government ID or document reference (when indexed) |
| **Passport Number** | Associated passport record (if available) |

### 🤖 Assistant ChatBot
- Interactive on-screen helper that answers user questions about carrier coverage, search instructions, and platform features.

### 📱 Multi-Client Ecosystem
Access TrueCallCheck across your preferred device:
- **Web App**: Full-featured browser experience with dark mode and detailed result cards.
- **Telegram Bot ([@advancelookupbot](https://t.me/advancelookupbot))**: Fast in-messenger number lookup without opening a browser.
- **Android APK**: Native lightweight package for mobile devices.

---

## 🛠️ Architecture & Tech Stack

- **Frontend Framework**: React 19 (`react`, `react-dom`)
- **Animation Engine**: Framer Motion (`framer-motion`)
- **Styling**: Vanilla CSS Design Tokens (Responsive 8-pt spacing grid, modern CSS variables, zero Tailwind bloat)
- **HTTP Client**: Axios (`axios`) with centralized timeout and error handling
- **Icon Sets**: React Icons (`react-icons`) & Lucide React (`lucide-react`)
- **Toast Alerts**: React Toastify (`react-toastify`)
- **Deployment**: GitHub Pages (`gh-pages`)

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### 2. Clone the Repository
```bash
git clone https://github.com/GoutamHX/TrueCallCheck-Web.git
cd TrueCallCheck-Web
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment (Optional)
A `.env` file can be configured in the project root:
```env
REACT_APP_API_BASE_URL=https://true-call-check.vercel.app
```

### 5. Start Local Development Server
```bash
npm start
```
The app will automatically open at [http://localhost:3000/TrueCallCheck-Web](http://localhost:3000/TrueCallCheck-Web).

### 6. Build for Production
```bash
# Verify code quality
npm run lint

# Compile production bundle
npm run build
```

---

## 📂 Project Structure

```
TrueCallCheck-Web/
├── public/
│   ├── favicon.ico
│   ├── index.html         # SEO metadata, Open Graph, Twitter cards, Schema.org
│   ├── llms.txt           # AI crawler & LLM index manifest
│   ├── manifest.json      # PWA application manifest
│   ├── robots.txt         # Search crawler directives
│   └── sitemap.xml        # Canonical sitemap
├── src/
│   ├── assets/            # Static brand imagery
│   ├── Components/
│   │   ├── ChatBot.jsx    # Interactive Assistant ChatBot
│   │   ├── Footer.jsx     # Colophon Bottom Bar & Social Links
│   │   ├── Home.jsx       # Main application controller
│   │   ├── Navbar.jsx     # Floating Island Pill Navigation
│   │   └── sections/      # Modular workbench view sections
│   │       ├── AboutSection.jsx
│   │       ├── FeaturesSection.jsx
│   │       ├── HeroSection.jsx
│   │       ├── NoticeModal.jsx
│   │       ├── PlatformsSection.jsx
│   │       ├── PrivacySection.jsx
│   │       ├── ResultCard.jsx
│   │       ├── ResultGroup.jsx
│   │       └── ResultSection.jsx
│   ├── config/            # Centralized API endpoints and timeouts
│   ├── data/              # Static site configuration, navigation, and features
│   ├── hooks/             # Custom React lifecycle hooks
│   ├── services/          # Decoupled API service layers (trueCallCheckService, chatService)
│   ├── Style/             # Modular CSS stylesheets (Home, Navbar, Footer, ChatBot)
│   ├── App.css            # Design tokens (Cobalt theme, Dark/Light mode)
│   ├── App.js             # Root application and anti-inspect initialization
│   ├── index.css          # Base typography & resets
│   └── index.js           # Browser router entry point
├── LICENSE                # MIT License
├── package.json           # Dependencies, scripts & metadata
└── README.md              # Project documentation
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project (`https://github.com/GoutamHX/TrueCallCheck-Web`)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author & Maintainer

**Goutam Septa** (GoutamHX / imgoutam)
- 🌐 **Portfolio**: [https://www.imgoutam.dev/](https://www.imgoutam.dev/)
- 🐙 **GitHub**: [@GoutamHX](https://github.com/GoutamHX)
- ✈️ **Telegram**: [@MR_GOUTAM08](https://t.me/MR_GOUTAM08)
- 📢 **Telegram Channel**: [@TheAdvanceBots](https://telegram.dog/TheAdvanceBots)
- 📸 **Instagram**: [@ig.goutam_](https://instagram.com/ig.goutam_)

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](https://github.com/GoutamHX/TrueCallCheck-Web/blob/main/LICENSE) for full legal text.
