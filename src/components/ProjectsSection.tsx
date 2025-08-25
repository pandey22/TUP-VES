import { useState } from "react";
import { Building, Rocket, Shield, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ProjectsSection = () => {
  const projects = [
    {
      icon: Plane,
      client: "Lockheed Martin",
      project: "DO-254 Verification for Avionics FPGA",
      description: "Delivered UVM-based verification for safety-critical FPGA subsystems",
      fullDetails: {
        problem: "Lockheed Martin needed a DO-254 compliant verification strategy for avionics FPGA subsystems with strict DAL-A classification.",
        solution: "Developed reusable UVM environments, implemented functional and assertion-based coverage, and automated regressions using Jenkins. Ensured compliance with DO-254 by delivering traceable test plans and coverage reports.",
        impact: "Reduced certification timelines, improved verification quality, and minimized risk of integration failures.",
        tools: "SystemVerilog, UVM, QuestaSim, Jenkins, DO-254 standards"
      }
    },
    {
      icon: Shield,
      client: "Collins Aerospace",
      project: "Coverage-Driven Verification for Flight Control ASI ",
      description: "Implemented high-coverage verification strategty for complex ASIC design",
      fullDetails: {
        problem: "Collins Aerospace faced verification bottlenecks in a large ASIC design used in flight control systems, risking project delays.",
        solution: "Built layered UVM environments with randomization strategies, integrated coverage-driven verification, and performed gate-level simulations for sign-off. Automated regressions using VManager and scripting.",
        impact: "Improved functional coverage by 30%, reducing risk of late-stage defects and ensuring project delivery on schedule.",
        tools: "UVM, SystemVerilog, Synopsys VCS, VManager, Python."
      }
    },
    {
      icon: Shield,
      client: "Northrop Grumman ",
      project: "Multi-Clock CDC and Power Verification",
      description: "Designed verification strategies for complex SoC with multiple power domains.",
      fullDetails: {
        problem:"Lockheed Martin needed engineering expertise for mission sequencing, hardware-in-the-loop testing (HWIL), and embedded software development across multiple defense programs, including the F-35 and missile control subsystems.",
        solution:"The client required robust verification for clock domain crossings (CDC) and power integrity on a multi-clock SoC for aerospace systems.",
        impact: "Deployed static and dynamic CDC verification, implemented power-aware simulations, and validated low-power modes under functional conditions using UPF methodologies",
        tools: "Questa CDC, Synopsys VCS, Verdi, UPF, Python."
      }
    },
    {
      icon: Rocket,
      client: "NASA JPL",
      project: "FPGA Verification for Deep-Space Communication Systems",
      description: "Delivered UVM-based verification for FPGA modules used in space communication.  ",
      fullDetails: {
        problem: "NASA JPL needed a robust verification environment for FPGA logic handling deep-space communication protocols, with strict compliance and reliability requirements.",
        solution: "Built UVM testbenches with protocol-specific checkers, integrated functional coverage, and executed extensive regression campaigns. Developed sign-off documentation to meet mission requirements",
        impact: "Improved FPGA reliability for space missions, enabling fault-free operation under extreme environmental conditions.",
        tools: "UVM, SystemVerilog, QuestaSim, Jenkins, DO-254 compliance."
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies & <span className="gradient-text">Outcomes Delivered</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="aerospace-card p-8 hover-lift slide-up">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{project.client}</h3>
                      <h4 className="text-lg font-semibold mb-3">{project.project}</h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            Read Full Case Study
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold gradient-text">
                              {project.client} - {project.project}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6 mt-6">
                            <div>
                              <h4 className="text-lg font-semibold text-primary mb-2">Problem</h4>
                              <p className="text-muted-foreground leading-relaxed">{project.fullDetails.problem}</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-primary mb-2">Solution</h4>
                              <p className="text-muted-foreground leading-relaxed">{project.fullDetails.solution}</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-primary mb-2">Impact</h4>
                              <p className="text-muted-foreground leading-relaxed">{project.fullDetails.impact}</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-primary mb-2">Tools & Technologies</h4>
                              <p className="text-muted-foreground leading-relaxed">{project.fullDetails.tools}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
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

export default ProjectsSection;