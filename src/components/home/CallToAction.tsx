
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section bg-stone-800 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-6 reveal">
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4">
            Begin Your Journey
          </span>
          
          <h2 className="text-white font-serif mb-6">
            Ready to Take the Next Step?
          </h2>
          
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            I invite you to connect with me for a consultation to discuss how my services can support your personal journey of healing and transformation.
          </p>
          
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Book a Consultation</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
