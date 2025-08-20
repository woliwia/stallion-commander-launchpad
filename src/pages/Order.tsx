import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Star, Clock, Award, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import productImage from "@/assets/health-commander-bottle.png";
import commanderPackImage from "@/assets/commander-pack-3bottles.png";
import ultimatePackImage from "@/assets/ultimate-pack-6bottles.png";

const packages = [
  {
    id: "starter",
    name: "Starter Pack",
    bottles: 1,
    originalPrice: 129,
    price: 69,
    savings: 60,
    popular: false,
    features: ["1 Month Supply", "Free Shipping", "90-Day Guarantee"]
  },
  {
    id: "popular",
    name: "Commander Pack",
    bottles: 3,
    originalPrice: 387,
    price: 159,
    savings: 228,
    popular: true,
    features: ["3 Month Supply", "Free Shipping", "90-Day Guarantee"]
  },
  {
    id: "ultimate",
    name: "Ultimate Stallion",
    bottles: 6,
    originalPrice: 774,
    price: 249,
    savings: 525,
    popular: false,
    features: ["6 Month Supply", "Free Shipping", "90-Day Guarantee", "Priority Support"]
  }
];

const Order = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-sm md:text-base">Back to Home</span>
            </Link>
            <div className="text-lg md:text-2xl font-black bg-gradient-primary bg-clip-text text-transparent text-center">
              STALLION COMMANDER
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-xs md:text-sm font-semibold text-foreground hidden sm:inline">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground mb-4 md:mb-6 leading-tight">
            CHOOSE YOUR
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              STALLION PACKAGE
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Select the perfect package to unlock your true potential. All packages include our 90-day money-back guarantee.
          </p>
        </div>

        {/* Limited Time Offer Banner */}
        <div className="bg-gradient-primary text-primary-foreground p-3 md:p-4 rounded-lg text-center mb-8 md:mb-12 animate-glow-pulse mx-4 md:mx-0">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 font-bold text-sm md:text-base">
            <Clock className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-center">LIMITED TIME: Save up to 68% + FREE Shipping on All Orders!</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.id} className={`relative p-4 md:p-6 lg:p-8 bg-card border-2 hover:shadow-premium transition-all duration-300 flex flex-col ${
                  pkg.popular ? 'border-primary shadow-glow' : 'border-border hover:border-primary/50'
                }`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground font-bold px-3 md:px-4 py-1 text-xs md:text-sm">
                      MOST POPULAR
                    </Badge>
                  )}
                  
                  <div className="text-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">{pkg.name}</h3>
                    
                    {/* Product Images */}
                    <div className="flex justify-center items-center mb-4 md:mb-6">
                      {pkg.bottles === 1 ? (
                        <img 
                          src={productImage} 
                          alt="Health Commander Male Formula - Single Bottle" 
                          className="w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain drop-shadow-lg"
                        />
                      ) : pkg.bottles === 3 ? (
                        <img 
                          src={commanderPackImage} 
                          alt="Health Commander Male Formula - Buy 2 Get 1 FREE" 
                          className="w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain drop-shadow-lg"
                        />
                      ) : (
                        <img 
                          src={ultimatePackImage} 
                          alt="Health Commander Male Formula - Buy 3 Get 3 FREE" 
                          className="w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain drop-shadow-lg"
                        />
                      )}
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-semibold text-primary">{pkg.bottles} Bottle{pkg.bottles > 1 ? 's' : ''}</span>
                    </div>
                    
                    <div className="mb-3 md:mb-4">
                      <span className="text-2xl md:text-3xl font-black text-foreground">${pkg.price}</span>
                      <span className="text-base md:text-lg text-muted-foreground line-through ml-2">${pkg.originalPrice}</span>
                    </div>
                    <div className="bg-destructive/10 text-destructive px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold inline-block">
                      Save ${pkg.savings}
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                        <span className="text-xs md:text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      variant={pkg.popular ? "hero" : "default"} 
                      className="w-full text-sm md:text-base"
                      size="lg"
                    >
                      SELECT PACKAGE
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 max-w-2xl mx-auto px-4">
          {[
            { icon: Shield, text: "SSL Secure" },
            { icon: CheckCircle, text: "Verified Safe" },
            { icon: Award, text: "FDA Registered" },
            { icon: Star, text: "Top Rated" }
          ].map((badge, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-1 md:gap-2 bg-card border border-border p-2 md:p-3 rounded-lg">
              <badge.icon className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
              <span className="text-xs md:text-sm font-semibold text-foreground text-center">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;