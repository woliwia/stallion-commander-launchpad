import { Link } from "react-router-dom";

const tickerMessage =
  "LIMITED ACCESS • JUST RELEASED • DON'T MISS OUT • BREAKING: STALLION COMMANDER JUST HIT THE MARKET — EXPERTS CALL IT THE ULTIMATE GAME-CHANGER! • POWER. PRECISION. PERFORMANCE.";

export const BreakingNewsBar = () => {
  return (
    <div className="bg-gradient-primary text-primary-foreground">
      <div className="mx-auto flex w-full items-center gap-3 px-4 py-2 sm:gap-4 sm:px-6">
        <span className="inline-flex shrink-0 items-center rounded-md bg-primary-foreground px-3 py-1 text-xs font-black uppercase tracking-wide text-primary sm:text-sm">
          Breaking News
        </span>

        <div className="relative flex flex-1 overflow-hidden">
          <div className="flex min-w-max items-center whitespace-nowrap text-[13px] font-bold tracking-wide text-primary-foreground sm:text-sm">
            <div className="flex items-center motion-safe:animate-news-ticker">
              {[0, 1].map((index) => (
                <span key={index} className="px-6 text-primary-foreground">
                  {tickerMessage}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/order"
          className="inline-flex shrink-0 items-center rounded-md bg-primary-foreground px-3 py-1 text-xs font-black uppercase tracking-wide text-primary transition hover:bg-primary-foreground/90 sm:px-4 sm:py-1.5 sm:text-sm"
          aria-label="Shop Stallion Commander now before it's gone"
        >
          SHOP NOW BEFORE IT'S GONE!
        </Link>
      </div>
    </div>
  );
};

export default BreakingNewsBar;
