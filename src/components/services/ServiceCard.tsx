
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  id: string;
  title: string;
  description: React.ReactNode;
  image: string;
  reversed?: boolean;
  accent: string;
  accentText: string;
}

const ServiceCard = ({ 
  id, 
  title, 
  description, 
  image, 
  reversed = false,
  accent,
  accentText
}: ServiceCardProps) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-24 overflow-hidden",
        reversed ? "bg-beige-100" : "bg-white"
      )}
    >
      <div className="container-custom">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
          reversed && "lg:grid-flow-dense"
        )}>
          <div className={cn(
            "space-y-6 reveal",
            reversed && "lg:col-start-2"
          )}>
            <div className="space-y-3">
              <span className={cn(
                "inline-block px-3 py-1 rounded-full text-sm font-medium",
                accent, accentText
              )}>
                {title}
              </span>
              <h2 className="text-stone-800 font-serif">
                {title}
              </h2>
            </div>
            
            <div className="space-y-4 text-stone-700">
              {description}
            </div>
          </div>
          
          <div className={cn(
            "relative",
            !reversed && "lg:col-start-2"
          )}>
            <div className="rounded-2xl overflow-hidden shadow-xl relative z-10 reveal">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className={cn(
              "absolute top-8 w-3/4 h-3/4 rounded-2xl -z-10 reveal stagger-1",
              reversed ? "-right-8 bg-terracotta-500/10" : "-left-8 bg-amber-500/20"
            )}></div>
            <div className={cn(
              "absolute -bottom-8 w-3/4 h-3/4 rounded-2xl -z-10 reveal stagger-2",
              reversed ? "-left-8 bg-amber-500/20" : "-right-8 bg-terracotta-500/10"
            )}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
