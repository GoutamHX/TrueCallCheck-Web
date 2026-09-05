import { SITE_CONFIG } from "./siteConfig";

export const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Features", id: "features" },
  { name: "Privacy", id: "privacy" },
  { name: "Platforms", id: "platforms" },
];

export const FOOTER_SECTIONS_DATA = [
  {
    title: "Sections",
    links: [
      { name: "Home", sectionId: "home" },
      { name: "About", sectionId: "about" },
      { name: "Features", sectionId: "features" },
      { name: "Privacy", sectionId: "privacy" },
      { name: "Platforms", sectionId: "platforms" },
    ],
  },
  {
    title: "Our Platforms",
    items: [
      { type: "android", text: "Android App", url: SITE_CONFIG.links.androidApk },
      { type: "telegram", text: "Telegram Bot", url: SITE_CONFIG.links.telegramBot },
      { type: "web", text: "Web App", url: "#home" },
    ],
  },
  {
    title: "Developer",
    links: [
      { type: "portfolio", text: "Portfolio", url: SITE_CONFIG.author.portfolioUrl },
      { type: "github", text: "GitHub", url: SITE_CONFIG.author.githubUrl },
      { type: "telegram", text: "Telegram", url: SITE_CONFIG.author.telegramChannel },
      { type: "code", text: "Source Code", url: SITE_CONFIG.links.githubRepo },
    ],
  },
];

export const SOCIAL_LINKS_DATA = [
  { type: "github", url: SITE_CONFIG.author.githubUrl, label: "GitHub" },
  { type: "portfolio", url: SITE_CONFIG.author.adminUrl, label: "Portfolio" },
  { type: "instagram", url: SITE_CONFIG.author.instagramUrl, label: "Instagram" },
];
