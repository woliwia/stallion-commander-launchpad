import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import Header from "@/components/Header";
import Footer from "@/components/order/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
};

export default Index;