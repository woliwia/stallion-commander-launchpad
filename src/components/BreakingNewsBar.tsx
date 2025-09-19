import { Link } from "react-router-dom";

const tickerItems = [
  "BREAKING: Stallion Commander Just Dropped — Experts Call It the Ultimate Game-Changer!",
  "Limited Access • Just Released • Don't Miss Out",
  "Power. Precision. Performance. Experience Stallion Commander Now!",
];

export const BreakingNewsBar = () => {
  return (
    <div className="relative overflow-hidden border-b border-[#0b334a] bg-[#010d19] text-white shadow-[0_10px_40px_rgba(1,29,50,0.45)]">
      <Link
        to="/order"
        className="group flex w-full items-center gap-3 px-4 py-2 sm:gap-4 sm:px-6"
        aria-label="Shop Stallion Commander now before it's gone"
      >
        <span className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#03B9F2] via-white to-[#03B9F2] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#012033] shadow-[0_0_18px_rgba(3,185,242,0.7)] sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#012033] shadow-[0_0_6px_rgba(1,32,51,0.8)]" />
          Breaking
        </span>

        <div className="relative flex flex-1 items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#010d19] via-[#010d19]/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#010d19] via-[#010d19]/70 to-transparent" />
          <div className="flex w-full items-center gap-6 whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-sm">
            <div className="flex min-w-max items-center gap-6 motion-safe:animate-news-ticker">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="flex items-center gap-3"
                  style={{ textShadow: "0 0 8px rgba(3, 185, 242, 0.75)" }}
                >
                  <span className="rounded-full bg-[#03B9F2] px-2 py-0.5 text-[10px] font-black uppercase text-[#021525] shadow-[0_0_12px_rgba(3,185,242,0.85)]">
                    ALERT
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <span className="inline-flex shrink-0 items-center rounded-full border border-white/30 bg-[#03B9F2] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#021323] shadow-[0_0_16px_rgba(3,185,242,0.8)] transition duration-300 group-hover:translate-x-0.5 group-hover:shadow-[0_0_25px_rgba(3,185,242,0.9)] sm:px-4 sm:text-xs">
          Shop Now Before It's Gone!
        </span>
      </Link>
    </div>
  );
};

export default BreakingNewsBar;
