const Header = () => {
  return (
    <header className="h-16 bg-gray-100 text-black shadow-2xl">
      <div className="h-full max-w-7xl mx-auto  flex items-center justify-between shadow-2xl rounded-lg p-8 bg-white/60 ">
        <div className="text-xl font-bold">AI Librarian</div>
        <nav className="flex gap-6">
          <a href="#" className="hover:opacity-80 transition-opacity">
            History
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
