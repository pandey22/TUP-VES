import { Users, Settings, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What <span className="gradient-text">We Do</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contract Systems Engineers On-Demand */}
            <div className="aerospace-card p-8 hover-lift slide-up">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">On-Demand Verification Engineers</h3>
              </div>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <p className="text-foreground leading-relaxed">
                  Add specialized verification experts to your team for critical aerospace programs.
                </p>
              </div>
              <br />
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">UVM-based verification for ASIC and FPGA designs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Testbench development and functional coverage implementation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Compliance-driven verification under DO-254 and FAA standards</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Debugging and regression automation for faster sign-off</span>
                </div>
              </div>
              
              
            </div>

            {/* End-to-End Systems Engineering Services */}
            <div className="aerospace-card p-8 hover-lift slide-up">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">End-to-End Verification Services</h3>
              </div>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <p className="text-foreground leading-relaxed">
                 Comprehensive verification services ensuring compliance and quality.
                </p>
              </div>
              <br />
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Full-cycle verification from planning to closure</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Development of reusable UVM environments and coverage models</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Gate-level simulation, timing verification, and CDC analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Sign-off documentation and certification support</span>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;