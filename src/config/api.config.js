/**
 * Centralized API configuration for TrueCallCheck Web
 * All sensitive endpoints and credentials are loaded securely from environment variables (.env)
 */

export const API_CONFIG = {
  // Read backend base URL strictly from environment variable
  BASE_URL: (process.env.REACT_APP_API_BASE_URL || "").trim().replace(/\/+$/, ""),
  
  // Optional API authentication key
  API_KEY: (process.env.REACT_APP_API_KEY || "").trim(),
  
  // Network request timeout (ms)
  TIMEOUT: Number(process.env.REACT_APP_API_TIMEOUT) || 15000,
  
  // Relative API routes
  ENDPOINTS: {
    LOOKUP: process.env.REACT_APP_ENDPOINT_LOOKUP || "/api/truecallcheckapi",
    WEB_NOTICE: process.env.REACT_APP_ENDPOINT_NOTICE || "/web-notice",
    CHAT: process.env.REACT_APP_ENDPOINT_CHAT || "/api/chat",
  },
};

export default API_CONFIG;
