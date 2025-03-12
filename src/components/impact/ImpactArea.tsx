
import { cn } from "@/lib/utils";

interface ImpactAreaProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ImpactArea = ({ title, description, image, index }: ImpactAreaProps) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16",
        index > 0 && "border-t border-stone-200"
      )}
    >
      <div className={cn(
        "space-y-6 reveal",
        index % 2 === 1 && "md:order-2"
      )}>
        <h3 className="text-2xl font-serif font-semibold text-stone-800">
          {title}
        </h3>
        
        <p className="text-stone-700 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className={cn(
        "reveal",
        index % 2 === 1 && "md:order-1"
      )}>
        <div className="rounded-xl overflow-hidden shadow-md">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover aspect-video"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ImpactArea;
