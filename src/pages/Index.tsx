import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExpertiseSection />
      <TechStackSection />
      <ProjectsSection />
      <WhyChooseSection />
      <ContactSection />
    </div>
  );
};

export default Index;
