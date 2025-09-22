import { Shield, CheckCircle, Star } from "lucide-react";

const trustBadges = [
  { icon: Shield, text: "SSL Secure" },
  { icon: CheckCircle, text: "Verified Safe" },
  { icon: Star, text: "Top Rated" }
];

const TrustBadges = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12 max-w-2xl mx-auto px-4">
      {trustBadges.map((badge, index) => (
        <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-1 md:gap-2 bg-card border border-border p-2 md:p-3 rounded-lg">
          <badge.icon className="w-3 h-3 md:w-4 md:h-4 text-[#21BFF4] flex-shrink-0" />
          <span className="text-xs md:text-sm font-semibold text-foreground text-center">{badge.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;