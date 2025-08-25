import { Plane, Cpu, Rocket, Navigation, Shield, Zap, Server, Radar } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: Plane,
      title: "Flight Control Systems",
      description: "Advanced flight control and autopilot systems"
    },
    {
      icon: Zap,
      title: "Avionics & Power Systems", 
      description: "Critical avionics and power distribution systems"
    },
    {
      icon: Rocket,
      title: "Propulsion System Engineering",
      description: "Engine control and propulsion optimization"
    },
    {
      icon: Server,
      title: "Spacecraft Subsystems",
      description: "Power, Thermal, and Communications systems"
    },
    {
      icon: Cpu,
      title: "FADEC and Engine Controller Development",
      description: "Full Authority Digital Engine Control systems"
    },
    {
      icon: Navigation,
      title: "Inertial Navigation and Guidance Systems",
      description: "Precision navigation and guidance solutions"
    },
    {
      icon: Shield,
      title: "Embedded Systems Safety Analysis",
      description: "Safety-critical embedded system validation"
    },
    {
      icon: Cpu,
      title: "Model-Based Systems Engineering (MBSE)",
      description: "Digital engineering and systems modeling"
    },
    {
      icon: Server,
      title: "Hardware-in-the-Loop (HWIL) / Software-in-the-Loop (SWIL)",
      description: "Real-time simulation and testing platforms"
    },
    {
      icon: Radar,
      title: "Defense EW, UAV, and Hypersonic Programs",
      description: "Advanced defense and next-gen systems"
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