import { Code, Settings, Monitor, Shield } from "lucide-react";

const TechStackSection = () => {
  const techStacks = [
    {
      icon: Code,
      title: "Verification Languages & Frameworks",
      technologies: [
        "SystemVerilog",
        "Verilog", 
        "VHDL",
        "UVM",
        "OVM",
        
      ]
    },
    {
      icon: Settings,
      title: "EDA Tools",
      technologies: [
        "Cadence", 
        "Xcelium", 
        "Mentor", 
        "QuestaSim", 
        "Synopsys",
        "VCS, Verdi"
        
      ]
    },
    {
      icon: Monitor,
      title: "Compliance & Safety Standards",
      technologies: [
        "DO-254",
        "DAL-A/B",
        "FAA"
      ]
    },
    {
      icon: Shield,
      title: "Automation & Regression",
      technologies: [
        "Jenkins",
        "Python",
        "VManager",
      ]
    },
     {
      icon: Settings,
      title: "Bus & Protocol Expertise",
      technologies: [
       "AMBA (AXI/APB)", 
       "PCIe",
        "Ethernet",
        "DDR",
         "MIL-1553B"
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technology Stack & <span className="gradient-text">Tools</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {techStacks.map((stack, index) => {
              const IconComponent = stack.icon;
              return (
                <div 
                  key={index}
                  className="aerospace-card p-6 hover-lift slide-up text-center h-full"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{stack.title}</h3>
                  </div>

                  {/* Technologies List */}
                  <div className="space-y-3 text-sm">
                    {stack.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="text-muted-foreground leading-relaxed"
                      >
                        {tech}
                      </div>
                    ))}
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

export default TechStackSection;