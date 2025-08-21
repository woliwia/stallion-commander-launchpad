import { lazy, Suspense } from "react";
import OrderHeader from "@/components/order/OrderHeader";
import CountdownTimer from "@/components/order/CountdownTimer";
import LimitedTimeOffer from "@/components/order/LimitedTimeOffer";
import PackageCard from "@/components/order/PackageCard";
import TrustBadges from "@/components/order/TrustBadges";
import BeforeAfterSection from "@/components/order/BeforeAfterSection";
import ReviewsSection from "@/components/order/ReviewsSection";
import Footer from "@/components/order/Footer";

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
      <CountdownTimer />
      <OrderHeader />

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight">
            CHOOSE YOUR
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              STALLION PACKAGE
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Select the perfect package to unlock your true potential. All packages include our 90-day money-back guarantee.
          </p>
        </div>

        <LimitedTimeOffer />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg) => (
              <Suspense key={pkg.id} fallback={<div className="animate-pulse bg-muted rounded-2xl h-96" />}>
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
        <BeforeAfterSection />
        <ReviewsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Order;