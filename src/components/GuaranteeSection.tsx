import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";

export const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-card relative">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Main Guarantee Card */}
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 shadow-premium mb-12">
            <div className="text-center mb-12">
              {/* Shield Icon */}
              <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">90-DAY</span>
                <br />MONEY-BACK GUARANTEE
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We're so confident in Stallion Commander's ability to transform your performance that we offer an industry-leading 90-day guarantee. If you're not completely satisfied, we'll refund every penny.
              </p>
            </div>
            
            {/* Guarantee Points */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <Link to="/order">
                <Button variant="hero" size="xl" className="mb-4">
                  RUSH MY ORDER
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Join 50,000+ men who've already transformed their lives
              </p>
            </div>
          </div>
          
          {/* Additional Trust Elements */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, text: "SSL Secure Checkout" },
              { icon: Award, text: "FDA Registered Facility" },
              { icon: CheckCircle, text: "Third-Party Tested" }
            ].map((trust, index) => (
              <div key={index} className="flex items-center justify-center gap-3 bg-card border border-border p-4 rounded-lg">
                <trust.icon className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">{trust.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};