import { Target, Zap, Users, Shield, RefreshCw, Rocket } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Rocket,
      title: "Proven Aerospace Expertise ",
      subtitle: "Delivered verification solutions for top-tier aerospace primes."
    },
    {
      icon: Zap,
      title: "Compliance Focused ", 
      subtitle: "Full adherence to DO-254 and DAL-A/B standards."
    },
    {
      icon: Users,
      title: "Scalable Engagement",
      subtitle: "On-demand engineers or complete verification teams."
    },
    {
      icon: RefreshCw,
      title: "Advanced Automation",
      subtitle: "Regression and coverage closure with Jenkins and VManager."
    },
    {
      icon: Shield,
      title: "Risk Reduction",
      subtitle: "Comprehensive verification methodologies minimizing mission risk."
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Teamup Tech?</span>
            </h2>
          </div>

          <div className="space-y-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div 
                  key={index}
                  className="aerospace-card p-6 hover-lift slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center md:justify-start space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.subtitle}</p>
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

export default WhyChooseSection;