import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Shield, Lock, CreditCard, Star } from "lucide-react";
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
import stallionCommanderLightning from "@/assets/stallion-commander-lightning.png";
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

  const getOfferLabel = () => {
    if (selectedPackage.bottles === 1) return "BUY 1 BOTTLE";
    if (selectedPackage.bottles === 3) return "BUY 2 + GET 1 FREE";
    return "BUY 3 GET 3 FREE";
  };

  const getSavePercentage = () => {
    const savePercent = Math.round(((selectedPackage.originalPrice - selectedPackage.price) / selectedPackage.originalPrice) * 100);
    return `Save ${savePercent}%`;
  };

  const getImageSrc = () => {
    if (selectedPackage.bottles === 1) return stallionCommanderLightning;
    if (selectedPackage.bottles === 3) return commanderPackImage;
    return ultimatePackImage;
  };

  const getImageAlt = () => {
    if (selectedPackage.bottles === 1) return "Stallion Commander with blue lightning effects - Single Bottle";
    if (selectedPackage.bottles === 3) return "Stallion Commander - Buy 2 Get 1 FREE";
    return "Stallion Commander - Buy 3 Get 3 FREE";
  };

  const getDescriptionLines = () => {
    if (selectedPackage.bottles === 1) {
      return ["1x Bottle of Stallion Commander"];
    }
    if (selectedPackage.bottles === 3) {
      return [
        "3x Bottles of Stallion Commander",
        "Like buying 2 and getting 1 FREE",
        "Great Value Package"
      ];
    }
    return [
      "6x Bottles of Stallion Commander", 
      "Like buying 3 and getting 3 FREE",
      "Our Biggest Discount Ever"
    ];
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
            {/* Order Summary - Appears first on mobile */}
            <div className="bg-black border-2 border-blue-500 rounded-xl p-6 h-fit order-2 xl:order-1 relative">
              {/* Top Labels */}
              <div className="flex justify-between items-start mb-6">
                {/* Top Left - Red Label */}
                <div className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold">
                  {getOfferLabel()}
                </div>
                {/* Top Right - Save Badge and Reg Price */}
                <div className="text-right">
                  <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-bold mb-1">
                    {getSavePercentage()}
                  </div>
                  <div className="text-gray-400 text-xs line-through">
                    Reg: ${selectedPackage.originalPrice}
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex items-center gap-6 mb-6">
                {/* Left - Product Image */}
                <div className="bg-gray-800 rounded-xl p-4 flex-shrink-0">
                  <img 
                    src={getImageSrc()}
                    alt={getImageAlt()}
                    className="w-32 h-32 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Right - Price and Button */}
                <div className="flex-1 text-right">
                  <div className="text-white text-3xl font-bold mb-1">
                    ${pricePerBottle.toFixed(2)} each
                  </div>
                  <div className="text-green-500 text-lg font-semibold mb-4">
                    Savings ${selectedPackage.savings.toFixed(2)}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                    Selected
                  </button>
                </div>
              </div>

              {/* Bottom - Description and Shipping */}
              <div className="text-left space-y-2">
                {getDescriptionLines().map((line, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="text-white text-base">{line}</span>
                  </div>
                ))}
                <div className="text-green-500 font-bold text-base mt-3">
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