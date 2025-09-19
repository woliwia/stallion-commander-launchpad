import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-premium backdrop-blur-sm">
      <div className="container mx-auto px-4 py-1 sm:py-2">
        <div className="flex items-center justify-center">
          <Link to="/" className="hover:scale-105 transition-all duration-300">
            <img 
              src="/lovable-uploads/9aebaefa-86d2-491f-9e62-42000f1abcef.png"
              alt="Stallion Commander Logo"
              className="h-5 sm:h-7 md:h-9 lg:h-10 w-auto max-w-full"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;