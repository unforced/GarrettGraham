
import { cn } from "@/lib/utils";
import React from "react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: React.ReactNode;
  image: string;
  reversed?: boolean;
  accent?: string;
  accentText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  reversed = false,
  accent = "bg-amber-500/10",
  accentText = "text-amber-700",
}) => {
  return (
    <section id={id} className="section bg-white">
      <div className="container-custom">
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal",
          reversed ? "lg:grid-flow-dense" : ""
        )}>
          <div className={cn("space-y-6", reversed ? "lg:col-start-2" : "")}>
            <span className={cn("inline-block px-3 py-1 rounded-full text-sm font-medium", accent, accentText)}>
              Specialized Offering
            </span>
            <h2 className="text-stone-800 font-serif">{title}</h2>
            <div className="space-y-4 text-stone-600">
              {description}
            </div>
            <div className="pt-4">
              <a href="#contact" className="btn-primary">Book a Consultation</a>
            </div>
          </div>
          
          <div className={cn(
            "relative h-[500px] rounded-xl overflow-hidden shadow-xl reveal stagger-1",
            reversed ? "lg:col-start-1" : ""
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

export default ServiceCard;
