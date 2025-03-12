
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section bg-texture bg-cover bg-center relative">
      <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-[2px]"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4 reveal">
            <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium">
              Begin Your Journey
            </span>
            <h2 className="text-white font-serif">Ready to Transform Your Life?</h2>
            <p className="text-white/80 text-lg">
              Take the first step towards healing, growth, and discovering your highest potential. Schedule a consultation today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal stagger-1">
            <a 
              href="#contact" 
              className="btn-primary flex items-center gap-2 min-w-[200px]"
            >
              <span>Book a Consultation</span>
              <ArrowRight size={18} />
            </a>
            
            <a 
              href="mailto:garrett@example.com" 
              className="btn-outline text-white border-white hover:bg-white/10 min-w-[200px]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
