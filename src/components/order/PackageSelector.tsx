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
          <div className="w-10 h-10 bg-white text-[#21BFF4] rounded-full flex items-center justify-center font-black text-lg">
            1
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground">
            <span className="text-[#21BFF4]">Select Order Quantity</span>
          </h2>
        </div>
        <div className="h-1 w-full bg-white rounded lg:mb-6"></div>
      </div>

      <div className="space-y-6">
        {packages.map((pkg) => {
          const isSelected = selectedPackage?.id === pkg.id;

          const cardBorderClasses = pkg.popular
            ? `border-[#21BFF4] ${
                isSelected ? 'bg-primary/5 shadow-glow' : 'hover:border-[#21BFF4]'
              }`
            : isSelected
              ? 'border-white bg-primary/5 shadow-glow'
              : 'border-white hover:border-white/80';

          return (
            <Card
              key={pkg.id}
              className={`relative p-8 cursor-pointer transition-all duration-300 border-2 ${cardBorderClasses}`}
              onClick={() => onPackageSelect(pkg)}
            >
              {/* Selection Radio Button */}
              <div className="absolute top-4 left-4">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    pkg.popular
                      ? isSelected
                        ? 'border-[#21BFF4] bg-[#21BFF4]'
                        : 'border-[#21BFF4]'
                      : isSelected
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                  }`}
                >
                  {isSelected && (
                    <Check
                      className={`w-3 h-3 ${pkg.popular ? 'text-white' : 'text-primary-foreground'}`}
                    />
                  )}
                </div>
              </div>

              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#21BFF4] text-white font-bold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="flex items-center gap-8 pl-8 py-4">
                {/* Package Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={getImageSrc(pkg.bottles)}
                    alt={getImageAlt(pkg.bottles)}
                    className="w-36 h-40 sm:w-44 sm:h-48 object-contain drop-shadow-lg"
                    loading="lazy"
                  />
                </div>

                {/* Package Info */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {pkg.bottles === 1 && "1 BOTTLE"}
                    {pkg.bottles === 3 && (
                      <span>
                        Buy 2 Get<br />
                        1 FREE
                      </span>
                    )}
                    {pkg.bottles === 6 && (
                      <span>
                        Buy 3 Get<br />
                        3 FREE
                      </span>
                    )}
                  </h3>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl sm:text-3xl font-black text-foreground">
                      ${pkg.pricePerBottle}
                      {pkg.bottles > 1 && <span className="text-sm font-normal text-muted-foreground"> / bottle</span>}
                    </div>
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