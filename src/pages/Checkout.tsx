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

      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Order Summary */}
            <Card className="p-4 md:p-6 lg:p-8 bg-card border-2 border-border">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Order Summary</h2>
              
              {/* Package Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={getImageSrc()}
                      alt={getImageAlt()}
                      className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{selectedPackage.name}</h3>
                      <p className="text-sm text-muted-foreground">{selectedPackage.bottles} Bottle{selectedPackage.bottles > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  {selectedPackage.popular && (
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      MOST POPULAR
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price per bottle:</span>
                    <div className="text-right">
                      <span className="font-semibold text-foreground">${pricePerBottle}</span>
                      <span className="text-muted-foreground line-through ml-2">${originalPricePerBottle}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Quantity:</span>
                    <span className="font-semibold text-foreground">{selectedPackage.bottles} bottle{selectedPackage.bottles > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-semibold text-foreground">${selectedPackage.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping:</span>
                    <span className="font-semibold text-primary">FREE</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-base">
                    <span className="font-bold text-foreground">Total:</span>
                    <div className="text-right">
                      <span className="font-black text-foreground text-xl">${selectedPackage.price}</span>
                      <div className="text-sm text-destructive font-semibold">
                        You save ${selectedPackage.savings}!
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Included:</h4>
                  <ul className="space-y-1">
                    {selectedPackage.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Checkout Form */}
            <Card className="p-4 md:p-6 lg:p-8 bg-card border-2 border-border">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Payment Details</h2>
              </div>

              <form className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
                  </div>
                </div>

                <Separator />

                {/* Billing Address */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Billing Address</h3>
                  <div>
                    <Label htmlFor="address" className="text-foreground">Street Address</Label>
                    <Input id="address" placeholder="123 Main Street" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-foreground">City</Label>
                      <Input id="city" placeholder="New York" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-foreground">State</Label>
                      <Select>
                        <SelectTrigger>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zipCode" className="text-foreground">ZIP Code</Label>
                      <Input id="zipCode" placeholder="10001" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="country" className="text-foreground">Country</Label>
                      <Select>
                        <SelectTrigger>
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
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Payment Method</h3>
                  <div>
                    <Label htmlFor="cardNumber" className="text-foreground">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="text-foreground">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-foreground">CVV</Label>
                      <Input id="cvv" placeholder="123" className="mt-1" />
                    </div>
                  </div>
                </div>

                {/* Complete Order Button */}
                <div className="pt-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg font-bold"
                    type="submit"
                  >
                    COMPLETE YOUR ORDER - ${selectedPackage.price}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
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