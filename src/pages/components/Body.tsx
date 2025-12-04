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
  {
    id: 2,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 3,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 4,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 5,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 6,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 7,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 8,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 9,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 10,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 11,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 12,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
  {
    id: 13,
    title: "name 3 books about programming",
    description: "loren ipsum dolor sit amet",
    date: new Date(),
  },
];

const Body = () => {
  return (
    <div className="w-full bg-background text-default min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto py-8 flex gap-8 h-full ">
        {/* Main Content Area */}
        <main className="flex-1">
          <div className="bg-white/60 rounded-lg p-6 min-h-[60vh] ">
            <h2 className="text-2xl font-semibold mb-4">Search & Explore</h2>
            <p className="text-left text-lg rounded-lg p-4 bg-white/60">
              <span className="text-gray-500">Prompt:</span>
              <br />
              Imaginge new croud as new msg for left side
            </p>
            <p className="text-right text-lg rounded-lg p-4 bg-green-500/60 ">
              <span className="text-gray-500">Agent:</span>
              <br />
              Imaginge new croud as new msg for right side
            </p>
          </div>
        </main>

        {/* History Sidebar */}
        <aside className="w-80 shrink-0 shadow-sm ">
          <div className="bg-white/60 rounded-lg p-6 sticky top-4 ">
            <h3 className="text-xl font-semibold mb-4">History</h3>
            <div className="space-y-2">
              {historyItems ? (
                historyItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-300 pb-2">
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
  );
};

export default Body;
