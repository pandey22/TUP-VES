import { Shield, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Teamup Tech</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <div className="slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Teamup Tech partners with aerospace leaders including Lockheed Martin, Collins Aerospace, Northrop Grumman, and NASA to deliver advanced verification solutions for complex electronic systems. Our engineers bring expertise in SystemVerilog, UVM, advanced EDA tools, and safety standards compliance.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">Expert Team</h3>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">Secure & Trusted</h3>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">Proven Results</h3>
                </div>
              </div>
            </div>

            {/* Stats/Visual */}
            <div className="slide-up">
              <div className="aerospace-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Trusted by Industry Leaders</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Boeing</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">NASA / JPL</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Lockheed Martin</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Blue Origin</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Raytheon</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;