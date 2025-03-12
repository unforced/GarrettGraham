
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 to-stone-900/80 backdrop-blur-sm"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-500 rounded-full text-sm font-medium mb-4 reveal">
            Transformative Healing & Personal Growth
          </span>
          
          <h1 className="text-white font-serif font-bold mb-6 reveal stagger-1">
            Discover Your Highest Potential Through Holistic Healing
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-8 reveal stagger-2">
            Welcome to a journey of transformation. Combining traditional wisdom with modern therapeutic approaches to help you achieve your highest potential.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal stagger-3">
            <Link 
              to="/services" 
              className="btn-primary flex items-center gap-2 min-w-[180px]"
            >
              <span>Explore Services</span>
              <ArrowRight size={18} />
            </Link>
            
            <Link 
              to="/about" 
              className="btn-outline text-white border-white hover:bg-white/10 min-w-[180px]"
            >
              Learn About Garrett
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a
          href="#introduction"
          aria-label="Scroll down"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white/60 hover:text-white hover:border-white transition-colors duration-300 animate-bounce"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
