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
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-black border-t border-white/20 p-4">
        <div className="container mx-auto flex justify-center">
          <Link to="/order">
            <Button 
              variant="hero" 
              size="lg"
              className="shadow-2xl"
            >
              CLAIM YOUR POWER
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;