import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Thank You Header */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              THANK YOU FOR YOUR ORDER!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your order has been successfully processed and you will receive a confirmation email shortly.
            </p>
          </div>

          {/* Order Summary */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Base Product */}
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-left">Stallion Commander (1 bottle)</span>
                <span className="font-semibold">$69.99</span>
              </div>
              
              {/* Upsell 1 */}
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-left">Additional Bottles (3 bottles @ $24.99 each)</span>
                <span className="font-semibold">$74.97</span>
              </div>
              
              {/* Upsell 2 */}
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-left">Extra Bottles (3 bottles @ $14.99 each)</span>
                <span className="font-semibold">$44.97</span>
              </div>
              
              {/* Upsell 3 */}
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-left">Pure Argan Oil</span>
                <span className="font-semibold">$29.99</span>
              </div>
              
              {/* Upsell 4 */}
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-left">Argan Infused Whipped Body Butter</span>
                <span className="font-semibold">$19.99</span>
              </div>
              
              {/* Shipping */}
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-left">Shipping & Handling</span>
                <span className="font-semibold">FREE</span>
              </div>
              
              {/* Total */}
              <div className="flex justify-between items-center py-4 bg-primary/10 px-4 rounded-lg">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-2xl font-bold text-primary">$239.91</span>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              You will receive tracking information via email once your order ships.
            </p>
            <p className="text-sm text-muted-foreground">
              If you have any questions about your order, please contact our customer support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;