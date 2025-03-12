
import { cn } from "@/lib/utils";

interface ImpactAreaProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ImpactArea = ({ title, description, image, index }: ImpactAreaProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <section className={cn(
      "py-12 first:pt-0 last:pb-0 reveal",
      isEven ? "bg-beige-50" : "bg-white"
    )}>
      <div className="container-custom">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
          !isEven && "lg:grid-flow-dense"
        )}>
          <div className={cn("space-y-6", !isEven && "lg:col-start-2")}>
            <h3 className="text-xl lg:text-2xl font-serif font-semibold text-stone-800">{title}</h3>
            <p className="text-stone-600">{description}</p>
          </div>
          
          <div className={cn(
            "relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl",
            !isEven && "lg:col-start-1"
          )}>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactArea;
