import { Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    "Contact Us",
    "Terms and Conditions", 
    "Privacy Policy",
    "Refund Policy",
    "Shipping Policy",
    "AFFILIATE SIGN UP"
  ];

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Made in America */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            <span className="text-lg font-black text-foreground">PROUDLY MADE IN</span>
            <span className="text-lg font-black bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent">
              AMERICA
            </span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex items-center">
              <a 
                href="#" 
                className="text-xs sm:text-sm md:text-base text-muted-foreground hover:text-primary transition-colors font-semibold px-2 py-1"
              >
                {link}
              </a>
              {index < footerLinks.length - 1 && (
                <span className="ml-2 sm:ml-4 md:ml-8 text-muted-foreground">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Brand */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="text-lg sm:text-xl md:text-2xl font-black text-[#42C6F7]">
            STALLION COMMANDER
          </div>
        </div>

        {/* Certification Logos */}
        <div className="flex items-center justify-center px-4 border-t border-border pt-4 sm:pt-6 mt-4 sm:mt-6">
          <img
            src="/lovable-uploads/06e1c285-a576-46f1-83d3-1334be303b4a.png"
            alt="FDA Registered Facility, Made in USA, GMP Certified, Recyclable"
            className="h-16 sm:h-20 md:h-24 w-auto max-w-full opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;