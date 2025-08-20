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
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex items-center">
              <a 
                href="#" 
                className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors font-semibold"
              >
                {link}
              </a>
              {index < footerLinks.length - 1 && (
                <span className="ml-4 md:ml-8 text-muted-foreground">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Brand */}
        <div className="text-center mb-6">
          <div className="text-2xl font-black bg-gradient-primary bg-clip-text text-transparent">
            STALLION COMMANDER
          </div>
        </div>

        {/* FDA Disclaimer */}
        <div className="text-center border-t border-border pt-6">
          <p className="text-xs md:text-sm text-muted-foreground">
            *These statements have not been reviewed by the FDA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;