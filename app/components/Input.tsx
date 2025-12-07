const Input = ({
  userPrompt,
  setUserPrompt,
}: {
  userPrompt: string;
  setUserPrompt: (prompt: string) => void;
}) => {
  const handleSend = () => {
    setUserPrompt(userPrompt);
    setUserPrompt("");
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Ask me anything"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </form>
    </>
  );
};

export default Input;
