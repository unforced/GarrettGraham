
import { cn } from "@/lib/utils";

const Introduction = () => {
  return (
    <section id="introduction" className="section bg-beige-100 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl relative z-10 reveal">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Garrett Graham portrait" 
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
            </div>
            <div className="absolute top-8 -right-8 w-3/4 h-3/4 bg-amber-500/20 rounded-2xl -z-10 reveal stagger-1"></div>
            <div className="absolute -bottom-8 -left-8 w-3/4 h-3/4 bg-terracotta-500/10 rounded-2xl -z-10 reveal stagger-2"></div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-3 reveal">
              <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium">
                About Garrett
              </span>
              <h2 className="text-stone-800 font-serif">A Holistic Approach to Healing and Growth</h2>
            </div>
            
            <div className="space-y-4 text-stone-700 reveal stagger-1">
              <p>
                Welcome to a journey of transformation. I'm Garrett Graham, combining traditional wisdom with modern therapeutic approaches to help you achieve your highest potential. Through counseling, sacred ceremony, and energetic technologies, I create pathways for deep healing and personal evolution.
              </p>
              <p>
                My approach draws from fifteen years of personal and professional experience, integrating various healing modalities including Gestalt therapy, traditional Tibetan Buddhism, Lakota spirituality, and Amazonian shamanism.
              </p>
              <p>
                It is my highest goal in working with you to help you achieve your best life and highest consciousness, bringing awareness into all that you do. My mission is to support you in developing happiness, thriving as a human being, and creating deep interpersonal meaning in your life.
              </p>
            </div>
            
            <div className="pt-2 reveal stagger-2">
              <a href="#services" className="btn-primary">
                Discover My Approach
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
