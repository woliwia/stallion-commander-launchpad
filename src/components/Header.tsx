import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 md:py-4">
        <div className="flex items-center justify-center">
          <Link to="/" className="hover:scale-105 transition-all duration-300">
            <img 
              src="/lovable-uploads/9aebaefa-86d2-491f-9e62-42000f1abcef.png"
              alt="Stallion Commander Logo"
              className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto max-w-full"
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