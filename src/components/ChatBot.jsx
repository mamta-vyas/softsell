import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text: input.trim() },
    ]);
    setInput("");

    // Mock bot reply after delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: "bot",
          text: "Thanks for your message! This is a simple chatbot demo.",
        },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col h-[500px]">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 font-bold text-lg text-gray-800 dark:text-white">
        Chatbot
      </div>
      <div
        className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-gray-900"
        style={{ scrollbarWidth: "thin" }}
      >
        {messages.map(({ id, from, text }) => (
          <div
            key={id}
            className={`max-w-[75%] px-4 py-2 rounded-lg ${
              from === "bot"
                ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 self-start"
                : "bg-blue-600 text-white self-end"
            }`}
          >
            {text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2 bg-gray-100 dark:bg-gray-800"
      >
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-grow resize-none p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default Chatbot;
