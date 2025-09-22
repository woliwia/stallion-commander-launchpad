import { useState } from "react";
import CountdownTimer from "@/components/order/CountdownTimer";
import PackageSelector from "@/components/order/PackageSelector";
import CheckoutForm from "@/components/order/CheckoutForm";
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
    id: "ultimate",
    name: "Ultimate Stallion",
    bottles: 6,
    originalPrice: 774,
    price: 269.94,
    pricePerBottle: 44.99,
    savings: 0,
    popular: false,
    features: ["6 Month Supply", "Free Shipping", "90-Day Guarantee", "Priority Support"]
  },
  {
    id: "popular",
    name: "Commander Pack",
    bottles: 3,
    originalPrice: 387,
    price: 164.97,
    pricePerBottle: 54.99,
    savings: 0,
    popular: true,
    features: ["3 Month Supply", "Free Shipping", "90-Day Guarantee"]
  },
  {
    id: "starter",
    name: "Starter Pack",
    bottles: 1,
    originalPrice: 129,
    price: 59.99,
    pricePerBottle: 59.99,
    savings: 0,
    popular: false,
    features: ["1 Month Supply", "Free Shipping", "90-Day Guarantee"]
  }
];

const Order = () => {
  const [selectedPackage, setSelectedPackage] = useState(packages[1]); // Default to popular package

  return (
    <div className="min-h-screen bg-gradient-dark">
      <CountdownTimer />

      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-4 sm:mb-6 md:mb-8 leading-tight">
            <span className="text-[#21BFF4]">
              GET UP TO 68% OFF
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Hurry, this is the best price you can get on Stallion Commander!
          </p>
          <p className="text-base sm:text-lg text-[#21BFF4] font-semibold mt-2">
            If you try Stallion Commander today you'll also get <span className="font-bold">FREE shipping</span>.
          </p>
        </div>

        {/* Main Content Grid - Two Step Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Step 1 - Package Selection (Left Side) */}
            <div className="order-1 lg:order-1 lg:border-r lg:border-border/30 lg:pr-8">
              <PackageSelector
                packages={packages}
                selectedPackage={selectedPackage}
                onPackageSelect={setSelectedPackage}
                productImage={productImage}
                commanderPackImage={commanderPackImage}
                ultimatePackImage={ultimatePackImage}
              />
              
              {/* Before/After Section positioned below packages */}
              <div className="hidden lg:block">
                <BeforeAfterSection />
              </div>
            </div>

            {/* Step 2 - Checkout Form (Right Side) */}
            <div className="order-2 lg:order-2 lg:pl-4">
              <CheckoutForm selectedPackage={selectedPackage} />
            </div>
          </div>
        </div>

        {/* Trust Badges - Below main content */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <TrustBadges />
        </div>

        {/* Before/After Section for mobile view */}
        <div className="lg:hidden">
          <BeforeAfterSection />
        </div>

        <ReviewsSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Order;