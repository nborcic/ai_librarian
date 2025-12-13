"use client";

import { useEffect, useState } from "react";
import Input from "./Input";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
  date: Date;
  modelUsed?: string;
};

const initialMessages: Message[] = [];

const Body = () => {
  const [userPrompt, setUserPrompt] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isThinking, setIsThinking] = useState<boolean>(false);

  const msgToAgent = async () => {
    if (!userPrompt.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: userPrompt,
      date: new Date(),
    };

    // Add user message immediately
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsThinking(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userPrompt,
          model: "ALIENTELLIGENCE/librarianv2:latest",
        }),
      });
      const data = await response.json();
      console.log(data);

      // Add assistant response as separate message
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.response || "No response received",
        date: new Date(),
        modelUsed: data.modelUsed,
      };

      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Failed to fetch msg to agent:", error);
      // Add error message
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: "Error: Failed to get response",
        date: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsThinking(false);
    }
  };
  const getModelsMsg = async () => {
    try {
      const response = await fetch("/api/models", {
        method: "GET",
      });
      const data = await response.json();
      const modelsMessage: Message = {
        id: Date.now(),
        role: "assistant",
        content: data
          .map((item: { model: string }) => item.model)
          .join(", "),
        date: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, modelsMessage]);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch models:", error);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full bg-gray-100 text-black shadow-2xl">
      <div className="w-full bg-gray-100 text-black shadow-lg">
        <div className="max-w-7xl mx-auto py-8 flex gap-8 h-full ">
          {/* Main Content Area */}
          <main className="flex-1 shadow-lg">
            <div className="bg-white/60 rounded-lg p-6 min-h-[60vh] ">
              <h2 className="text-2xl font-semibold mb-4">Search & Explore</h2>
              <div className="space-y-4">
                {messages.length === 0 && !isThinking ? (
                  <div className="text-sm text-gray-400 text-center py-8">
                    Use input area below to start a new conversation
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`text-lg rounded-lg p-4 ${
                        message.role === "user"
                          ? "text-left bg-blue-500/60 ml-auto max-w-[80%]"
                          : "text-right bg-green-500/60 mr-auto max-w-[80%]"
                      }`}
                    >
                      {message.role === "assistant" && message.modelUsed && (
                        <span className="text-gray-500 text-sm block mb-2">
                          Agent: {message.modelUsed}
                        </span>
                      )}
                      <p>{message.content}</p>
                    </div>
                  ))
                )}
                {isThinking && (
                  <div className="text-right text-lg rounded-lg p-4 bg-yellow-500/60 animate-pulse mr-auto max-w-[80%]">
                    <span className="text-gray-600">Thinking...</span>
                  </div>
                )}
              </div>
            </div>
            {/* Input Area */}
            <Input
              userPrompt={userPrompt}
              msgToAgent={msgToAgent}
              setUserPrompt={setUserPrompt}
            />
          </main>

          {/* History Sidebar */}
          <aside className="w-80 shrink-0 shadow-lg ">
            <div className="bg-white/60 rounded-lg p-6 sticky top-4 ">
              <h3 className="text-xl font-semibold mb-4">History</h3>
              <div className="space-y-2">
                {messages.length > 0 ? (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className="border-b border-gray-300 pb-2"
                    >
                      <div className="text-xs text-gray-500 mb-1">
                        {message.role === "user" ? "You" : "Assistant"}
                        {message.modelUsed && ` (${message.modelUsed})`}
                      </div>
                      <p className="text-sm truncate">{message.content}</p>
                      <p className="text-xs text-gray-400">
                        {message.date.toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-400">No history yet</div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Body;
