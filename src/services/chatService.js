import apiClient from "./apiClient";
import { API_CONFIG } from "../config/api.config";

/**
 * Service for Assistant ChatBot
 */
export const chatService = {
  /**
   * Send a chat message to the assistant endpoint
   * @param {string} message
   * @returns {Promise<string>} reply text
   */
  async sendMessage(message) {
    const response = await apiClient.post(API_CONFIG.ENDPOINTS.CHAT, {
      message,
    });
    return response.data?.reply || "Sorry, I couldn't get a response.";
  },
};

export default chatService;
