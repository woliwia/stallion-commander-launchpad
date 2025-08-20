import { lazy, Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

// Lazy load images for better performance
const LazyImage = lazy(() => Promise.resolve({
  default: ({ src, alt, className }: { src: string; alt: string; className: string }) => (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      loading="lazy"
      decoding="async"
    />
  )
}));

interface Package {
  id: string;
  name: string;
  bottles: number;
  originalPrice: number;
  price: number;
  savings: number;
  popular: boolean;
  features: string[];
}

interface PackageCardProps {
  pkg: Package;
  productImage: string;
  commanderPackImage: string;
  ultimatePackImage: string;
}

const PackageCard = ({ pkg, productImage, commanderPackImage, ultimatePackImage }: PackageCardProps) => {
  const getImageSrc = () => {
    if (pkg.bottles === 1) return productImage;
    if (pkg.bottles === 3) return commanderPackImage;
    return ultimatePackImage;
  };

  const getImageAlt = () => {
    if (pkg.bottles === 1) return "Health Commander Male Formula - Single Bottle";
    if (pkg.bottles === 3) return "Health Commander Male Formula - Buy 2 Get 1 FREE";
    return "Health Commander Male Formula - Buy 3 Get 3 FREE";
  };

  return (
    <Card className={`relative p-4 md:p-6 lg:p-8 bg-card border-2 hover:shadow-premium transition-all duration-300 flex flex-col ${
      pkg.popular ? 'border-primary shadow-glow' : 'border-border hover:border-primary/50'
    }`}>
      {pkg.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground font-bold px-3 md:px-4 py-1 text-xs md:text-sm">
          MOST POPULAR
        </Badge>
      )}
      
      <div className="text-center mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">{pkg.name}</h3>
        
        {/* Product Images */}
        <div className="flex justify-center items-center mb-4 md:mb-6">
          <Suspense fallback={<div className="w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 bg-muted animate-pulse rounded" />}>
            <LazyImage 
              src={getImageSrc()}
              alt={getImageAlt()}
              className="w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain drop-shadow-lg"
            />
          </Suspense>
        </div>
        
        <div className="text-center">
          <span className="text-sm font-semibold text-primary">{pkg.bottles} Bottle{pkg.bottles > 1 ? 's' : ''}</span>
        </div>
        
        <div className="mb-3 md:mb-4">
          <span className="text-2xl md:text-3xl font-black text-foreground">${pkg.price}</span>
          <span className="text-base md:text-lg text-muted-foreground line-through ml-2">${pkg.originalPrice}</span>
        </div>
        <div className="bg-destructive/10 text-destructive px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold inline-block">
          Save ${pkg.savings}
        </div>
      </div>
      
      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
        {pkg.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
            <span className="text-xs md:text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-auto">
        <Button 
          variant={pkg.popular ? "hero" : "default"} 
          className="w-full text-sm md:text-base"
          size="lg"
        >
          SELECT PACKAGE
        </Button>
      </div>
    </Card>
  );
};

export default PackageCard;