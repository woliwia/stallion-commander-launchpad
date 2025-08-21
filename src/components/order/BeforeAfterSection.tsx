import beforeAfterImage from "@/assets/before-after-transformation.png";

const BeforeAfterSection = () => {
  return (
    <div className="mt-8 mb-12">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4">
          REAL RESULTS FROM
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            REAL MEN
          </span>
        </h2>
        <div className="max-w-full mx-auto">
          <img 
            src="/lovable-uploads/ad086c5e-10ee-4818-bdb8-bafe3c305c86.png"
            alt="Women's satisfied expressions showing the incredible results"
            className="w-full h-20 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <p className="text-lg text-white max-w-2xl mx-auto mt-4">
          See the incredible transformations achieved by men who chose <span className="text-primary font-semibold">Stallion Commander</span>
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-card border border-border rounded-2xl p-6 md:p-8 shadow-premium">
          <div className="text-center mb-4">
            <p className="text-xs text-muted-foreground">*AI generated photo for illustrative effects only</p>
          </div>
          
          <img 
            src={beforeAfterImage}
            alt="Before and after transformation showing incredible results from Stallion Commander"
            className="w-full max-w-3xl mx-auto rounded-lg drop-shadow-lg"
            loading="lazy"
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-muted-foreground mb-2">BEFORE</h3>
              <p className="text-sm text-muted-foreground">Low energy, poor confidence, struggling with performance</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary mb-2">AFTER</h3>
              <p className="text-sm text-foreground font-semibold">Increased energy, enhanced confidence, peak performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;