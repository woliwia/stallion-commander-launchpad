import { useState } from "react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/order/CountdownTimer";
import { useNavigate } from "react-router-dom";
import threeStallionBottles from "@/assets/three-stallion-commander-bottles.png";

const Upsell = () => {
  const navigate = useNavigate();

  const handleCompleteOrder = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <CountdownTimer />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-destructive mb-8">
            WAIT YOUR ORDER IS NOT COMPLETE
          </h1>
          
          {/* Offer Text */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Get 3 More For only $24.99
            </h2>
            <p className="text-base text-muted-foreground mb-2">
              <span className="text-sm">(per bottle)</span>
            </p>
            <p className="text-xl md:text-2xl font-semibold text-primary">
              and MAXIMIZE Results!
            </p>
            <p className="mt-6 text-lg md:text-xl font-semibold text-foreground">
              Snag Male Formula Ultra Potent now—this is your last chance to grab 3
              more bottles for just $24.99 each before this breakthrough supply
              disappears. Ignite unstoppable strength, explosive performance, and
              faster results that keep you operating at ultimate power. Skip this
              upgrade and you&apos;ll regret it—lock in the savings and smash
              <span className="mx-1 uppercase text-destructive">Complete My Order</span>
              now!
            </p>
          </div>
          
          {/* Three Stallion Commander Bottles */}
          <div className="mb-12">
            <img 
              src={threeStallionBottles}
              alt="3 Bottles of Stallion Commander"
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
          
          {/* Complete Order Button */}
          <Button 
            onClick={handleCompleteOrder}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            size="xl"
          >
            COMPLETE MY ORDER
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upsell;