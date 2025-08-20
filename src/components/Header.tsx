import { Link } from "react-router-dom";
import stallionLogo from "@/assets/stallion-commander-logo.jpg";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 sm:py-4 md:py-6">
        <div className="flex items-center justify-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={stallionLogo}
              alt="Stallion Commander Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 w-auto max-w-full px-2"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;