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
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <Link to="/order">
        <Button 
          variant="hero" 
          size="lg"
          className="shadow-2xl border-2 border-white/20 backdrop-blur-sm"
        >
          CLAIM YOUR POWER
        </Button>
      </Link>
    </div>
  );
};

export default FloatingCTA;