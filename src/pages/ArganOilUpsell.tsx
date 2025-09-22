import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/order/CountdownTimer";
import { useNavigate } from "react-router-dom";
import arganOilCouple from "@/assets/argan-oil-couple.jpg";
import stallionLogo from "@/assets/stallion-commander-logo-blue.png";

const ArganOilUpsell = () => {
  const navigate = useNavigate();

  const handleCompleteOrder = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Logo Strip */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4 flex justify-center">
          <img 
            src={stallionLogo}
            alt="Stallion Commander"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>
      </div>
      
      <CountdownTimer />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Offer Text */}
          <div className="mb-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Wait - get Fuller, STRONGER Hair and YOUNGER, Healthier SKIN plus your ULTIMATE 100% Organic Intimacy lubricant...
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#21BFF4' }}>
              Pure Argan Oil does it all
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Get yours for only <span style={{ color: '#21BFF4' }}>$30.60</span> <span className="text-lg text-red-500">(regularly $105)</span>
            </p>
          </div>
          
          {/* Product Image */}
          <div className="mb-8">
            <img 
              src={arganOilCouple}
              alt="Pure Argan Oil - Fuller hair, younger skin, organic lubricant"
              className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
          
          {/* Detailed Sales Copy */}
          <div className="mb-12 text-left max-w-3xl mx-auto">
            <p className="text-lg mb-6 text-foreground">
              This is your one and only chance to upgrade with Pure Argan Oil — the all-in-one formula for vitality, youth, and confidence. Add it today for just <span style={{ color: '#21BFF4' }}>$30.60 each</span> <span className="text-red-500">(regularly $105)</span> — that's over <span style={{ color: '#21BFF4' }}>70% OFF!</span>
            </p>
            
            <p className="text-lg mb-6 text-foreground font-semibold">
              Don't pause your progress. Why stop now, when your transformation is just beginning?
            </p>
            
            <p className="text-lg mb-6 text-foreground">
              Clinical studies show that consistent daily use of Argan Oil delivers lasting results — restoring shine to your hair, smoothing and hydrating skin, and enhancing intimacy like nothing else.
            </p>
            
            <div className="mb-6">
              <p className="text-lg mb-4 text-foreground font-semibold">Each bottle of Pure Argan Oil is:</p>
              <ul className="space-y-3 text-lg text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-xl" style={{ color: '#21BFF4' }}>✓</span>
                  <span><strong>100% Organic & Natural</strong> — no fillers, no synthetics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl" style={{ color: '#21BFF4' }}>✓</span>
                  <span><strong>Multi-Benefit</strong> — for hair, skin, and intimacy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl" style={{ color: '#21BFF4' }}>✓</span>
                  <span><strong>Gentle & Nourishing</strong> — safe, silky, and effective.</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg mb-8 text-foreground font-bold" style={{ color: '#21BFF4' }}>
              Don't miss this exclusive offer! Once this deal is gone, it's gone for good. Secure your Pure Argan Oil upgrade now and take your results to the next level!
            </p>
          </div>
          
          {/* Pricing Section */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl text-gray-500 line-through">$105</span>
              <span className="text-3xl font-bold text-foreground">$30.60</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold">70% OFF!</span>
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

export default ArganOilUpsell;