import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, Shield } from "lucide-react";

interface AdditionalOptionsProps {
  rushOrder: boolean;
  setRushOrder: (value: boolean) => void;
  insureOrder: boolean;
  setInsureOrder: (value: boolean) => void;
  rushFee: number;
  insuranceFee: number;
}

const AdditionalOptions = ({
  rushOrder,
  setRushOrder,
  insureOrder,
  setInsureOrder,
  rushFee,
  insuranceFee
}: AdditionalOptionsProps) => {
  return (
    <div className="space-y-4">
      {/* Rush Order Option */}
      <Card className="p-6 border-2 border-primary/20 bg-gradient-card">
        <div className="flex items-start gap-4">
          <Checkbox
            id="rushOrder"
            checked={rushOrder}
            onCheckedChange={setRushOrder}
            className="mt-1"
          />
          <div className="flex-1">
            <label htmlFor="rushOrder" className="flex items-center gap-3 cursor-pointer">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <div className="font-bold text-foreground text-lg">
                  RUSH My Order (+${rushFee})
                </div>
                <div className="text-sm text-muted-foreground">
                  Get priority processing and faster shipping (2-3 business days)
                </div>
              </div>
            </label>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-primary">+${rushFee}</div>
            <div className="text-xs text-muted-foreground">Recommended</div>
          </div>
        </div>
      </Card>

      {/* Insurance Option */}
      <Card className="p-6 border-2 border-primary/20 bg-gradient-card">
        <div className="flex items-start gap-4">
          <Checkbox
            id="insureOrder"
            checked={insureOrder}
            onCheckedChange={setInsureOrder}
            className="mt-1"
          />
          <div className="flex-1">
            <label htmlFor="insureOrder" className="flex items-center gap-3 cursor-pointer">
              <Shield className="w-6 h-6 text-primary" />
              <div>
                <div className="font-bold text-foreground text-lg">
                  INSURE My Order (+${insuranceFee})
                </div>
                <div className="text-sm text-muted-foreground">
                  Protect your package against loss, theft, or damage during shipping
                </div>
              </div>
            </label>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-primary">+${insuranceFee}</div>
            <div className="text-xs text-muted-foreground">Peace of mind</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdditionalOptions;