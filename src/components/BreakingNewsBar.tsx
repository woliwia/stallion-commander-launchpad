import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export const BreakingNewsBar = () => {
  return (
    <div className="relative overflow-hidden bg-[#0b101b] text-white shadow-[0_10px_40px_rgba(3,185,242,0.3)]">
      <div className="absolute inset-y-0 left-0 w-1 bg-[#03B9F2]" aria-hidden="true" />
      <div className="container mx-auto flex flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 rounded-full border border-white/30 bg-gradient-to-r from-[#e71d36] to-[#b80d28] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white shadow-[0_0_20px_rgba(231,29,54,0.6)]">
            <AlertTriangle className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            Breaking News
          </span>
          <div className="relative hidden h-9 min-w-[180px] overflow-hidden rounded-full border border-[#03B9F2]/30 bg-[#08101b] sm:flex">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#03B9F2]/20 to-transparent" aria-hidden="true" />
            <div className="flex min-w-[200%] motion-safe:animate-news-ticker whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-white">
              <span className="px-5 text-[#03B9F2]">Limited Access</span>
              <span className="px-5 text-white">Just Released</span>
              <span className="px-5 text-[#03B9F2]">Don&apos;t Miss Out</span>
              <span className="px-5 text-white">Limited Access</span>
              <span className="px-5 text-[#03B9F2]">Just Released</span>
              <span className="px-5 text-white">Don&apos;t Miss Out</span>
              <span className="px-5 text-[#03B9F2]">Limited Access</span>
              <span className="px-5 text-white">Just Released</span>
              <span className="px-5 text-[#03B9F2]">Don&apos;t Miss Out</span>
              <span className="px-5 text-white">Limited Access</span>
              <span className="px-5 text-[#03B9F2]">Just Released</span>
              <span className="px-5 text-white">Don&apos;t Miss Out</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center sm:flex-1 sm:flex-row sm:items-center sm:gap-4 sm:text-left">
          <p className="flex-1 text-sm font-bold uppercase tracking-wide text-white drop-shadow-[0_0_12px_rgba(3,185,242,0.8)]">
            Breaking: Stallion Commander Just Dropped—Experts Call It the Ultimate Game-Changer!
          </p>
          <Link
            to="/order"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-[#03B9F2] px-5 py-2 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_20px_rgba(3,185,242,0.8)] transition hover:-translate-y-[1px] hover:bg-[#14c8ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#03B9F2]"
          >
            Shop Now Before It&apos;s Gone!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsBar;
