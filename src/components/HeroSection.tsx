import { Button } from "@/components/ui/button";
import { Shield, Star, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import coupleImage from "@/assets/couple-hero-image.jpg";
import heroImage from "@/assets/confident-man.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-card border border-border px-3 sm:px-4 py-2 rounded-full">
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-foreground">#1 Male Enhancement Formula</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight">
                UNLEASH YOUR
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  STALLION POWER
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                The ultimate male performance enhancer that transforms ordinary men into unstoppable forces
              </p>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: Star, text: "Explosive Energy" },
                { icon: Shield, text: "Enhanced Performance" },
                { icon: Trophy, text: "Supreme Confidence" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3 bg-card border border-border p-3 sm:p-4 rounded-lg">
                  <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-foreground text-sm sm:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <Link to="/order">
                <Button variant="hero" size="xl" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  CLAIM YOUR POWER NOW
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 border-t border-border">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm text-muted-foreground">90-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                ))}
                <span className="text-xs sm:text-sm text-muted-foreground ml-2">4.9/5 (2,847 reviews)</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Product Image */}
          <div className="relative animate-scale-in mt-8 lg:mt-0">
            <div className="relative z-10 bg-gradient-card p-4 sm:p-6 md:p-8 rounded-2xl border border-border shadow-premium">
              <img 
                src={coupleImage} 
                alt="Confident mature man with beautiful woman - Stallion Commander results" 
                className="w-full max-w-sm sm:max-w-md mx-auto drop-shadow-2xl rounded-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-primary text-primary-foreground px-2 sm:px-4 py-1 sm:py-2 rounded-full font-bold animate-glow-pulse text-xs sm:text-sm">
                LIMITED TIME
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-card border border-border px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-xs sm:text-sm">
                FREE SHIPPING
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary opacity-20 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};