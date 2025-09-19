import { Link } from "react-router-dom";

export const BreakingNewsBar = () => {
  return (
    <div className="relative overflow-hidden border border-white/15 bg-gradient-to-r from-[#0b4de1] via-[#03b9f2] to-[#62e7ff] text-white shadow-[0_8px_35px_rgba(3,185,242,0.45)]">
      <div className="absolute inset-0 opacity-60 mix-blend-screen" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.35),transparent_50%)]" />
      </div>
      <div className="relative flex flex-col items-stretch gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-white/40 bg-gradient-to-r from-white/40 via-white/20 to-transparent px-4 py-1 text-[11px] font-black uppercase tracking-[0.32em] text-white shadow-[0_0_18px_rgba(255,255,255,0.55)]">
            Breaking News
          </span>
          <div className="relative hidden h-9 min-w-[200px] overflow-hidden rounded-full border border-white/40 bg-white/10 sm:flex">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
            <div className="flex min-w-[220%] items-center gap-4 motion-safe:animate-news-ticker whitespace-nowrap px-5 text-[13px] font-semibold uppercase tracking-[0.28em] text-white">
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/80" aria-hidden="true" />
                Limited Access
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/80" aria-hidden="true" />
                Just Released
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/80" aria-hidden="true" />
                Don&apos;t Miss Out
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/80" aria-hidden="true" />
                Limited Access
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/80" aria-hidden="true" />
                Just Released
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/80" aria-hidden="true" />
                Don&apos;t Miss Out
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-white drop-shadow-[0_0_18px_rgba(14,60,148,0.65)]">
            Breaking: Stallion Commander Just Dropped—Experts Call It the Ultimate Game-Changer!
          </p>
          <Link
            to="/order"
            className="inline-flex min-h-[38px] items-center justify-center whitespace-nowrap rounded-full border border-white/70 bg-white px-5 text-[12px] font-black uppercase tracking-[0.28em] text-[#08213d] shadow-[0_10px_25px_rgba(8,33,61,0.45)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
          >
            Shop Now Before It&apos;s Gone!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsBar;
