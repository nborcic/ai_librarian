import Header from "./components/Header";
import Body from "./components/Body";

const index = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col h-screen w-screen">
      <Header />
      <Body />
    </div>
  );
};

export default index;
