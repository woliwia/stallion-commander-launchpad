import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export const BreakingNewsBar = () => {
  return (
    <Link
      to="/order"
      className="group relative block focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#023646]"
      aria-label="Shop Stallion Commander now"
    >
      <div className="relative overflow-hidden border-b-2 border-white/30 bg-gradient-to-r from-[#0277a0] via-[#03B9F2] to-[#4ce6ff] text-white shadow-[0_12px_30px_rgba(3,185,242,0.45)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_45%)] opacity-80 mix-blend-screen" />
        <div className="relative flex items-center gap-3 px-4 py-2 sm:gap-4 sm:px-6 sm:py-2.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.25em] text-white shadow-[0_0_12px_rgba(255,255,255,0.25)] sm:text-xs">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            Breaking News
          </span>

          <div className="relative flex-1 overflow-hidden">
            <div className="flex min-w-max items-center gap-8 whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-tight will-change-transform motion-safe:animate-news-ticker motion-reduce:translate-x-0 sm:text-sm">
              <span>
                BREAKING: Stallion Commander Just Hit the Market—Experts Call It the Ultimate Game-Changer!
              </span>
              <span className="text-white/85">
                Limited Access • Just Released • Don’t Miss Out
              </span>
              <span>
                BREAKING: Stallion Commander Just Hit the Market—Experts Call It the Ultimate Game-Changer!
              </span>
              <span className="text-white/85">
                Limited Access • Just Released • Don’t Miss Out
              </span>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center rounded-full bg-white px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wide text-[#01465f] transition-all duration-200 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#026788] sm:px-4 sm:py-1.5 sm:text-sm">
            Shop Now Before It’s Gone!
          </span>
        </div>
      </div>
    </Link>
  );
};
