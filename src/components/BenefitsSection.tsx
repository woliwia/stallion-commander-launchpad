import { Battery, Brain, Heart, Zap, Shield, Target } from "lucide-react";

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
    <section className="py-12 bg-gradient-card relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(45_100%_65%)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-6">
            EXPERIENCE THE
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              STALLION DIFFERENCE
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover why thousands of men choose Stallion Commander to unlock their true potential and dominate in every area of life.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-8 rounded-xl hover:bg-gradient-card hover:shadow-premium transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-6 py-3 rounded-full mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Backed by Science • Proven Results</span>
          </div>
        </div>
      </div>
    </section>
  );
};