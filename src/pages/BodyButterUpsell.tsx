import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/order/CountdownTimer";
import { useNavigate } from "react-router-dom";

const BodyButterUpsell = () => {
  const navigate = useNavigate();

  const handleCompleteOrder = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <CountdownTimer message="CONGRATULATIONS! You have qualified for our greatest offer!" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Offer Text */}
          <div className="mb-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Get rid of that dry FLAKEY Skin with ARGAN Infused, Whipped Body Butter only $19.99 <span className="text-lg text-red-500 line-through">(regular price $34.99)</span>
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