import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Shield, Lock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface Package {
  id: string;
  name: string;
  bottles: number;
  originalPrice: number;
  price: number;
  savings: number;
  popular: boolean;
  features: string[];
}

// Product images
const productImage = "/src/assets/health-commander-bottle.png";
const commanderPackImage = "/src/assets/commander-pack-3bottles.png";
const ultimatePackImage = "/src/assets/ultimate-pack-6bottles.png";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  useEffect(() => {
    const pkg = location.state?.package;
    if (!pkg) {
      navigate("/order");
      return;
    }
    setSelectedPackage(pkg);
  }, [location, navigate]);

  if (!selectedPackage) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading checkout...</p>
        </div>
      </div>
    );
  }

  const pricePerBottle = Math.round(selectedPackage.price / selectedPackage.bottles);
  const originalPricePerBottle = Math.round(selectedPackage.originalPrice / selectedPackage.bottles);

  const getImageSrc = () => {
    if (selectedPackage.bottles === 1) return productImage;
    if (selectedPackage.bottles === 3) return commanderPackImage;
    return ultimatePackImage;
  };

  const getImageAlt = () => {
    if (selectedPackage.bottles === 1) return "Health Commander Male Formula - Single Bottle";
    if (selectedPackage.bottles === 3) return "Health Commander Male Formula - Buy 2 Get 1 FREE";
    return "Health Commander Male Formula - Buy 3 Get 3 FREE";
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/order")}
              className="flex items-center gap-2 text-foreground hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-semibold text-sm md:text-base">Back to Packages</span>
            </Button>
            <div className="text-lg md:text-2xl font-black bg-gradient-primary bg-clip-text text-transparent text-center">
              SECURE CHECKOUT
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <Lock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* BloodCommander Style Order Card */}
            <div className="bg-gray-900 border-2 border-red-600 rounded-2xl p-6 h-fit order-2 xl:order-1">
              {/* Header Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  BUY 1 BOTTLE
                </div>
                <div className="bg-gray-600 text-white px-3 py-1 rounded text-sm font-semibold">
                  Save 43%
                </div>
              </div>

              {/* Main Content Row */}
              <div className="flex gap-6 mb-6">
                {/* Product Image */}
                <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-center w-48 h-48 flex-shrink-0">
                  <img 
                    src="/src/assets/stallion-commander-lightning.png"
                    alt="Stallion Commander Male Enhancement Supplement with Blue Lightning Effects"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Pricing Section */}
                <div className="flex-1 flex flex-col justify-between text-right">
                  <div className="space-y-1">
                    <div className="text-gray-400 line-through text-sm">
                      Reg: $105
                    </div>
                    <div className="text-white text-2xl font-bold">
                      $59.99 <span className="text-lg font-normal">each</span>
                    </div>
                    <div className="text-green-400 text-sm font-semibold">
                      Savings $45
                    </div>
                  </div>
                  
                  <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg w-full mt-4">
                    Selected
                  </button>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-yellow-400">⭐</span>
                  <span>1x Bottle of Stallion Commander</span>
                </div>
                
                <div className="text-green-400 font-semibold">
                  FREE Shipping
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <Card className="p-6 sm:p-8 md:p-10 bg-card border-2 border-border order-1 xl:order-2">
              <div className="flex items-center gap-3 mb-8">
                <CreditCard className="w-6 h-6 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Payment Details</h2>
              </div>

              <form className="space-y-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="font-semibold text-foreground text-lg">Contact Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground text-base">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-2 h-12" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground text-base">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2 h-12" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground text-base">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-2 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground text-base">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-2 h-12" />
                  </div>
                </div>

                <Separator />

                {/* Billing Address */}
                <div className="space-y-6">
                  <h3 className="font-semibold text-foreground text-lg">Billing Address</h3>
                  <div>
                    <Label htmlFor="address" className="text-foreground text-base">Street Address</Label>
                    <Input id="address" placeholder="123 Main Street" className="mt-2 h-12" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="city" className="text-foreground text-base">City</Label>
                      <Input id="city" placeholder="New York" className="mt-2 h-12" />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-foreground text-base">State</Label>
                      <Select>
                        <SelectTrigger className="mt-2 h-12">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="ca">California</SelectItem>
                          <SelectItem value="tx">Texas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="zipCode" className="text-foreground text-base">ZIP Code</Label>
                      <Input id="zipCode" placeholder="10001" className="mt-2 h-12" />
                    </div>
                    <div>
                      <Label htmlFor="country" className="text-foreground text-base">Country</Label>
                      <Select>
                        <SelectTrigger className="mt-2 h-12">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Payment Method */}
                <div className="space-y-6">
                  <h3 className="font-semibold text-foreground text-lg">Payment Method</h3>
                  <div>
                    <Label htmlFor="cardNumber" className="text-foreground text-base">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2 h-12" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="expiry" className="text-foreground text-base">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" className="mt-2 h-12" />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-foreground text-base">CVV</Label>
                      <Input id="cvv" placeholder="123" className="mt-2 h-12" />
                    </div>
                  </div>
                </div>

                {/* Complete Order Button */}
                <div className="pt-6">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg sm:text-xl font-bold h-14 sm:h-16"
                    type="submit"
                  >
                    COMPLETE YOUR ORDER - ${selectedPackage.price}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    🔒 Your payment information is encrypted and secure. 90-day money-back guarantee.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;