import { Battery, Brain, Heart, Zap, Shield, Target, Crown, Activity } from "lucide-react";
import vascularDiagram from "@/assets/vascular-enhancement-diagram.png";
import fitMenExercisingBar from "@/assets/fit-men-exercising-bar.png";
import fullFaceSurprisedOrgasmBar from "@/assets/full-face-surprised-orgasm-bar.png";
import muscularMenLiftingWeightsBar from "@/assets/muscular-men-lifting-weights-bar.png";

const benefits = [
  {
    icon: Zap,
    title: "Explosive Energy",
    description:
      "Ignite unstoppable energy that powers you day and night—conquer every challenge without slowing down."
  },
  {
    icon: Heart,
    title: "Enhanced Circulation",
    description:
      "Boost blood flow for peak performance—delivering vital nutrients exactly where your body needs them most."
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description:
      "Unlock sharp focus and unshakable confidence—dominate every decision and every aspect of your life."
  },
  {
    icon: Battery,
    title: "Increased Stamina",
    description:
      "Push beyond your limits with enhanced endurance and rapid recovery to go stronger, longer."
  },
  {
    icon: Target,
    title: "Precision Performance",
    description:
      "Targeted results engineered to give you exactly what you need, precisely when you need it."
  },
  {
    icon: Shield,
    title: "Natural Formula",
    description:
      "Premium, science-backed ingredients—maximum results with zero harmful side effects or dependencies."
  }
];

const keyFeatures = [
  {
    icon: Zap,
    title: "Unleash Explosive Energy",
    description: "Ignite your stamina and power through every challenge with unstoppable drive."
  },
  {
    icon: Activity,
    title: "Peak Performance Amplified",
    description: "Boost strength, endurance, and vitality to perform at your absolute best."
  },
  {
    icon: Crown,
    title: "Command Supreme Confidence",
    description: "Elevate your presence, mindset, and performance—inside and outside the gym."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-responsive bg-gradient-card relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(45_100%_65%)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
      
      <div className="container relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-responsive">
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <img
              src={muscularMenLiftingWeightsBar}
              alt="Muscular middle-aged men lifting weights showing strength and determination"
              className="w-full h-16 sm:h-20 md:h-24 lg:h-32 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mt-responsive-sm space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
              <span className="block">EXPERIENCE THE</span>
              <span className="block text-transparent bg-gradient-to-r from-[#42C6F7] via-[#42C6F7] to-white bg-clip-text">
                STALLION DIFFERENCE
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-semibold leading-relaxed">
              Experts agree: Stallion Commander is more than a formula—it’s the breakthrough transforming ordinary men into unstoppable forces of strength and vitality.
            </p>
          </div>
        </div>
        
        {/* Key Features - Responsive Layout */}
        <div className="mb-responsive">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-responsive max-w-5xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card to-card/50 border border-[#42C6F7] p-8 md:p-6 lg:p-8 rounded-xl hover:bg-gradient-card hover:shadow-premium transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="bg-primary/10 w-16 h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-6 md:mb-4 lg:mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl md:text-lg lg:text-xl font-bold text-foreground mb-4 md:mb-3 lg:mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-responsive">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-[#42C6F7] p-responsive rounded-xl lg:rounded-2xl hover:bg-gradient-card hover:shadow-premium transition-all duration-300 group animate-slide-up text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-responsive-sm group-hover:bg-primary/20 transition-colors md:mx-auto lg:mx-0">
                <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
              </div>
              
              <h3 className="text-responsive-lg font-bold text-foreground mb-responsive-sm md:text-center lg:text-left">
                {benefit.title}
              </h3>
              
              <p className="text-responsive-base text-muted-foreground leading-relaxed md:text-center lg:text-left">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Beauty Bar Collage */}
        <div className="mt-8 sm:mt-12">
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <img 
              src={fitMenExercisingBar}
              alt="Fit middle-aged men exercising - running, cycling, swimming, working out showing health and vitality"
              className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        
        {/* Scientific Explanation Section */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-card border border-[#B0B0B0] rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground text-center tracking-tight mb-8 sm:mb-12">
              THE CLINICAL EDGE OF
              <span className="block text-[#42C6F7]">
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
                  Converts to nitric oxide, flooding muscles with oxygen-rich blood for rock-solid stamina and relentless performance.
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
                  Clinically proven adaptogen that crushes cortisol while elevating testosterone to fortify strength, focus, and drive.
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
                  Concentrated alkaloids recharge cellular energy, sustaining all-day endurance, balanced hormones, and a surging libido.
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
                  Malaysian powerhouse shown to amplify free testosterone, muscle density, and primal confidence.
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
                  Icariin intensifies nitric oxide signaling for thicker circulation, stronger function, and unshakable vitality.
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
                  High-potency B6 and B12 ignite energy metabolism, neural resilience, and day-long mental stamina.
                </p>
              </div>
            </div>
            
            {/* Additional Supporting Ingredients */}
            <div className="bg-gradient-card border border-[#B0B0B0] rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-foreground mb-4 text-center">Additional Powerhouse Ingredients</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Tribulus Terrestris</h5>
                  <p className="text-sm text-muted-foreground">40mg whole plant extract proven to elevate natural testosterone for amplified strength and virility.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Saw Palmetto</h5>
                  <p className="text-sm text-muted-foreground">40mg berry extract that shields the prostate, balances DHT, and preserves unstoppable potency.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">Premium Quality</h5>
                  <p className="text-sm text-muted-foreground">Standardized extracts deliver clinical strength with every dose for dependable male dominance.</p>
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
                  <span className="text-xs sm:text-sm text-muted-foreground">Bioavailable delivery saturates your bloodstream in 30 minutes for an immediate power surge.</span>
                </div>
                
                <div className="hidden md:block text-primary">
                  <Target className="w-6 h-6 rotate-90" />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-primary to-primary/70 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                    <span className="text-white font-bold text-lg sm:text-xl">2</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground">System Optimization</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">Hormones recalibrate, circulation accelerates, and nutrients hit every performance pathway.</span>
                </div>
                
                <div className="hidden md:block text-primary">
                  <Target className="w-6 h-6 rotate-90" />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-primary to-primary/70 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 sm:mb-3">
                    <span className="text-white font-bold text-lg sm:text-xl">3</span>
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground">Peak Performance</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">Lock in sustained stamina, unshakeable confidence, and elite-level output.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Health Mechanisms Section */}
        <div className="mt-6 sm:mt-8">
          {/* Vascular Enhancement Graphics */}
          <div className="bg-card border border-[#B0B0B0] rounded-2xl p-6 sm:p-8 mb-8">
            <h3 className="text-3xl sm:text-4xl font-black text-center text-foreground mb-6">
              VASCULAR ENHANCEMENT PROCESS
            </h3>
            <div className="flex justify-center mb-6">
              <img 
                src={vascularDiagram}
                alt="Vascular Enhancement Diagram showing improved blood flow and vein enlargement"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto rounded-lg shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-center">
              <div className="bg-gradient-card border border-[#B0B0B0] p-4 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">BEFORE</h4>
                <p className="text-sm text-muted-foreground">Normal circulation with restricted blood flow and limited vascular capacity</p>
              </div>
              <div className="bg-gradient-card border border-[#B0B0B0] p-4 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">AFTER</h4>
                <p className="text-sm text-muted-foreground">Enhanced circulation with enlarged veins, increased blood flow, and improved turgidity</p>
              </div>
            </div>
            
            {/* RESULTS DON'T LIE Heading */}
            <div className="text-center mt-6 mb-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[#42C6F7]">
                RESULTS DON'T LIE - JUST ASK HER
              </h3>
            </div>
            
            {/* Women Orgasmic Reactions */}
            <div className="flex justify-center -mx-4">
              <img 
                src={fullFaceSurprisedOrgasmBar}
                alt="Women showing full faces with mix of surprised and orgasmic expressions"
                className="w-full h-24 sm:h-28 md:h-32 lg:h-40 object-cover rounded-lg shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          
          <div className="bg-gradient-card border border-[#B0B0B0] rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground text-center mb-8 sm:mb-12">
              HOW STALLION COMMANDER
              <span className="block text-[#42C6F7]">
                TRANSFORMS YOUR BODY
              </span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Health of the Corpora Cavernosa */}
              <div className="bg-card border border-[#B0B0B0] rounded-xl p-6">
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Health of the Corpora Cavernosa</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Flood the corpora cavernosa with surge-level circulation so you achieve harder, fuller erections that stay rock-solid longer.
                </p>
              </div>
              
              {/* Cell Regeneration */}
              <div className="bg-card border border-[#B0B0B0] rounded-xl p-6">
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Cell Regeneration</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Trigger rapid cell regeneration so your chambers expand, veins widen, and every erection surges with maximum volume.
                </p>
              </div>
              
              {/* Hormonal Balance */}
              <div className="bg-card border border-[#B0B0B0] rounded-xl p-6">
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Hormonal Balance</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Elevate testosterone to ignite relentless sex drive, intensify orgasms, and keep your performance fierce every time.
                </p>
              </div>
              
              {/* Vitality Booster */}
              <div className="bg-card border border-[#B0B0B0] rounded-xl p-6">
                <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3">Vitality Booster</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Unleash all-night stamina and electrifying confidence so you dominate every encounter with unstoppable power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
