import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

(() => {
  if (typeof window === "undefined" || window.__TCC_INITIALIZED__) return;
  try {
    Object.defineProperty(window, "__TCC_INITIALIZED__", { value: true, writable: false });
  } catch {
    window.__TCC_INITIALIZED__ = true;
  }
  const _b = (s) => {
    try { return window.atob(s); } catch { return ""; }
  };
  const brand = _b("VHJ1ZUNhbGxDaGVjaw==");
  const author = _b("R291dGFtIFNlcHRh");
  const site = _b("aHR0cHM6Ly93d3cuaW1nb3V0YW0uZGV2Lw==");
  const repo = _b("aHR0cHM6Ly9naXRodWIuY29tL0dvdXRhbUhY");

  console.log(
    `%c 📞 ${brand} v2.0 %c Crafted with ❤️ by ${author} `,
    "background:#0284c7;color:#ffffff;font-weight:700;font-size:12px;padding:6px 12px;border-radius:4px 0 0 4px;font-family:system-ui,sans-serif;",
    "background:#090d16;color:#38bdf8;font-weight:600;font-size:12px;padding:6px 12px;border-radius:0 4px 4px 0;font-family:system-ui,sans-serif;"
  );
  console.log(
    `%c ⚡ Portfolio: ${site} | GitHub: ${repo}/TrueCallCheck-Web %c`,
    "color:#94a3b8;font-size:11px;font-family:monospace;padding:3px 0;",
    ""
  );
})();

const getBasename = () => {
  if (typeof window !== "undefined" && window.location.hostname.includes("github.io")) {
    return "/TrueCallCheck-Web";
  }
  return "";
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={getBasename()}>
    <App />
  </BrowserRouter>
);
