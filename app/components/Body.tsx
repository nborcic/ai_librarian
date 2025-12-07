"use client";

import { useEffect, useState } from "react";
import Input from "./Input";

type historyItem = {
  id: number;
  title: string;
  description: string;
  date: Date;
};

const historyItems: historyItem[] = [
  {
    id: 1,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
];

const Body = () => {
  const [apiData, setApiData] = useState<{
    response?: string;
    model?: string;
    done?: boolean;
    modelUsed?: string;
  } | null>(null);
  const [userPrompt, setUserPrompt] = useState<string>("");
  const [history, setHistory] = useState<historyItem[]>(historyItems);
  const [userPromtHistory, setUserPromtHistory] = useState<string>("");
  // Fetch on component mount using useEffect
  useEffect(() => {
    const getChat = async () => {
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
        setApiData(data);
        setHistory([
          ...history,
          {
            id: history.length + 1,
            title: userPrompt,
            description: data.response,
            date: new Date(),
          },
        ]);
        setUserPromtHistory(userPrompt);
      } catch (error) {
        console.error("Failed to fetch:", error);
      }
    };
    getChat();
  }, []);

  return (
    <div className="w-full bg-gray-100 text-black shadow-2xl">
      <div className="w-full bg-gray-100 text-black shadow-lg">
        
        <div className="max-w-7xl mx-auto py-8 flex gap-8 h-full ">
          {/* Main Content Area */}
          <main className="flex-1 shadow-lg">
            <div className="bg-white/60 rounded-lg p-6 min-h-[60vh] ">
              <h2 className="text-2xl font-semibold mb-4">Search & Explore</h2>
              <div className="text-left text-lg rounded-lg p-4 bg-white/60">
                {userPromtHistory.length > 0 ? (
                  <div>
                    <span className="text-gray-500"> User Prompt:</span>
                    <br />
                    {userPromtHistory}
                  </div>
                ) : (
                  <div className="text-sm text-gray-400">
                    Use input area below to start a new conversation
                  </div>
                )}
              </div>
              {apiData?.response && (
                <p className="text-right text-lg rounded-lg p-4 bg-green-500/60 ">
                  <span className="text-gray-500">
                    Agent: {apiData?.modelUsed}
                  </span>
                  <br />
                  {apiData?.response}
                </p>
              )}
            </div>
            {/* Input Area */}
            <Input userPrompt={userPrompt} setUserPrompt={setUserPrompt} />
          </main>

          {/* History Sidebar */}
          <aside className="w-80 shrink-0 shadow-lg ">
            <div className="bg-white/60 rounded-lg p-6 sticky top-4 ">
              <h3 className="text-xl font-semibold mb-4">History</h3>
              <div className="space-y-2">
                {history ? (
                  history.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-gray-300 pb-2"
                    >
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <p>{item.date.toLocaleDateString()}</p>
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
