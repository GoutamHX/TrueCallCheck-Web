# 📞 TrueCallCheck Web v2.0 — Privacy-First Telecom Intelligence

<div align="center">

![TrueCallCheck Banner](https://github.com/user-attachments/assets/ba5a3f02-b225-49b9-8147-8dde385060e0)

[![Version](https://img.shields.io/badge/version-2.0.0-0284c7?style=for-the-badge&logo=react)](https://github.com/GoutamHX/TrueCallCheck-Web/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://github.com/GoutamHX/TrueCallCheck-Web/blob/main/LICENSE)
[![Pricing](https://img.shields.io/badge/Pricing-100%25_Free_Forever-10b981?style=for-the-badge)](https://goutamhx.github.io/TrueCallCheck-Web/)
[![Zero Tracking](https://img.shields.io/badge/Privacy-Zero_Data_Logging-38bdf8?style=for-the-badge&logo=shield)](https://goutamhx.github.io/TrueCallCheck-Web/)
[![GitHub Stars](https://img.shields.io/github/stars/GoutamHX/TrueCallCheck-Web?style=for-the-badge&logo=github)](https://github.com/GoutamHX/TrueCallCheck-Web/stargazers)

<p align="center">
  <b>Fast, ephemeral, and privacy-first reverse phone lookup engine for Indian (+91) telecom circles.</b><br />
  Identify unknown callers, subscriber records, registered carriers, and linked alternate numbers — with zero tracking and no login required.
</p>

[**🌐 Explore Live Web App**](https://goutamhx.github.io/TrueCallCheck-Web/) · [**🤖 Telegram Bot**](https://t.me/advancelookupbot) · [**📱 Download Android APK**](https://devuploads.com/w3thg0886brw) · [**👨‍💻 Developer Portfolio**](https://www.imgoutam.dev/)

</div>

---

## ⚡ Overview

**TrueCallCheck Web** is a modern, open-source telecom intelligence and caller identification platform. Unlike commercial caller ID apps that harvest user contact books and commercialize search telemetry, TrueCallCheck operates on a strict **zero-logging ephemeral query architecture**.

Search any 10-digit Indian phone number to retrieve instant subscriber records, registered address details, carrier circles, and linked contact lines.

---

## ✨ Key Features & Capabilities

### 🛡️ Privacy-First Protocol (Zero Logging)
- **No Contact Book Harvesting**: We never read, upload, or sync your personal contact book.
- **Zero Query Persistence**: Searches and lookups are ephemeral — nothing is saved to a user tracking database.
- **No Account Required**: Immediate access with zero authentication walls, registration forms, or subscription tiers.

### 🌓 Modern-Minimal Workbench UI (Dark & Light Mode)
- **Obsidian Dark Mode**: Deep obsidian surfaces (`#090d16`) with cobalt telemetry signals designed for high-contrast viewing.
- **Precision Slate Light Mode**: Clean, crisp cool slate surfaces (`#f8fafc`) with APCA contrast standards.
- **Fluid Floating Island Navbar**: Floating glassmorphic navigation pill with instant section switching and theme toggling.
- **Tactical Search Console**: 10-digit Indian mobile number validation, auto-prefixing (`+91 🇮🇳`), quick-clear controls, and keyboard shortcuts (`Enter ↵`).
- **Telemetry Result Dossier**: Instant record classification distinguishing between direct subscriber targets and associated alternate lines.

### 📊 Telecom Data Points Resolved
| Data Field | Description |
| :--- | :--- |
| **Subscriber Name** | Registered full legal name and subscriber profile |
| **Father / Guardian** | Parent or guardian name listed in directory records |
| **Registered Address** | Verified residential or official registered location |
| **Carrier & Telecom Circle** | Provider network (Jio, Airtel, Vi, BSNL) and state circle |
| **Email Address** | Associated or registered subscriber email |
| **Alternative Mobile Lines** | Secondary or linked contact numbers detected |
| **Document Identifier** | Masked government ID or document reference (when present) |
| **Passport Number** | Associated passport record (if indexed) |

### 🤖 Interactive Assistant ChatBot
- Built-in on-screen AI assistant answering user questions regarding service status, data coverage, lookup safety, and platform usage.

---

## 📱 Multi-Platform Ecosystem

Access TrueCallCheck across your preferred client:

| Platform | Client Type | Access |
| :--- | :--- | :--- |
| **TrueCallCheck Web** | Browser Single Page App | [Launch Web App](https://goutamhx.github.io/TrueCallCheck-Web/) |
| **Advance Lookup Bot** | Telegram Interactive Bot | [@advancelookupbot](https://t.me/advancelookupbot) |
| **TrueCallCheck App** | Native Android APK | [Direct APK Download](https://devuploads.com/w3thg0886brw) |

---

## 🛠️ Architecture & Tech Stack

- **Frontend Core**: React 19 (`react`, `react-dom`)
- **Animations & Transitions**: Framer Motion (`framer-motion`)
- **Styling**: Vanilla CSS Design Tokens (Strict Hallmark Anti-AI-Slop System, responsive 8-pt grid, zero CSS bloat)
- **Network Client**: Axios (`axios`) with centralized timeout and error-handling interceptor
- **Iconography**: React Icons (`react-icons`) & Lucide React (`lucide-react`)
- **Notifications**: React Toastify (`react-toastify`)
- **Hosting & CI/CD**: GitHub Pages with automated builds (`gh-pages`)

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
Create a `.env` file in the project root:
```env
REACT_APP_API_BASE_URL=https://true-call-check.vercel.app
```

### 5. Start Development Server
```bash
npm start
```
The application will open automatically at [http://localhost:3000/TrueCallCheck-Web](http://localhost:3000/TrueCallCheck-Web).

### 6. Production Build & Linting
```bash
# Run code quality lint checks
npm run lint

# Build optimized production bundle
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
│   │   ├── Footer.jsx     # Modern Colophon Bottom Bar
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

Contributions, feedback, and suggestions are welcome!

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

Distributed under the **MIT License**. See [`LICENSE`](https://github.com/GoutamHX/TrueCallCheck-Web/blob/main/LICENSE) for more details.
