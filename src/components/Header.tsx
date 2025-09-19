import { Link } from "react-router-dom";

import { BreakingNewsBar } from "@/components/BreakingNewsBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 shadow-premium backdrop-blur-xl">
      <BreakingNewsBar />
      <div className="container mx-auto px-4 py-1 sm:py-2">
        <div className="flex items-center justify-center">
          <Link to="/" className="transition-all duration-300 hover:scale-105">
            <img
              src="/lovable-uploads/57dcb4da-4530-45f2-914e-0725921540d3.png"
              alt="Stallion Commander Logo"
              className="h-5 w-auto max-w-full sm:h-7 md:h-9 lg:h-10"
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
