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
            className="inline-flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <span className="sr-only">Stallion Commander</span>
            <span aria-hidden className="logo-wordmark" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
