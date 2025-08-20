import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/f9ce52ad-c78c-4944-af1b-113437c845d3.png"
              alt="Stallion Commander Logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;