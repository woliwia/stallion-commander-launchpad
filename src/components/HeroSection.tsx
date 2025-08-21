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
      
      <div className="relative container mx-auto px-4 py-2 sm:py-4 md:py-6">
        <div className="relative min-h-[calc(100vh-80px)]">
          {/* Hero Image - Top Right */}
          <div className="absolute top-0 right-0 w-1/2 sm:w-2/5 md:w-1/3 lg:w-2/5 xl:w-1/3 z-10">
            <div className="relative bg-gradient-card p-3 sm:p-4 md:p-6 rounded-2xl border border-border shadow-premium">
              <img 
                src={coupleImage} 
                alt="Confident mature man with beautiful woman - Stallion Commander results" 
                className="w-full drop-shadow-2xl rounded-xl"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              
              <div className="absolute -top-1 -right-1 sm:top-2 sm:-right-2 bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full font-bold animate-glow-pulse text-xs sm:text-sm">
                LIMITED TIME
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary opacity-20 blur-3xl -z-10" />
          </div>

          {/* Main Content */}
          <div className="relative z-20 pt-2 sm:pt-3 md:pt-4 pr-[52%] sm:pr-[42%] md:pr-[35%] lg:pr-[42%] xl:pr-[35%]">
            {/* Badge and Free Shipping */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-card border border-border px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 rounded-full">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-sm sm:text-base font-medium text-foreground">#1 Male Vitality Formula</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-card border border-border px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 rounded-full">
                <span className="text-sm sm:text-base font-semibold text-foreground">FREE SHIPPING</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight">
                UNLEASH YOUR
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  STALLION POWER
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
                The ultimate male performance enhancer that transforms ordinary men into unstoppable Stallions
              </p>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-6">
              {[
                { icon: Star, text: "Explosive Energy" },
                { icon: Shield, text: "Enhanced Performance" },
                { icon: Trophy, text: "Supreme Confidence" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-card border border-border p-3 sm:p-4 lg:p-6 rounded-xl hover:bg-gradient-card transition-all duration-300">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary flex-shrink-0" />
                  <span className="font-bold text-foreground text-sm sm:text-base lg:text-lg">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-6 sm:pt-8 flex justify-center">
              <Link to="/order" className="w-full max-w-md">
                <Button variant="hero" size="xl" className="w-full text-base sm:text-lg md:text-xl lg:text-2xl px-6 py-4 sm:px-8 sm:py-6 lg:py-8 font-black">
                  CLAIM YOUR POWER NOW
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-4 sm:pt-6 border-t border-border mt-6">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <span className="text-sm sm:text-base font-medium text-muted-foreground">90-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
                <span className="text-sm sm:text-base font-medium text-muted-foreground ml-3">4.9/5 (2,847 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};