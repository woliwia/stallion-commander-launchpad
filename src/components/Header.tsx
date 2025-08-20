import { Link } from "react-router-dom";
import stallionLogo from "@/assets/stallion-commander-logo-black.png";

const Header = () => {
  return (
    <header className="bg-black border-b border-primary/20 sticky top-0 z-50 shadow-premium">
      <div className="container mx-auto px-4 py-3 sm:py-4 md:py-6">
        <div className="flex items-center justify-center">
          <Link to="/" className="hover:scale-105 transition-all duration-300 hover:shadow-glow">
            <img 
              src={stallionLogo}
              alt="Stallion Commander Logo"
              className="h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto max-w-full filter drop-shadow-lg"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;