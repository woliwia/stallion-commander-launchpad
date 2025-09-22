import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/order/CountdownTimer";
import { useNavigate } from "react-router-dom";
import stallionLogo from "@/assets/stallion-commander-logo-text.png";

const BodyButterUpsell = () => {
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
      
      <CountdownTimer message="CONGRATULATIONS! You have qualified for our greatest offer!" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Offer Text */}
          <div className="mb-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              VIP FOR LIFE: NEVER RUN OUT OF <span className="font-black">STALLION COMMANDER</span> @<span className="text-primary font-bold">$19.99 / mo</span> FOR LIFE
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-primary mt-4">
              See What Great Skin Feels Like.
            </p>
          </div>
          
          {/* Product Image */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/2304aa0d-f176-4bcb-b559-3b36fda568d4.png"
              alt="Argan infused whipped body butter for dry flakey skin"
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

export default BodyButterUpsell;