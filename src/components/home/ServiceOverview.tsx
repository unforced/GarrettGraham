
import { Clock, Heart, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Counseling Services",
    description: "Experience present-moment awareness through Gestalt therapy, focusing on how your history manifests in your current experience rather than extensive analysis of the past.",
    icon: Heart,
    color: "bg-amber-500/10 text-amber-600",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600&h=400",
    link: "/services#counseling"
  },
  {
    id: 2,
    title: "Ceremonial Offerings",
    description: "Participate in sacred ceremonies drawing from diverse traditions including Shipibo Amazonian shamanism and Lakota way, created with safety and respect as the highest priority.",
    icon: Landmark,
    color: "bg-terracotta-500/10 text-terracotta-600",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=600&h=400",
    link: "/services#ceremonies"
  },
  {
    id: 3,
    title: "Sacred Technologies",
    description: "Access sacred substances from around the world, incorporated into practical solutions like blessing waters and energetic tools that help raise your vibration and create positive change.",
    icon: Clock,
    color: "bg-stone-500/10 text-stone-600",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600&h=400",
    link: "/services#technologies"
  }
];

const ServiceOverview = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal">
          <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium">
            Services Offered
          </span>
          <h2 className="text-stone-800 font-serif">Holistic Pathways to Transformation</h2>
          <p className="text-stone-600">
            Discover the various modalities I offer to support your healing journey and personal evolution, each designed to address different aspects of wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-lg border border-stone-100 card-hover reveal",
                index === 1 ? "stagger-1" : index === 2 ? "stagger-2" : ""
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", service.color)}>
                  <service.icon size={20} />
                </div>
                
                <h3 className="text-xl font-serif font-semibold mb-3 text-stone-800">
                  {service.title}
                </h3>
                
                <p className="text-stone-600 mb-6">
                  {service.description}
                </p>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                >
                  <span>Learn more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 reveal">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
