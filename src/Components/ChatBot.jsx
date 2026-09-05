import React, { useState, useRef, useEffect } from "react";
import { chatService } from "../services/chatService";
import { CHATBOT_CONFIG } from "../data";
import "../Style/ChatBot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (overrideText) => {
    const msg = (overrideText ?? input).trim();
    if (!msg || isLoading) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: msg, time: new Date() },
    ]);
    setInput("");
    setIsLoading(true);

    try {
      const reply = await chatService.sendMessage(msg);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: reply, time: new Date() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Something went wrong. Please try again.",
          time: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const fmt = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div>
      {show ? (
        <div className="chatbot-container" role="dialog" aria-label="TrueCallCheck Chat Assistant">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar" aria-hidden="true">🤖</div>
              <div>
                <p className="chatbot-title">{CHATBOT_CONFIG.title}</p>
                <span className="chatbot-status">● Online</span>
              </div>
            </div>
            <button
              className="chatbot-close-btn"
              onClick={() => setShow(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.length === 0 ? (
              <div className="chatbot-welcome">
                <div className="welcome-avatar" aria-hidden="true">🤖</div>
                <p className="welcome-title">{CHATBOT_CONFIG.welcomeMessage}</p>
                <p className="welcome-sub">{CHATBOT_CONFIG.welcomeSub}</p>
                <div className="quick-questions">
                  {CHATBOT_CONFIG.quickQuestions.map((q, i) => (
                    <button key={i} onClick={() => sendMessage(q)}>
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`message-bubble ${
                      msg.sender === "user" ? "user-message" : "bot-message"
                    }`}
                  >
                    <div className="message-content">{msg.text}</div>
                    <div className="message-time">{fmt(msg.time)}</div>
                  </div>
                ))}
                {isLoading && (
                  <div className="message-bubble bot-message typing-bubble">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input */}
          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              placeholder="Ask about TrueCallCheck…"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="chat-input"
              disabled={isLoading}
              aria-label="Message assistant"
            />
            <button
              className="send-button"
              onClick={() => sendMessage()}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          className="chatbot-launcher"
          onClick={() => setShow(true)}
          aria-label="Open TrueCallCheck Assistant"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
