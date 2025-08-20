import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/f9ce52ad-c78c-4944-af1b-113437c845d3.png"
              alt="Stallion Commander Logo"
              className="h-12 md:h-16 lg:h-20 w-auto max-w-full"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;