import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OrderHeader = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-[88px] z-40">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="font-semibold text-sm md:text-base">Back to Home</span>
          </Link>
          <div className="text-lg md:text-2xl font-black bg-gradient-primary bg-clip-text text-transparent text-center">
            STALLION COMMANDER
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-xs md:text-sm font-semibold text-foreground hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OrderHeader;