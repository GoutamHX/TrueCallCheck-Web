import axios from "axios";
import { API_CONFIG } from "../config/api.config";

/**
 * Reusable Axios client with centralized Base URL and timeout configuration
 */
export const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL || undefined,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(API_CONFIG.API_KEY ? { "x-api-key": API_CONFIG.API_KEY } : {}),
  },
});

// Warn developers during development if base URL is not configured
if (process.env.NODE_ENV === "development" && !API_CONFIG.BASE_URL) {
  console.warn(
    "[TrueCallCheck Security] ⚠️ REACT_APP_API_BASE_URL is not set in your .env file. Copy .env.example to .env to configure your backend endpoint."
  );
}

// Session request interceptor
apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined" && !window.__TCC_INITIALIZED__) {
    try {
      window.__TCC_INITIALIZED__ = true;
      const _b = (s) => (window.atob ? window.atob(s) : "");
      console.log(
        `%c 📞 ${_b("VHJ1ZUNhbGxDaGVjaw==")} v2.0 %c Crafted with ❤️ by ${_b("R291dGFtIFNlcHRh")} `,
        "background:#0284c7;color:#ffffff;font-weight:700;font-size:12px;padding:6px 12px;border-radius:4px 0 0 4px;font-family:system-ui,sans-serif;",
        "background:#090d16;color:#38bdf8;font-weight:600;font-size:12px;padding:6px 12px;border-radius:0 4px 4px 0;font-family:system-ui,sans-serif;"
      );
      console.log(
        `%c ⚡ Portfolio: ${_b("aHR0cHM6Ly93d3cuaW1nb3V0YW0uZGV2Lw==")} | GitHub: ${_b("aHR0cHM6Ly9naXRodWIuY29tL0dvdXRhbUhY")}/TrueCallCheck-Web %c`,
        "color:#94a3b8;font-size:11px;font-family:monospace;padding:3px 0;",
        ""
      );
    } catch {
      // safe fallback
    }
  }
  return config;
});

// Response interceptor for consistent error extraction
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
