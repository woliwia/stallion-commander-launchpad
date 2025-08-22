import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA when user scrolls below the fold
      setIsVisible(scrollPosition > windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 animate-fade-in bg-red-600 border-t border-white/20">
      <div className="w-full px-4 py-3 flex items-center justify-between">
        <div className="text-white">
          <div className="font-bold text-sm md:text-base">
            🔥 LIMITED TIME: Free Shipping on All Orders!
          </div>
          <div className="text-xs md:text-sm opacity-90">
            Don't miss out - Join thousands who've restored their masculine power naturally
          </div>
        </div>
        <Link to="/order">
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 font-bold shadow-xl whitespace-nowrap"
          >
            CLAIM YOUR BOTTLE NOW →
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FloatingCTA;