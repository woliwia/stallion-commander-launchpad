import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/order/CountdownTimer";
import { useNavigate } from "react-router-dom";

const ArganOilUpsell = () => {
  const navigate = useNavigate();

  const handleCompleteOrder = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <CountdownTimer />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Offer Text */}
          <div className="mb-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Wait - get Fuller, STRONGER Hair and YOUNGER, Healthier SKIN plus your ULTIMATE 100% Organic Intimacy lubricant...
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Pure Argan Oil does it all
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Get yours for only $29.99 <span className="text-lg text-muted-foreground line-through">(regularly $99.99)</span>
            </p>
          </div>
          
          {/* Product Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/0d1bf809-e895-4770-8656-d25443b8ebe8.png"
              alt="Pure Argan Oil - Fuller hair, younger skin, organic lubricant"
              className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg shadow-lg"
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

export default ArganOilUpsell;