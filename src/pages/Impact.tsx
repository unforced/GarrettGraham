
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import ImpactArea from "@/components/impact/ImpactArea";
import CallToAction from "@/components/home/CallToAction";

const impactAreas = [
  {
    title: "Supporting Indigenous Wisdom Keepers",
    description: "Given the traditions I've studied and the opportunities afforded to me over time, I choose to give back to Lakota elders and those working to preserve indigenous ways of life in North America. This support provides resources and hope to communities maintaining vital cultural practices.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Amazonian Tribal Communities",
    description: "I work directly with Shipibo and other Amazonian tribal peoples, providing resources that help sustain their community living and traditional practices. This support allows them to continue their deeply impactful work both within their communities and for those who come to learn from them.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Tibetan Buddhist Traditions",
    description: "I contribute to many Tibetan teachers and traditions I've had the privilege of studying with, helping further their important work of sharing these practices with the world.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Future Initiatives",
    description: "I am developing initiatives to support houseless and underprivileged communities with basic needs including food, clean water, and shelter. While this work is in its early stages, it represents a growing focus of my service mission.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

const Impact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=60')] bg-cover bg-center"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4 reveal">
              Giving Back
            </span>
            
            <h1 className="text-white font-serif font-bold mb-6 reveal stagger-1">
              Community Impact
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 reveal stagger-2">
              Supporting the traditions and communities that have shaped my practice
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal stagger-3">
              <a 
                href="#initiatives" 
                className="btn-primary flex items-center gap-2 min-w-[180px]"
              >
                <span>View Initiatives</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6 reveal">
            <h2 className="text-stone-800 font-serif">A Philosophy of Reciprocity</h2>
            <div className="space-y-4 text-stone-700">
              <p>
                Giving back is integral to my spiritual practice and professional work. Throughout my journey, I've been blessed with opportunities to study with elders and teachers who shared their wisdom generously. I believe in honoring these gifts through reciprocity.
              </p>
              <p>
                Through my professional work, I am able to extend these contributions. When you work with me, you participate in this cycle of giving, as a portion of all proceeds supports these initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Areas */}
      <section id="initiatives" className="section bg-beige-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal">
            <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium">
              Current Initiatives
            </span>
            <h2 className="text-stone-800 font-serif">Areas of Support</h2>
            <p className="text-stone-600">
              These are the communities and traditions I actively contribute to through my work.
            </p>
          </div>
          
          <div className="space-y-0">
            {impactAreas.map((area, index) => (
              <ImpactArea
                key={index}
                title={area.title}
                description={area.description}
                image={area.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </Layout>
  );
};

export default Impact;
