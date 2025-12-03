const Header = () => {
  return (
    <header className="h-16 w-full bg-background text-default ">
      <div className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between">
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
