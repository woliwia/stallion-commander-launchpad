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
          <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.25em] text-transparent shadow-[0_0_12px_rgba(255,255,255,0.25)] sm:text-xs bg-gradient-to-r from-[#4ce6ff] via-white to-[#4ce6ff] bg-clip-text drop-shadow-[0_0_10px_rgba(76,230,255,0.75)]">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            Breaking News
          </span>

          <div className="relative flex-1 overflow-hidden">
            <div className="flex min-w-max items-center gap-8 whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-tight will-change-transform motion-safe:animate-news-ticker motion-reduce:translate-x-0 sm:text-sm">
              <span className="bg-gradient-to-r from-[#03B9F2] via-white to-[#4ce6ff] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(76,230,255,0.85)]">
                BREAKING: Stallion Commander Just Hit the Market—Experts Call It the Ultimate Game-Changer!
              </span>
              <span className="text-black drop-shadow-[0_0_14px_rgba(76,230,255,0.8)]">
                Limited Access • Just Released • Don’t Miss Out
              </span>
              <span className="bg-gradient-to-r from-[#03B9F2] via-white to-[#4ce6ff] bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(76,230,255,0.85)]">
                BREAKING: Stallion Commander Just Hit the Market—Experts Call It the Ultimate Game-Changer!
              </span>
              <span className="text-black drop-shadow-[0_0_14px_rgba(76,230,255,0.8)]">
                Limited Access • Just Released • Don’t Miss Out
              </span>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center rounded-full px-3 py-1 text-[0.7rem] font-extrabold uppercase tracking-wide text-transparent transition-all duration-200 group-hover:translate-x-1 sm:px-4 sm:py-1.5 sm:text-sm bg-gradient-to-r from-[#03B9F2] via-[#54e8ff] to-white bg-clip-text drop-shadow-[0_0_18px_rgba(76,230,255,0.9)] group-hover:drop-shadow-[0_0_24px_rgba(76,230,255,1)]">
            Shop Now Before It’s Gone!
          </span>
        </div>
      </div>
    </Link>
  );
};
