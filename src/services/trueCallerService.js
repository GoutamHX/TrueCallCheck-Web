import apiClient from "./apiClient";
import { API_CONFIG } from "../config/api.config";

/**
 * Service for TrueCallCheck number lookup and notice operations
 */
export const trueCallerService = {
  /**
   * Fetch caller details for a given phone number
   * @param {string} phoneNumber - 10-digit Indian phone number
   * @returns {Promise<object>} API payload
   */
  async fetchNumberDetails(phoneNumber) {
    const response = await apiClient.get(API_CONFIG.ENDPOINTS.LOOKUP, {
      params: { newKey: phoneNumber },
    });
    return response.data;
  },

  /**
   * Fetch web announcement / maintenance notice
   * @returns {Promise<object|null>} Notice object or null
   */
  async fetchNotice() {
    try {
      const response = await apiClient.get(API_CONFIG.ENDPOINTS.WEB_NOTICE);
      return response.data;
    } catch {
      return null;
    }
  },

  /**
   * Human-friendly error parsing
   * @param {any} error
   * @returns {string}
   */
  getErrorMessage(error) {
    const status = error?.response?.status;
    const serverMsg = error?.response?.data?.error;

    if (status === 404) return "NOT_FOUND";
    if (status === 400) return serverMsg || "Bad request. Please check the number.";
    if (status === 408) return "Request timed out. The data server is slow. Try again.";
    if (status === 503) return "Data server unreachable. Please try again later.";
    if (status === 500) return "Server error. Please try again in a moment.";
    if (error?.code === "ECONNABORTED" || error?.message === "Network Error") {
      return "Network error. Check your connection and try again.";
    }
    return serverMsg || "Something went wrong. Please try again.";
  },
};

export default trueCallerService;
