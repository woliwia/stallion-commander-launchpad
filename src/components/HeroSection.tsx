import { Button } from "@/components/ui/button";
import { AlertTriangle, Megaphone, Trophy } from "lucide-react";
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
      
      <div className="relative container mx-auto px-4 py-4 sm:py-6 md:py-8">
        <div className="relative min-h-[calc(100vh-80px)]">
          
          {/* Mobile-First Layout */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12">
            
            {/* Main Content - Full width on mobile, left side on desktop */}
            <div className="w-full lg:w-3/5 xl:w-2/3 space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Badge and Free Shipping */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <div className="inline-flex items-center gap-2 bg-gradient-card border border-border px-3 py-2 sm:px-4 sm:py-2 rounded-full">
                  <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-foreground">
                    BREAKING • JUST DROPPED
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 bg-card border border-border px-3 py-2 sm:px-4 sm:py-2 rounded-full">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-xs sm:text-sm lg:text-base font-semibold text-foreground">
                    LIMITED ACCESS · DON&apos;T MISS OUT
                  </span>
                </div>
              </div>
            
              {/* Main Headline */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground leading-tight">
                  <span className="block">BREAKING:</span>
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">
                    STALLION COMMANDER
                  </span>
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">
                    JUST HIT THE MARKET
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Experts are calling it the ultimate game-changer for unstoppable performance—limited access, just released, don’t miss out.
                </p>
              </div>
            
              {/* Benefits */}
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {[
                  { icon: Megaphone, text: "Breaking Release • Just Dropped" },
                  { icon: AlertTriangle, text: "Limited Access • Don’t Miss Out" },
                  { icon: Trophy, text: "Experts Call It the Game-Changer" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-card border border-border p-3 sm:p-4 rounded-lg hover:bg-gradient-card transition-all duration-300">
                    <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="font-bold text-foreground text-sm sm:text-base">{benefit.text}</span>
                  </div>
                ))}
              </div>
            
              {/* CTA Button */}
              <div className="pt-4">
                <Link to="/order" className="block">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg font-black px-8 py-4">
                    CLAIM YOUR POWER NOW
                  </Button>
                </Link>
              </div>
            
              {/* Trust Indicators */}
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">90-Day Guarantee</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                    ))}
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground ml-2">4.9/5 (2,847 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Image - Right side on desktop, top on mobile */}
            <div className="w-full lg:w-2/5 xl:w-1/3 order-1 lg:order-2">
              <div className="relative bg-gradient-card p-4 sm:p-6 rounded-2xl border border-border shadow-premium max-w-md mx-auto">
                <img 
                  src={coupleImage} 
                  alt="Confident mature man with beautiful woman - Stallion Commander results" 
                  className="w-full drop-shadow-2xl rounded-xl"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold animate-glow-pulse text-xs sm:text-sm">
                  LIMITED TIME
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-primary opacity-20 blur-3xl -z-10" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};