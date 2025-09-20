import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

export const GuaranteeSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-card relative">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main Guarantee Card */}
          <div className="bg-card border border-[#42C6F7] rounded-3xl p-8 sm:p-12 md:p-16 shadow-premium mb-12 sm:mb-16">
            <div className="text-center mb-12 sm:mb-16">
              {/* Shield Icon */}
              <div className="bg-primary/10 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 animate-glow-pulse">
                <Shield className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 sm:mb-8">
                <span className="bg-gradient-primary bg-clip-text text-transparent">90-DAY</span>
                <br />MONEY-BACK GUARANTEE
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                We're so confident in Stallion Commander's ability to transform your performance that we offer an industry-leading 90-day guarantee. If you're not completely satisfied, we'll refund every penny.
              </p>
            </div>
            
            {/* Guarantee Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
              {[
                {
                  icon: Clock,
                  title: "90 Full Days",
                  description: "Take a full 3 months to experience the complete transformation"
                },
                {
                  icon: CheckCircle,
                  title: "No Questions Asked",
                  description: "Simply contact us for a full refund if you're not satisfied"
                },
                {
                  icon: Award,
                  title: "Keep the Bottles",
                  description: "Even if you return it, keep what you've used. That's our confidence in you"
                }
              ].map((point, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <point.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">{point.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">{point.description}</p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <Link to="/order" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="hero" size="xl" className="mb-6 w-full sm:w-auto text-lg sm:text-xl md:text-2xl px-8 py-6 sm:py-8 font-black">
                  RUSH MY ORDER
                </Button>
              </Link>
              <p className="text-sm sm:text-base text-muted-foreground">
                Join 50,000+ men who've already transformed their lives
              </p>
            </div>
          </div>
          
          {/* Additional Trust Elements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Shield, text: "SSL Secure Checkout" },
              { icon: Award, text: "FDA Registered Facility" },
              { icon: CheckCircle, text: "Third-Party Tested" }
            ].map((trust, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 bg-card border border-[#B0B0B0] p-4 sm:p-6 rounded-xl"
              >
                <trust.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                <span className="font-semibold text-foreground text-sm sm:text-base">{trust.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};