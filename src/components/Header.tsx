import { Link } from "react-router-dom";
import { BreakingNewsBar } from "./BreakingNewsBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <BreakingNewsBar />
      <div className="bg-background border-b border-border shadow-premium backdrop-blur-sm">
        <div className="container mx-auto px-4 py-1 sm:py-2">
          <div className="flex items-center justify-center">
            <Link to="/" className="transition-all duration-300 hover:scale-105">
              <img
                src="/lovable-uploads/9aebaefa-86d2-491f-9e62-42000f1abcef.png"
                alt="Stallion Commander Logo"
                className="h-5 w-auto max-w-full sm:h-7 md:h-9 lg:h-10"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
