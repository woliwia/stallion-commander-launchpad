import { useState } from "react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/order/CountdownTimer";
import { useNavigate } from "react-router-dom";
import upsell2StallionBottles from "@/assets/upsell2-stallion-bottles.png";
import stallionLogo from "@/assets/stallion-commander-logo-text.png";
import stallionLogoBlue from "@/assets/stallion-commander-logo-blue-text.png";

const FinalUpsell = () => {
  const navigate = useNavigate();

  const handleCompleteOrder = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Logo Strip - At Very Top */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-center">
          <img 
            src={stallionLogo}
            alt="Stallion Commander"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>
      </div>
      
      {/* Logo Above Red Stripe */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <img 
            src={stallionLogoBlue}
            alt="Stallion Commander"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>
      </div>
      
      <CountdownTimer />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Question */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Are you ready to take it to the next level?
          </h1>
          
          {/* Offer Text */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: '#21BFF4' }}>
              Get 3 More Bottles of Stallion Commander for only $24.99
              <span className="text-sm md:text-base font-normal"> / bottle</span>
            </h2>
          </div>
          
          {/* Stallion Commander 3 Bottles */}
          <div className="mb-8">
            <img 
              src={upsell2StallionBottles}
              alt="3 Bottles of Stallion Commander"
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
          
          {/* Motivational Text */}
          <div className="mb-8 max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
              Don't stop now—you're just getting started. For a limited time only, you can grab <span style={{ color: '#21BFF4' }}>3 MORE bottles of Stallion Commander for just $24.99 each!</span>
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
              That's a steal compared to the regular price—power, stamina, and unstoppable performance at the <span style={{ color: '#21BFF4' }}>lowest price you'll EVER see</span>.
            </p>
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-4">
              Why pay more later when you can lock in this insane deal right now and fuel your transformation to the MAX?
            </p>
            <p className="text-lg md:text-xl font-bold text-foreground" style={{ color: '#21BFF4' }}>
              👉 Hit "COMPLETE MY ORDER" before this deal disappears—once it's gone, it's gone for good!
            </p>
          </div>
          
          {/* User Uploaded Image */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/616ef652-3715-4dfb-a03b-07b422c0be32.png"
              alt="Satisfied customers"
              className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
          
          {/* Pricing Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <span className="text-lg text-gray-400 line-through">$315</span>
                <span className="text-2xl font-bold text-foreground">76% OFF!</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">Only: $24.99/each</span>
                <span className="text-2xl font-bold text-foreground">$74.97 Total</span>
              </div>
            </div>
          </div>
          
          {/* Complete Order Button */}
          <Button 
            onClick={handleCompleteOrder}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
            size="xl"
          >
            COMPLETE MY ORDER
          </Button>
          
          {/* No Thanks Link */}
          <div className="text-center">
            <button 
              onClick={handleCompleteOrder}
              className="text-blue-600 hover:text-blue-700 text-sm underline"
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalUpsell;