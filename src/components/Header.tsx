import { Link } from "react-router-dom";

import { BreakingNewsBar } from "@/components/BreakingNewsBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 shadow-premium backdrop-blur-xl">
      <BreakingNewsBar />
      <div className="container mx-auto px-4 py-1 sm:py-2">
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="transition-all duration-300 hover:scale-105"
            aria-label="Stallion Commander home"
          >
            <img
              src="/lovable-uploads/9aebaefa-86d2-491f-9e62-42000f1abcef.png"
              alt="Stallion Commander logo"
              className="h-6 w-auto max-w-full sm:h-8 md:h-10 lg:h-12"
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
