import { Battery, Brain, Heart, Zap, Shield, Target } from "lucide-react";
import vascularDiagram from "@/assets/vascular-enhancement-diagram.png";
import expandedCouplesBeautyBar from "@/assets/expanded-couples-beauty-bar.png";
import diverseOrgasmicBeautyBar from "@/assets/diverse-orgasmic-beauty-bar.png";

const benefits = [
  {
    icon: Zap,
    title: "Explosive Energy",
    description: "Experience unstoppable energy that lasts all day and night, powering through any challenge."
  },
  {
    icon: Heart,
    title: "Enhanced Circulation",
    description: "Improved blood flow delivers nutrients where you need them most for peak performance."
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Sharp focus and confidence to dominate in every aspect of your life."
  },
  {
    icon: Battery,
    title: "Increased Stamina",
    description: "Go longer and stronger with enhanced endurance and recovery capabilities."
  },
  {
    icon: Target,
    title: "Precision Performance",
    description: "Targeted results that deliver exactly what you need, when you need it most."
  },
  {
    icon: Shield,
    title: "Natural Formula",
    description: "Premium, science-backed ingredients with no harmful side effects or dependencies."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-6 bg-gradient-card relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(45_100%_65%)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 sm:mb-6">
            EXPERIENCE THE
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              STALLION DIFFERENCE
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-4">
            Discover why thousands of men choose Stallion Commander to unlock their true potential and dominate in every area of life.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-6 sm:p-8 rounded-xl hover:bg-gradient-card hover:shadow-premium transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Beauty Bar Collage */}
        <div className="mt-12 sm:mt-16 -mx-4">
          <img 
            src={expandedCouplesBeautyBar}
            alt="Happy couples - middle-aged men with beautiful women including blondes showing satisfaction and confidence"
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Scientific Explanation Section */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground text-center mb-8 sm:mb-12">
              THE SCIENCE BEHIND
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                STALLION COMMANDER
              </span>
            </h3>
            
            {/* Key Ingredients Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {/* L-Arginine HCL */}
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">L-Arginine HCL</h4>
                <p className="text-sm text-primary font-semibold mb-3">200mg Clinical Dose</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Converts to nitric oxide, dramatically improving blood flow and oxygen delivery for enhanced performance.
                </p>
              </div>
              
              {/* Ashwagandha */}
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Ashwagandha Root</h4>
                <p className="text-sm text-primary font-semibold mb-3">150mg Extract</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Powerful adaptogen that reduces cortisol, supports testosterone, and enhances stress resistance.
                </p>
              </div>
              
              {/* Maca Root */}
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Battery className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Maca Root Extract</h4>
                <p className="text-sm text-primary font-semibold mb-3">100mg Concentrated</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Ancient Peruvian superfood that boosts energy, stamina, and supports healthy libido naturally.
                </p>
              </div>
              
              {/* Eurycoma longifolia */}
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Tongkat Ali</h4>
                <p className="text-sm text-primary font-semibold mb-3">100mg Root Extract</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Malaysian "Ali's Stick" traditionally used to support male vitality and healthy hormone levels.
                </p>
              </div>
              
              {/* Horny Goat Weed */}
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">Horny Goat Weed</h4>
                <p className="text-sm text-primary font-semibold mb-3">100mg Leaf Extract</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Contains icariin compound that supports healthy circulation and natural male performance.
                </p>
              </div>
              
              {/* B-Vitamins Complex */}
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2">B-Vitamin Complex</h4>
                <p className="text-sm text-primary font-semibold mb-3">High-Potency Formula</p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  B-6 (235% DV) & B-12 (4,167% DV) for energy metabolism and nervous system support.
                </p>
              </div>
            </div>
            
            {/* Additional Supporting Ingredients */}
            <div className="bg-gradient-card border border-border rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-foreground mb-4 text-center">Additional Powerhouse Ingredients</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Tribulus Terrestris</h5>
                  <p className="text-sm text-muted-foreground">40mg whole plant extract for natural testosterone support</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Saw Palmetto</h5>
                  <p className="text-sm text-muted-foreground">40mg berry extract for prostate and hormonal health</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Premium Quality</h5>
                  <p className="text-sm text-muted-foreground">All extracts standardized for maximum potency</p>
                </div>
              </div>
            </div>
            
            {/* Scientific Process Flow */}
            <div className="mt-8 sm:mt-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-primary to-primary/70 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                    <span className="text-white font-bold text-lg sm:text-xl">1</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground">Rapid Absorption</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">Active compounds enter bloodstream within 30 minutes</span>
                </div>
                
                <div className="hidden md:block text-primary">
                  <Target className="w-6 h-6 rotate-90" />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-primary to-primary/70 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                    <span className="text-white font-bold text-lg sm:text-xl">2</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground">System Optimization</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">Hormones balance, circulation improves</span>
                </div>
                
                <div className="hidden md:block text-primary">
                  <Target className="w-6 h-6 rotate-90" />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-primary to-primary/70 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                    <span className="text-white font-bold text-lg sm:text-xl">3</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground">Peak Performance</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">Maximum vitality and confidence achieved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Health Mechanisms Section */}
        <div className="mt-6 sm:mt-8">
          {/* Vascular Enhancement Graphics */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-6">
              VASCULAR ENHANCEMENT PROCESS
            </h3>
            <div className="flex justify-center mb-6">
              <img 
                src={vascularDiagram}
                alt="Vascular Enhancement Diagram showing improved blood flow and vein enlargement"
                className="w-full max-w-md sm:max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-center">
              <div className="bg-gradient-card p-4 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">BEFORE</h4>
                <p className="text-sm text-muted-foreground">Normal circulation with restricted blood flow and limited vascular capacity</p>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">AFTER</h4>
                <p className="text-sm text-muted-foreground">Enhanced circulation with enlarged veins, increased blood flow, and improved turgidity</p>
              </div>
            </div>
            
            {/* RESULTS DON'T LIE Heading */}
            <div className="text-center mt-6 mb-4">
              <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  RESULTS DON'T LIE - JUST ASK HER
                </span>
              </h3>
            </div>
            
            {/* Women Orgasmic Reactions */}
            <div className="flex justify-center">
              <img 
                src={diverseOrgasmicBeautyBar}
                alt="Diverse beautiful women with blonde, brunette, and red hair showing orgasmic pleasure expressions"
                className="w-full max-w-xl h-24 sm:h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="bg-gradient-card border border-border rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground text-center mb-8 sm:mb-12">
              HOW STALLION COMMANDER
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                TRANSFORMS YOUR BODY
              </span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Health of the Corpora Cavernosa */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Health of the Corpora Cavernosa</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Stallion Commander increases blood flow into the corpora cavernosa, allowing more blood flow to the penis and to produce more intense and longer-lasting erections.
                </p>
              </div>
              
              {/* Cell Regeneration */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Cell Regeneration</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To maximize the expansion of the corpora cavernosa, which helps generate impressive erections, your body must produce new cells more quickly. So Stallion Commander Vitality Enrichment is loaded in anti-oxidants, proven to assist in the formation of new tissue.
                </p>
              </div>
              
              {/* Hormonal Balance */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Hormonal Balance</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Stallion Commander also increases the concentration of the hormone, testosterone, mainly responsible for the male sex drive and influence the power of erections and quality of orgasms.
                </p>
              </div>
              
              {/* Vitality Booster */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Vitality Booster</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Stallion Commander is loaded with substances that give extra energy so that you can enjoy your new power and virility all night.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};