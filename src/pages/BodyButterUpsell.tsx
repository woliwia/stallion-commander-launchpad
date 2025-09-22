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
          <div className="mb-8">
            <img 
              src="/stallion-commander-vip-hero.png"
              alt="Stallion Commander VIP for Life - Ultimate Male Vitality Supplement"
              className="w-full max-w-2xl mx-auto h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
          
          {/* Promotional Text */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="text-left space-y-4 text-foreground">
              <p className="text-base md:text-lg leading-relaxed">
                By taking advantage of this VIP for LIFE Promotion, you will get a fresh month's supply of Stallion Commander every 30 days and only pay $19.99 + Shipping — forever.
              </p>
              
              <div className="inline-block bg-[#21bff4] text-white px-4 py-2 rounded-lg font-semibold text-base md:text-lg">
                No increases. Guaranteed. Lock this in, NOW.
              </div>
              
              <p className="text-base md:text-lg leading-relaxed">
                The best part? Your delivery won't start for 30 days, so it arrives right when you need it. Imagine the unstoppable power, stamina, and confidence of Stallion Commander for less than $0.70 a day!
              </p>
              
              <p className="text-base md:text-lg leading-relaxed">
                With this exclusive offer, you can enjoy peace of mind knowing your supply is always ready — saving you time, hassle, and money. Don't miss out on locking in this incredible deal and taking your performance, vitality, and confidence to the next level.
              </p>
            </div>
          </div>
          
          {/* Pricing and CTA Block */}
          <div className="rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            {/* Pricing Row */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-left">
                <span className="text-2xl text-gray-400 line-through font-semibold">$105</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">Only: $0 today!</span>
              </div>
            </div>
            
            {/* Main CTA Button */}
            <button 
              onClick={handleCompleteOrder}
              className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-xl py-4 px-8 rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden group mb-4"
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)',
                boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
              }}
            >
              <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/20 to-transparent rounded-t-lg"></div>
              <span className="relative z-10">YES! SIGN ME UP! &gt;</span>
            </button>
            
            {/* No Thanks Link */}
            <div className="text-center">
              <button 
                onClick={handleCompleteOrder}
                className="text-[#21bff4] text-sm hover:underline"
              >
                No thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyButterUpsell;