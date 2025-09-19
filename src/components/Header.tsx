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
            <span className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.35em] sm:text-base md:text-lg lg:text-xl">
              <span className="text-[#0B6BFF]">STALLION</span>
              <span className="text-[#80858F]">COMMANDER</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
