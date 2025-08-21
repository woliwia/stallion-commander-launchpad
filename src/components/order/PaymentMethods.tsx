import { Card } from "@/components/ui/card";

const PaymentMethods = () => {
  return (
    <Card className="p-4 bg-muted/50 border-border mb-4">
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <div className="text-sm text-muted-foreground font-medium">
          We Accept:
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Visa */}
          <div className="w-10 h-6 sm:w-12 sm:h-7 bg-white rounded border flex items-center justify-center">
            <div className="text-blue-600 font-bold text-xs sm:text-sm">VISA</div>
          </div>
          
          {/* Mastercard */}
          <div className="w-10 h-6 sm:w-12 sm:h-7 bg-white rounded border flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-400 rounded-full -ml-1"></div>
            </div>
          </div>
          
          {/* Amex */}
          <div className="w-10 h-6 sm:w-12 sm:h-7 bg-blue-600 rounded border flex items-center justify-center">
            <div className="text-white font-bold text-xs sm:text-sm">AMEX</div>
          </div>
          
          {/* Discover */}
          <div className="w-10 h-6 sm:w-12 sm:h-7 bg-orange-500 rounded border flex items-center justify-center">
            <div className="text-white font-bold text-xs sm:text-sm">DISC</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PaymentMethods;