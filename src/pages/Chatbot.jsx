/*import { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      role: "bot",
      text: "Hello 👋 I am your Financial AI Assistant. Ask me about trading strategies, risk management, or portfolio allocation."
    }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    // Add user message immediately
    const updatedChat = [...chat, { role: "user", text: userMessage }];
    setChat(updatedChat);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await res.json();

      setChat([
        ...updatedChat,
        { role: "bot", text: data.reply }
      ]);

    } catch (error) {
      setChat([
        ...updatedChat,
        { role: "bot", text: "AI service unavailable." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-container">

        <div className="chatbot-header">
          <h2>Financial AI Assistant</h2>
          <p>Smart insights for smarter investing</p>
        </div>

        <div className="chat-window">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                msg.role === "user" ? "user-bubble" : "bot-bubble"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {loading && (
            <div className="chat-bubble bot-bubble">
              Typing...
            </div>
          )}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Ask about market strategy..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>
            Send
          </button>
        </div>

      </div>
    </div>
  );
}

export default Chatbot;*/

import { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      role: "bot",
      text:
        "Hello 👋 I am your Financial AI Assistant. Ask me about trading strategies, risk management, or portfolio allocation."
    }
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    const updatedChat = [...chat, { role: "user", text: userMessage }];
    setChat(updatedChat);
    setMessage("");
    setLoading(true);

    try {
      // 🔐 Get token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        setChat([
          ...updatedChat,
          { role: "bot", text: "Please login to use AI Assistant." }
        ]);
        setLoading(false);
        return;
      }

      const res = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` // ✅ IMPORTANT
        },
        body: JSON.stringify({ message: userMessage })
      });

      // Handle unauthorized
      if (res.status === 401) {
        setChat([
          ...updatedChat,
          { role: "bot", text: "Session expired. Please login again." }
        ]);
        setLoading(false);
        return;
      }

      const data = await res.json();

      setChat([
        ...updatedChat,
        { role: "bot", text: data.reply }
      ]);
    } catch (error) {
      setChat([
        ...updatedChat,
        { role: "bot", text: "AI service unavailable." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h2>Financial AI Assistant</h2>
          <p>Smart insights for smarter investing</p>
        </div>

        <div className="chat-window">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`chat-bubble ${
                msg.role === "user" ? "user-bubble" : "bot-bubble"
              }`}
            >
              {/* Preserve line breaks for structured AI output */}
              <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>
                {msg.text}
              </pre>
            </div>
          ))}

          {loading && (
            <div className="chat-bubble bot-bubble">
              Typing...
            </div>
          )}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Ask about market strategy..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;