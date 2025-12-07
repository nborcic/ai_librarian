import { motion } from "framer-motion";

const Input = ({
  userPrompt,
  setUserPrompt,
}: {
  userPrompt: string;
  setUserPrompt: (prompt: string) => void;
}) => {
  const handleSend = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUserPrompt(userPrompt);
    setUserPrompt("");
  };
  return (
    <>
      <form className=" shadow-sm p-2 h-12 flex items-center justify-center rounded-xl w-full bg-white/60 gap-10  ">
        <input
          type="text"
          placeholder="Ask me anything"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          className="w-full h-full p-2 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent 
          focus:ring-offset-2 placeholder:text-gray-500 border-t  border-gray-300 border-dotted"
        />
        <motion.button
          type="button"
          onClick={(e) => handleSend(e)}
          className="bg-gray-200 px-6 inline-flex items-center gap-6   text-black p-2 rounded-xl hover hover:bg-gray-500 hover:text-white hover:cursor-pointer "
          whileHover="hover"
          initial="initial"
          variants={{
            initial: {},
            hover: {},
          }}
        >
          <span className="text-sm font-semibold">Ask</span>

          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            style={{ overflow: "visible" }}
          >
            <motion.g
              variants={{
                initial: { x: 0 },
                hover: {
                  x: [0, 10, 0],
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <path
                className="hover:stroke-white transition-all duration-400 "
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5"
              />
            </motion.g>
          </motion.svg>
        </motion.button>
      </form>
    </>
  );
};

export default Input;
