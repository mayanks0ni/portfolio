import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi there! I'm your personal AI assistant Moonlit. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;
    setMessages([...messages, { type: "user", text: input }]);
    setInput("");
    //post request to backend then getting response from Gemini and showing it here
    setMessages((prev) => {
      return [...prev, { type: "bot", text: "Moonlit is typing..." }];
    });
    const res = await fetch('http://localhost:3000/api/chatbot', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: input })
    })
    const data = await res.json();
    console.log(data);
    setMessages((prev) => {
      const updated = prev.slice(0, -1);
      return [...updated, { type: "bot", text: data.message }];
    });
  }

  return (
    <div className="max-w-md mx-auto mb-12 p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700">
      <h2 className="text-xl font-semibold text-center mb-4 text-zinc-800 dark:text-zinc-100">
        💬 Get to know more about me - Ask my personal Assistant
      </h2>

      <div className="h-64 overflow-y-auto space-y-2 p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`px-4 py-2 max-w-[75%] rounded-lg text-sm ${msg.type === "user"
              ? "ml-auto bg-blue-500 text-white"
              : "mr-auto bg-zinc-300 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100"
              }`}
          >
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-white focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
