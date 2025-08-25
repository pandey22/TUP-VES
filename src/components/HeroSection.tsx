import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/3325fbb6-45e2-43cd-919c-a5a12d0ec7f7.png')`
        }}
      >
        {/* Overlay to blend with theme */}
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <div className="flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-primary mr-3" />
              <span className="text-primary font-semibold tracking-wide">TEAMUP TECH</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Mission-Critical Verification for {" "}
              <span className="gradient-text"> <br />
              Safety-Certified Aerospace Systems</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Trusted Systems Engineering Partners for the World's Most Demanding Aerospace Programs
            </p>
            
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;