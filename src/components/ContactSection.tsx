import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Ensure <span className="gradient-text">Verification Compliance </span>
                For Your Aerospace Programs? 
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Partner with Teamup Tech for DO-254-driven verification expertise trusted by aerospace leaders.
            </p>
            
            <div className="flex justify-center items-center">
              <a 
                href="mailto:engage@teamuptech.com"
                className="flex items-center text-primary hover:text-primary/80 transition-colors text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                engage@teamuptech.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;