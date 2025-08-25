import { Plane, Cpu, Rocket, Navigation, Shield, Zap, Server, Radar, Code, Target, Clock, RefreshCcw } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
  {
    icon: Code, // Represents coding & testbench development
    title: "UVM Testbench Development",
    description: "Advanced reusable testbenches for high-reliability ASIC/FPGA designs."
  },
  {
    icon: Target, // Represents precision & coverage
    title: "Coverage-Driven Verification",
    description: "Functional and code coverage for verification completeness."
  },
  {
    icon: Shield, // Represents compliance & safety
    title: "Compliance & Safety Standards",
    description: "DO-254 DAL-A/B verification strategies."
  },
  {
    icon: Clock, // Represents timing verification
    title: "Gate-Level & Timing Verification",
    description: "Ensuring timing closure and power integrity."
  },
  {
    icon: RefreshCcw, // Represents automation & continuous cycles
    title: "Regression Automation",
    description: "Jenkins and scripting for faster sign-off cycles."
  }
];


  return (
    <section id="expertise" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Areas of Our <span className="gradient-text">Expertise</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 aerospace-card hover-lift slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;