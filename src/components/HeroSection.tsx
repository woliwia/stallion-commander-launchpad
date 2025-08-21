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
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-card border border-border px-4 py-2 sm:px-5 sm:py-3 rounded-full">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-sm sm:text-base font-medium text-foreground">#1 Male Vitality Formula</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground leading-tight">
                UNLEASH YOUR
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  STALLION POWER
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium leading-relaxed">
                The ultimate male performance enhancer that transforms ordinary men into unstoppable Stallions
              </p>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {[
                { icon: Star, text: "Explosive Energy" },
                { icon: Shield, text: "Enhanced Performance" },
                { icon: Trophy, text: "Supreme Confidence" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 bg-card border border-border p-4 sm:p-6 rounded-xl hover:bg-gradient-card transition-all duration-300">
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <span className="font-bold text-foreground text-base sm:text-lg lg:text-xl">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <Link to="/order">
                <Button variant="hero" size="xl" className="w-full text-lg sm:text-xl md:text-2xl px-8 py-6 sm:py-8 font-black">
                  CLAIM YOUR POWER NOW
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-border">
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
          
          {/* Right Content - Product Image */}
          <div className="relative animate-scale-in order-1 lg:order-2">
            <div className="relative z-10 bg-gradient-card p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl border border-border shadow-premium">
              <img 
                src={coupleImage} 
                alt="Confident mature man with beautiful woman - Stallion Commander results" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto drop-shadow-2xl rounded-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 -right-4 sm:-right-6 bg-primary text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold animate-glow-pulse text-sm sm:text-base">
                LIMITED TIME
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-card border border-border px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base">
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