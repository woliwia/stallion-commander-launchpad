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
    features: ["3 Month Supply", "Free Shipping", "90-Day Guarantee", "FREE Bonus eBook"]
  },
  {
    id: "ultimate",
    name: "Ultimate Stallion",
    bottles: 6,
    originalPrice: 774,
    price: 249,
    savings: 525,
    popular: false,
    features: ["6 Month Supply", "Free Shipping", "90-Day Guarantee", "FREE Bonus eBook", "Priority Support"]
  }
];

const Order = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <div className="text-2xl font-black bg-gradient-primary bg-clip-text text-transparent">
              STALLION COMMANDER
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Secure Checkout</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            CHOOSE YOUR
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              STALLION PACKAGE
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the perfect package to unlock your true potential. All packages include our 90-day money-back guarantee.
          </p>
        </div>

        {/* Limited Time Offer Banner */}
        <div className="bg-gradient-primary text-primary-foreground p-4 rounded-lg text-center mb-12 animate-glow-pulse">
          <div className="flex items-center justify-center gap-2 font-bold">
            <Clock className="w-5 h-5" />
            <span>LIMITED TIME: Save up to 68% + FREE Shipping on All Orders!</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.id} className={`relative p-6 bg-card border-2 hover:shadow-premium transition-all duration-300 ${
                  pkg.popular ? 'border-primary shadow-glow' : 'border-border hover:border-primary/50'
                }`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground font-bold px-4 py-1">
                      MOST POPULAR
                    </Badge>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    
                    {/* Product Images */}
                    <div className="flex justify-center items-center mb-4">
                      {pkg.bottles === 1 ? (
                        <img 
                          src={productImage} 
                          alt="Health Commander Male Formula - Single Bottle" 
                          className="w-16 h-20 object-contain"
                        />
                      ) : pkg.bottles === 3 ? (
                        <img 
                          src={commanderPackImage} 
                          alt="Health Commander Male Formula - Buy 2 Get 1 FREE" 
                          className="w-32 h-24 object-contain"
                        />
                      ) : (
                        <img 
                          src={ultimatePackImage} 
                          alt="Health Commander Male Formula - Buy 3 Get 3 FREE" 
                          className="w-40 h-32 object-contain"
                        />
                      )}
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-semibold text-primary">{pkg.bottles} Bottle{pkg.bottles > 1 ? 's' : ''}</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-black text-foreground">${pkg.price}</span>
                      <span className="text-lg text-muted-foreground line-through ml-2">${pkg.originalPrice}</span>
                    </div>
                    <div className="bg-destructive/10 text-destructive px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      Save ${pkg.savings}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={pkg.popular ? "hero" : "default"} 
                    className="w-full"
                    size="lg"
                  >
                    SELECT PACKAGE
                  </Button>
                </Card>
              ))}
            </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          {[
            { icon: Shield, text: "SSL Secure" },
            { icon: CheckCircle, text: "Verified Safe" },
            { icon: Award, text: "FDA Registered" },
            { icon: Star, text: "Top Rated" }
          ].map((badge, index) => (
            <div key={index} className="flex items-center justify-center gap-2 bg-card border border-border p-3 rounded-lg">
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;