import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface Package {
  id: string;
  name: string;
  bottles: number;
  originalPrice: number;
  price: number;
  pricePerBottle: number;
  savings: number;
  popular: boolean;
  features: string[];
}

interface PackageSelectorProps {
  packages: Package[];
  selectedPackage: Package | null;
  onPackageSelect: (pkg: Package) => void;
  productImage: string;
  commanderPackImage: string;
  ultimatePackImage: string;
}

const PackageSelector = ({ 
  packages, 
  selectedPackage, 
  onPackageSelect,
  productImage,
  commanderPackImage,
  ultimatePackImage
}: PackageSelectorProps) => {
  const getImageSrc = (bottles: number) => {
    if (bottles === 1) return productImage;
    if (bottles === 3) return commanderPackImage;
    return ultimatePackImage;
  };

  const getImageAlt = (bottles: number) => {
    if (bottles === 1) return "Health Commander Male Formula - Single Bottle";
    if (bottles === 3) return "Health Commander Male Formula - Buy 2 Get 1 FREE";
    return "Health Commander Male Formula - Buy 3 Get 3 FREE";
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8 mt-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-lg">
            1
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground">
            <span className="text-primary">Select Order Quantity</span>
          </h2>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-primary to-primary/30 rounded lg:mb-6"></div>
      </div>

      <div className="space-y-4">
        {packages.map((pkg) => {
          const isSelected = selectedPackage?.id === pkg.id;

          return (
            <Card
              key={pkg.id}
              className={`relative p-6 cursor-pointer transition-all duration-300 border-2 ${
                isSelected 
                  ? 'border-primary bg-primary/5 shadow-glow' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => onPackageSelect(pkg)}
            >
              {/* Selection Radio Button */}
              <div className="absolute top-4 left-4">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'
                }`}>
                  {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
                </div>
              </div>

              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground font-bold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="flex items-center gap-6 pl-8">
                {/* Package Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={getImageSrc(pkg.bottles)}
                    alt={getImageAlt(pkg.bottles)}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-lg"
                    loading="lazy"
                  />
                </div>

                {/* Package Info */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {pkg.bottles} BOTTLE{pkg.bottles > 1 ? 'S' : ''}
                    {pkg.bottles === 3 && <span className="text-primary"> + 1 FREE</span>}
                    {pkg.bottles === 6 && <span className="text-primary"> + 3 FREE</span>}
                  </h3>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl sm:text-3xl font-black text-foreground">
                      ${pkg.pricePerBottle}
                      {pkg.bottles > 1 && <span className="text-sm font-normal text-muted-foreground"> / bottle</span>}
                    </div>
                  </div>

                  <div className="text-lg font-semibold text-primary">
                    FREE SHIPPING
                  </div>
                </div>

                {/* Total Price */}
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-black text-foreground">
                    ${pkg.price}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PackageSelector;