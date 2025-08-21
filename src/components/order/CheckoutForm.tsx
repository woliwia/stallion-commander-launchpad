import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import PaymentMethods from "./PaymentMethods";
import AdditionalOptions from "./AdditionalOptions";

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

interface CheckoutFormProps {
  selectedPackage: Package | null;
}

const CheckoutForm = ({ selectedPackage }: CheckoutFormProps) => {
  const [rushOrder, setRushOrder] = useState(true);
  const [insureOrder, setInsureOrder] = useState(true);

  if (!selectedPackage) {
    return (
      <Card className="p-8 text-center">
        <div className="text-muted-foreground">
          Please select a package to continue
        </div>
      </Card>
    );
  }

  const rushFee = 19.95;
  const insuranceFee = 9.95;
  const baseTotal = selectedPackage.price;
  const additionalFees = (rushOrder ? rushFee : 0) + (insureOrder ? insuranceFee : 0);
  const finalTotal = baseTotal + additionalFees;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4">
          Step 2: <span className="text-primary">Tell Us Where To Ship To</span>
        </h2>
      </div>

      {/* PayPal Button */}
      <Card className="p-6 bg-gradient-primary text-center">
        <Button 
          size="lg" 
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg h-14"
        >
          💳 Pay with PayPal
        </Button>
        <div className="text-xs text-primary-foreground mt-2 opacity-90">
          Express checkout with PayPal
        </div>
      </Card>

      <div className="text-center text-muted-foreground font-medium">
        OR FILL OUT DETAILS
      </div>

      <PaymentMethods />

      {/* Checkout Form */}
      <Card className="p-6 sm:p-8">
        <form className="space-y-6">
          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-foreground font-medium">First Name</Label>
              <Input id="firstName" placeholder="First Name" className="mt-2 h-12" />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-foreground font-medium">Last Name</Label>
              <Input id="lastName" placeholder="Last Name" className="mt-2 h-12" />
            </div>
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address" className="text-foreground font-medium">Address</Label>
            <Input id="address" placeholder="Address" className="mt-2 h-12" />
          </div>

          <div>
            <Label htmlFor="address2" className="text-foreground font-medium">Address Line 2 (Optional)</Label>
            <Input id="address2" placeholder="Apartment, suite, etc." className="mt-2 h-12" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city" className="text-foreground font-medium">City</Label>
              <Input id="city" placeholder="City" className="mt-2 h-12" />
            </div>
            <div>
              <Label htmlFor="country" className="text-foreground font-medium">Country</Label>
              <Select>
                <SelectTrigger className="mt-2 h-12">
                  <SelectValue placeholder="United States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="postalCode" className="text-foreground font-medium">Postal Code</Label>
              <Input id="postalCode" placeholder="Postal Code" className="mt-2 h-12" />
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
            <Input id="email" type="email" placeholder="Email Address" className="mt-2 h-12" />
          </div>

          <div>
            <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Phone Number" className="mt-2 h-12" />
          </div>

          <Separator />

          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground text-lg">Payment Information</h3>
            
            <div>
              <Label htmlFor="cardNumber" className="text-foreground font-medium">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-2 h-12" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry" className="text-foreground font-medium">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" className="mt-2 h-12" />
              </div>
              <div>
                <Label htmlFor="cvv" className="text-foreground font-medium">CVV</Label>
                <Input id="cvv" placeholder="123" className="mt-2 h-12" />
              </div>
            </div>
          </div>
        </form>
      </Card>

      {/* Additional Options */}
      <AdditionalOptions 
        rushOrder={rushOrder}
        setRushOrder={setRushOrder}
        insureOrder={insureOrder}
        setInsureOrder={setInsureOrder}
        rushFee={rushFee}
        insuranceFee={insuranceFee}
      />

      {/* Order Summary */}
      <Card className="p-6 bg-gradient-card border-2 border-primary/20">
        <h3 className="font-bold text-foreground text-lg mb-4">Order Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-foreground">{selectedPackage.name}</span>
            <span className="font-semibold">${selectedPackage.price}</span>
          </div>
          
          {rushOrder && (
            <div className="flex justify-between text-primary">
              <span>Rush Processing</span>
              <span>+${rushFee}</span>
            </div>
          )}
          
          {insureOrder && (
            <div className="flex justify-between text-primary">
              <span>Package Insurance</span>
              <span>+${insuranceFee}</span>
            </div>
          )}
          
          <div className="flex justify-between text-primary font-semibold">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
          
          <Separator />
          
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-2xl">${finalTotal.toFixed(2)}</span>
          </div>
        </div>

        <Button 
          variant="hero" 
          size="lg" 
          className="w-full mt-6 text-xl font-black h-16"
        >
          COMPLETE YOUR ORDER - ${finalTotal.toFixed(2)}
        </Button>

        <div className="text-center text-sm text-muted-foreground mt-4">
          🔒 Your order is secured with 256-bit SSL encryption
        </div>
      </Card>
    </div>
  );
};

export default CheckoutForm;