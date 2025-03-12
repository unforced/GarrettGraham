
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Story from "@/components/about/Story";
import Timeline from "@/components/about/Timeline";
import CallToAction from "@/components/home/CallToAction";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=60')] bg-cover bg-center"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4 reveal">
              About Me
            </span>
            
            <h1 className="text-white font-serif font-bold mb-6 reveal stagger-1">
              My Path to Healing
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 reveal stagger-2">
              From personal transformation to helping others discover their highest potential
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal stagger-3">
              <Link 
                to="/services" 
                className="btn-primary flex items-center gap-2 min-w-[180px]"
              >
                <span>Explore Services</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Story />
      <Timeline />
      <CallToAction />
    </Layout>
  );
};

export default About;
