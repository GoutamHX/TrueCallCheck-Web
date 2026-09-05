/**
 * Centralized API configuration for TrueCallCheck Web
 */

export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL || "https://true-call-check.vercel.app",
  TIMEOUT: 15000,
  ENDPOINTS: {
    LOOKUP: "/api/truecallcheckapi",
    WEB_NOTICE: "/web-notice",
    CHAT: "/api/chat",
  },
};

export default API_CONFIG;
