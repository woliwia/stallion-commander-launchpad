import beforeAfterImage from "@/assets/before-after-transformation.png";

const BeforeAfterSection = () => {
  return (
    <div className="mt-6 mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4">
          REAL RESULTS FROM
          <span className="block text-[#21BFF4]">
            REAL MEN
          </span>
        </h2>
        <div className="max-w-full mx-auto">
          <img 
            src="/lovable-uploads/ad086c5e-10ee-4818-bdb8-bafe3c305c86.png"
            alt="Women's satisfied expressions showing the incredible results"
            className="w-full h-28 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <p className="text-lg text-white max-w-2xl mx-auto mt-4">
          See the incredible transformations achieved by men who chose <span className="text-[#21BFF4] font-semibold">Stallion Commander</span>
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-card border border-border rounded-2xl p-6 md:p-8 shadow-premium">
          
          <img 
            src={beforeAfterImage}
            alt="Before and after transformation showing incredible results from Stallion Commander"
            className="w-full max-w-3xl mx-auto rounded-lg drop-shadow-lg min-h-[300px] object-cover"
            loading="lazy"
          />
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              {
                title: "BEFORE",
                titleClasses: "text-muted-foreground",
                description:
                  "Restricted circulation keeps veins tight, endurance low, and performance weak—every effort burns out before it begins.",
                descriptionClasses: "text-muted-foreground",
              },
              {
                title: "AFTER",
                titleClasses: "text-[#21BFF4]",
                description:
                  "Optimized circulation expands veins, powers stronger blood flow, and unlocks peak stamina for relentless performance every time.",
                descriptionClasses: "text-foreground font-semibold",
              },
            ].map(({ title, titleClasses, description, descriptionClasses }) => (
              <div
                key={title}
                className="text-center rounded-lg border border-[#B0B0B0] p-4 md:p-6"
              >
                <h3
                  className={`text-2xl md:text-3xl font-black tracking-wide mb-3 ${titleClasses}`}
                >
                  {title}
                </h3>
                <p className={`text-base ${descriptionClasses}`}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
