import { lazy, Suspense } from "react";
import OrderHeader from "@/components/order/OrderHeader";
import CountdownTimer from "@/components/order/CountdownTimer";
import LimitedTimeOffer from "@/components/order/LimitedTimeOffer";
import PackageCard from "@/components/order/PackageCard";
import TrustBadges from "@/components/order/TrustBadges";

// Lazy load images for better performance
const productImage = "/src/assets/health-commander-bottle.png";
const commanderPackImage = "/src/assets/commander-pack-3bottles.png";
const ultimatePackImage = "/src/assets/ultimate-pack-6bottles.png";

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
      <OrderHeader />

      <div className="container mx-auto px-4 py-6 md:py-12">
        <CountdownTimer />
        
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

        <LimitedTimeOffer />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {packages.map((pkg) => (
              <Suspense key={pkg.id} fallback={<div className="animate-pulse bg-muted rounded-lg h-96" />}>
                <PackageCard 
                  pkg={pkg}
                  productImage={productImage}
                  commanderPackImage={commanderPackImage}
                  ultimatePackImage={ultimatePackImage}
                />
              </Suspense>
            ))}
          </div>
        </div>

        <TrustBadges />
      </div>
    </div>
  );
};

export default Order;