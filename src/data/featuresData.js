import { SITE_CONFIG } from "./siteConfig";

export const TRUST_BADGES = ["Free", "Instant", "No Login", "Private"];

export const ABOUT_HIGHLIGHTS = [
  "Instant Number Lookup — Just enter a number and get real-time info",
  "Carrier & Location Info — See the service provider and telecom circle",
  "100% Free — No charges, subscriptions, or hidden fees",
  "Mobile Responsive — Works seamlessly on both mobile and desktop",
  "Open Source — Community-supported, customizable project",
];

export const DATA_POINTS = [
  { key: "name", label: "Full Name & Father Name" },
  { key: "address", label: "Address Information" },
  { key: "carrier", label: "Carrier & Circle Details" },
  { key: "email", label: "Email Address" },
  { key: "mobile", label: "Mobile & Alternate Numbers" },
  { key: "id", label: "Document & Passport No" },
];

export const FEATURES_LIST = [
  {
    iconType: "phone",
    title: "Instant Number Lookup",
    description:
      "Enter a number and get real-time info: name, father name, address, carrier, email, and more.",
  },
  {
    iconType: "carrier",
    title: "Carrier & Location Info",
    description:
      "See the telecom circle and service provider for any Indian mobile number instantly.",
  },
  {
    iconType: "free",
    title: "100% Free Forever",
    description:
      "No charges, subscriptions, or hidden fees. TrueCallCheck is completely free to use.",
  },
  {
    iconType: "responsive",
    title: "Mobile Responsive",
    description:
      "Works seamlessly on both mobile and desktop browsers with a clean adaptive UI.",
  },
  {
    iconType: "fast",
    title: "Lightning Fast Results",
    description:
      "Get accurate caller information in milliseconds with our high-speed lookup engine.",
  },
  {
    iconType: "openSource",
    title: "Open Source",
    description:
      "Community-supported, transparent, and fully customizable. Contribute on GitHub.",
  },
];

export const PRIVACY_POINTS = [
  {
    iconType: "eyeSlash",
    title: "No Data Storage",
    desc: "We do not store any user data or lookup history. Your searches remain private.",
  },
  {
    iconType: "userCheck",
    title: "No Login Required",
    desc: "No account or login is required to use TrueCallCheck. Just search and go.",
  },
  {
    iconType: "cookieBite",
    title: "No Tracking",
    desc: "We don't use cookies, analytics trackers, or any invasive user tracking.",
  },
  {
    iconType: "heart",
    title: "Free Forever",
    desc: "No charges, subscriptions, or hidden paywalls. Completely free.",
  },
];

export const PLATFORMS_DATA = [
  {
    id: "android",
    badge: "Android App",
    name: "TrueCallCheck App",
    desc: "Download our Android app for on-the-go caller identification. Fast, lightweight, and works offline.",
    ctaText: "Download APK",
    ctaUrl: SITE_CONFIG.links.androidApk,
    iconType: "android",
    isCurrent: false,
  },
  {
    id: "telegram",
    badge: "Telegram Bot",
    name: "Advance Lookup Bot",
    desc: "Send any phone number directly in Telegram and get instant caller details. No app install needed.",
    ctaText: "Open in Telegram",
    ctaUrl: SITE_CONFIG.links.telegramBot,
    iconType: "telegram",
    isCurrent: false,
  },
  {
    id: "web",
    badge: "Web App",
    name: "TrueCallCheck Web",
    desc: "Use right from your browser with full features. Dark mode, instant search, and detailed results.",
    ctaText: "Currently Using",
    ctaUrl: "#home",
    iconType: "web",
    isCurrent: true,
  },
];
