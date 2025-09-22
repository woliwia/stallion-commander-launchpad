import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import AdditionalOptions from "./AdditionalOptions";
import { cn } from "@/lib/utils";

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
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    address2: '',
    city: '',
    country: '',
    postalCode: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  // Refs for form fields
  const fieldRefs = {
    firstName: useRef<HTMLInputElement>(null),
    lastName: useRef<HTMLInputElement>(null),
    address: useRef<HTMLInputElement>(null),
    city: useRef<HTMLInputElement>(null),
    postalCode: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    cardNumber: useRef<HTMLInputElement>(null),
    expiry: useRef<HTMLInputElement>(null),
    cvv: useRef<HTMLInputElement>(null)
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const validateForm = () => {
    const requiredFields = [
      'firstName', 'lastName', 'address', 'city', 'postalCode', 
      'email', 'phone', 'cardNumber', 'expiry', 'cvv'
    ];
    
    const newErrors: Record<string, boolean> = {};
    let firstErrorField: string | null = null;
    
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData].trim()) {
        newErrors[field] = true;
        if (!firstErrorField) {
          firstErrorField = field;
        }
      }
    });
    
    setErrors(newErrors);
    
    // Focus on first error field
    if (firstErrorField && fieldRefs[firstErrorField as keyof typeof fieldRefs]) {
      fieldRefs[firstErrorField as keyof typeof fieldRefs].current?.focus();
      fieldRefs[firstErrorField as keyof typeof fieldRefs].current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the order
      console.log('Order submitted:', { formData, rushOrder, insureOrder });
    }
  };

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
      <div className="text-center mb-8 mt-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white text-[#21BFF4] rounded-full flex items-center justify-center font-black text-lg">
            2
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground">
            <span className="text-[#21BFF4]">Tell Us Where To Ship To</span>
          </h2>
        </div>
        <div className="h-1 w-full bg-white rounded lg:mb-6"></div>
      </div>

      {/* PayPal Button */}
      <Card className="p-6 bg-white text-center mb-2">
        <Button
          size="lg"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg h-14"
        >
          💳 Pay with PayPal
        </Button>
        <div className="text-xs text-black mt-2 opacity-90">
          Express checkout with PayPal
        </div>
      </Card>

      <div className="text-center text-white font-medium mb-1">
        OR FILL OUT DETAILS
      </div>

      <div className="mb-6 flex justify-center">
        <div className="text-center text-2xl font-black uppercase leading-none tracking-[0.3em] sm:text-3xl md:text-4xl">
          <span className="text-[#21BFF4]">STALLION</span>{" "}
          <span className="text-[#80858F]">COMMANDER</span>
        </div>
      </div>
      <Card className="p-4 sm:p-6 mt-2">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-foreground font-medium">First Name *</Label>
              <Input 
                ref={fieldRefs.firstName}
                id="firstName" 
                placeholder="First Name" 
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={cn(
                  "mt-2 h-12 border-white focus:border-white",
                  errors.firstName && "border-red-500 focus:ring-red-500 bg-red-50/20"
                )}
                style={{ backgroundColor: !errors.firstName ? '#e0f4ff' : undefined }}
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-foreground font-medium">Last Name *</Label>
              <Input 
                ref={fieldRefs.lastName}
                id="lastName" 
                placeholder="Last Name" 
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={cn(
                  "mt-2 h-12 border-white focus:border-white",
                  errors.lastName && "border-red-500 focus:ring-red-500 bg-red-50/20"
                )}
                style={{ backgroundColor: !errors.lastName ? '#e0f4ff' : undefined }}
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <Label htmlFor="address" className="text-foreground font-medium">Address *</Label>
            <Input 
              ref={fieldRefs.address}
              id="address" 
              placeholder="Address" 
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className={cn(
                "mt-2 h-12 border-white focus:border-white",
                errors.address && "border-red-500 focus:ring-red-500 bg-red-50/20"
              )}
              style={{ backgroundColor: !errors.address ? '#e0f4ff' : undefined }}
            />
          </div>

          <div>
            <Label htmlFor="address2" className="text-foreground font-medium">Address Line 2 (Optional)</Label>
            <Input 
              id="address2" 
              placeholder="Apartment, suite, etc." 
              value={formData.address2}
              onChange={(e) => handleInputChange('address2', e.target.value)}
              className="mt-2 h-12 border-white focus:border-white"
              style={{ backgroundColor: '#e0f4ff' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city" className="text-foreground font-medium">City *</Label>
              <Input 
                ref={fieldRefs.city}
                id="city" 
                placeholder="City" 
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className={cn(
                  "mt-2 h-12 border-white focus:border-white",
                  errors.city && "border-red-500 focus:ring-red-500 bg-red-50/20"
                )}
                style={{ backgroundColor: !errors.city ? '#e0f4ff' : undefined }}
              />
            </div>
            <div>
              <Label htmlFor="country" className="text-foreground font-medium">Country *</Label>
              <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                <SelectTrigger className="mt-2 h-12 border-white focus:border-white" style={{ backgroundColor: '#e0f4ff' }}>
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
              <Label htmlFor="postalCode" className="text-foreground font-medium">Postal Code *</Label>
              <Input 
                ref={fieldRefs.postalCode}
                id="postalCode" 
                placeholder="Postal Code" 
                value={formData.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                className={cn(
                  "mt-2 h-12 border-white focus:border-white",
                  errors.postalCode && "border-red-500 focus:ring-red-500 bg-red-50/20"
                )}
                style={{ backgroundColor: !errors.postalCode ? '#e0f4ff' : undefined }}
              />
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
            <Input 
              ref={fieldRefs.email}
              id="email" 
              type="email" 
              placeholder="Email Address" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={cn(
                "mt-2 h-12 border-white focus:border-white",
                errors.email && "border-red-500 focus:ring-red-500 bg-red-50/20"
              )}
              style={{ backgroundColor: !errors.email ? '#e0f4ff' : undefined }}
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-foreground font-medium">Phone Number *</Label>
            <Input 
              ref={fieldRefs.phone}
              id="phone" 
              type="tel" 
              placeholder="Phone Number" 
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={cn(
                "mt-2 h-12 border-white focus:border-white",
                errors.phone && "border-red-500 focus:ring-red-500 bg-red-50/20"
              )}
              style={{ backgroundColor: !errors.phone ? '#e0f4ff' : undefined }}
            />
          </div>

          <Separator />

          {/* Payment Method */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-foreground text-lg">Payment Information</h3>
            </div>
            
            <div>
              <Label htmlFor="cardNumber" className="text-foreground font-medium">Card Number *</Label>
              <Input 
                ref={fieldRefs.cardNumber}
                id="cardNumber" 
                placeholder="1234 5678 9012 3456" 
                value={formData.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                className={cn(
                  "mt-2 h-12 border-white focus:border-white",
                  errors.cardNumber && "border-red-500 focus:ring-red-500 bg-red-50/20"
                )}
                style={{ backgroundColor: !errors.cardNumber ? '#e0f4ff' : undefined }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry" className="text-foreground font-medium">Expiry Date *</Label>
                <Input 
                  ref={fieldRefs.expiry}
                  id="expiry" 
                  placeholder="MM/YY" 
                  value={formData.expiry}
                  onChange={(e) => handleInputChange('expiry', e.target.value)}
                  className={cn(
                    "mt-2 h-12 border-white focus:border-white",
                    errors.expiry && "border-red-500 focus:ring-red-500 bg-red-50/20"
                  )}
                  style={{ backgroundColor: !errors.expiry ? '#e0f4ff' : undefined }}
                />
              </div>
              <div>
                <Label htmlFor="cvv" className="text-foreground font-medium">CVV *</Label>
                <Input 
                  ref={fieldRefs.cvv}
                  id="cvv" 
                  placeholder="123" 
                  value={formData.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  className={cn(
                    "mt-2 h-12 border-white focus:border-white",
                    errors.cvv && "border-red-500 focus:ring-red-500 bg-red-50/20"
                  )}
                  style={{ backgroundColor: !errors.cvv ? '#e0f4ff' : undefined }}
                />
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
      <Card className="p-4 bg-gradient-card border-2 border-primary/20">
        <h3 className="font-bold text-foreground text-lg mb-4">Order Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-foreground">{selectedPackage.name}</span>
            <span className="font-semibold">${selectedPackage.price}</span>
          </div>
          
          {rushOrder && (
            <div className="flex justify-between text-[#21BFF4]">
              <span>Rush Processing</span>
              <span>+${rushFee}</span>
            </div>
          )}

          {insureOrder && (
            <div className="flex justify-between text-[#21BFF4]">
              <span>Package Insurance</span>
              <span>+${insuranceFee}</span>
            </div>
          )}

          <div className="flex justify-between text-[#21BFF4] font-semibold">
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
          onClick={handleSubmit}
          type="button"
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