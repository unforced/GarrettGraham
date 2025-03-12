
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/services/ServiceCard";
import CallToAction from "@/components/home/CallToAction";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=60')] bg-cover bg-center"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4 reveal">
              My Offerings
            </span>
            
            <h1 className="text-white font-serif font-bold mb-6 reveal stagger-1">
              Services For Your Journey
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 reveal stagger-2">
              Holistic approaches to support your healing, growth, and transformation
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal stagger-3">
              <a 
                href="#contact" 
                className="btn-primary flex items-center gap-2 min-w-[180px]"
              >
                <span>Book Consultation</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <ServiceCard
        id="counseling"
        title="Counseling Services"
        description={
          <>
            <p>
              As a Gestalt therapist, I work primarily with present moment awareness. Rather than extensively analyzing past events, we focus on how your history manifests in your current experience. This approach allows for immediate, transformative insights and lasting change.
            </p>
            <p>
              In our sessions, we will work together to increase your awareness of thought patterns, emotional responses, and physical sensations. Through this awareness, you gain choice and freedom to respond differently to life's challenges.
            </p>
            <p>
              My counseling approach is holistic, addressing the mental, emotional, physical, and spiritual dimensions of wellbeing. Whether you're facing specific challenges or seeking deeper self-understanding, I provide a safe, non-judgmental space for exploration and growth.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800&h=600"
        accent="bg-amber-500/10"
        accentText="text-amber-700"
      />
      
      <ServiceCard
        id="ceremonies"
        title="Ceremonial Offerings"
        description={
          <>
            <p>
              My ceremonial work draws from diverse traditions and lineages, including training with a Bolivian shaman, current lineage in Shipibo Amazonian shamanism, and the Lakota way.
            </p>
            <p>
              I create ceremonies by establishing a tight-knit container that honors these traditions while making space for individual expression. Safety—physical, emotional, and spiritual—remains my highest priority in all ceremonial work.
            </p>
            <p>
              These sacred gatherings incorporate song, silence, mantra, and opportunities for participants to express themselves through voice and instrument. Ceremonies provide a pathway to know yourself more deeply on personal, interpersonal, and transpersonal levels, often catalyzing life-changing insights and transformation.
            </p>
            <p>
              I work extensively with preparation and integration to ensure you receive the greatest benefit from these experiences, supporting you before, during, and after our ceremonial work together.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800&h=600"
        reversed={true}
        accent="bg-terracotta-500/10"
        accentText="text-terracotta-700"
      />
      
      <ServiceCard
        id="technologies"
        title="Sacred Technologies"
        description={
          <>
            <p>
              Part of my mission involves gathering sacred substances from around the world and incorporating them into practical solutions that help people raise their vibration and create positive change personally and globally.
            </p>
            <p>
              These include blessed substances from highly realized beings and sacred places worldwide. I incorporate these materials into:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Blessing waters that can be used as sprays for protection and energetic cleansing</li>
              <li>Waters for offering at personal altars and sacred spaces</li>
              <li>Pyramids and organite objects that serve as personal energetic tools for protection and transformation</li>
            </ul>
            <p>
              Each creation is made with intention and deep respect for the traditions from which these practices emerge.
            </p>
          </>
        }
        image="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=600"
        accent="bg-stone-500/10"
        accentText="text-stone-700"
      />
      
      <CallToAction />
    </Layout>
  );
};

export default Services;
