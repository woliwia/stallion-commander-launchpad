import { Clock } from "lucide-react";

const LimitedTimeOffer = () => {
  return (
    <div className="bg-gradient-primary text-primary-foreground p-3 md:p-4 rounded-lg text-center mb-8 md:mb-12 animate-glow-pulse mx-4 md:mx-0">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 font-bold text-sm md:text-base">
        <Clock className="w-4 h-4 md:w-5 md:h-5" />
        <span className="text-center">LIMITED TIME: Save up to 68% + FREE Shipping on All Orders!</span>
      </div>
    </div>
  );
};

export default LimitedTimeOffer;