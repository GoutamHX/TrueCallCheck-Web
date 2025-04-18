import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import '../Style/ChatBot.css'
import img from '../assets/ChatBot.png'
const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [show, setShow] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        // Add user message
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'user', text: input }
        ]);

        setInput('');

        // Scroll to the bottom
        const chatBox = document.getElementById('chatMessages');
        chatBox.scrollTop = chatBox.scrollHeight;

        try {
            // Simulating a chat response (replace with API request)
            const response = await fetch('https://true-call-check.vercel.app/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            });
            const data = await response.json();

            const botReply = data.reply || "🤖 Sorry, I didn't get that.";

            // Add bot response
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: botReply }
            ]);

            // Scroll to the bottom
            chatBox.scrollTop = chatBox.scrollHeight;

        } catch (error) {
            console.error('Error:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: '❌ Error occurred. Try again later.' }
            ]);
        }
    };
    function OpenChat() {
        setShow(true)
    }
    function CloseChat() {
        setShow(false)
        }
    return (
        <div>
        {show ? (
          <div className="chatbot-container" style={{ width: "380px", zIndex: 9999 }}>
            <div className="chatbot-header">
              <div className="d-flex align-items-center">
                <div className="chatbot-avatar me-2">🤖</div>
                <div>
                  <h6 className="mb-0">TrueCallCheck Assistant</h6>
                  <small className="status-badge">Online</small>
                </div>
              </div>
              <button className="chatbot-close-btn" onClick={CloseChat}>
                &times;
              </button>
            </div>
      
            <div className="chatbot-messages" id="chatMessages">
              {messages.length === 0 ? (
                <div className="welcome-message">
                  <p>👋 Hi there! I'm your TrueCallCheck Assistant.</p>
                  <p>How can I help you today?</p>
                  <div className="quick-questions">
                    <button onClick={() => setInput("How does TrueCallCheck work?")}>
                      How does TrueCallCheck work?
                    </button>
                    <button onClick={() => setInput("Is my number verified?")}>
                      Is my number verified?
                    </button>
                  </div>
                </div>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message-bubble ${
                      msg.sender === "user" ? "user-message" : "bot-message"
                    }`}
                  >
                    {msg.sender !== "user" && (
                      <div className="message-sender">Assistant</div>
                    )}
                    <div className="message-content">{msg.text}</div>
                    <div className="message-time">
                      {new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
      
            <div className="chatbot-input-area">
              <div className="input-group">
                <input
                  type="text"
                  value={input}
                  placeholder="Type your message..."
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="chat-input"
                />
                <button className="send-button" onClick={sendMessage}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button className="chatbot-launcher" onClick={OpenChat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        )}
      </div>

    );
};

export default ChatBot;
