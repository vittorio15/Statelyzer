
const Header = () => {
    return (
      <header className="w-full p-4 bg-white shadow-md flex justify-between items-center">
        {/* Left side */}
        <h1>
          Statelyzer
        </h1>
        
        {/* Right side */}
        <nav className="space-x-10">
          <a href="#" className="headerLink">
            Home
          </a>
          <a href="#" className="headerLink">
            Features
          </a>
          <a href="#" className="headerLink">
            About
          </a>
          <a href="#" className="headerLink">
            Contact
          </a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  