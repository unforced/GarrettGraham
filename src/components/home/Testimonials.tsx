
import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Working with Garrett was transformative. His unique approach combining traditional counseling with ceremony helped me access parts of myself I had long neglected. I feel more whole and present than ever before.",
    author: "Sarah J.",
    location: "Denver, Colorado",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: 2,
    quote: "After years of traditional therapy with limited results, Garrett's holistic approach was exactly what I needed. He created a safe space for deep healing while respecting my boundaries. I'm forever grateful for his guidance.",
    author: "Michael T.",
    location: "Portland, Oregon",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    id: 3,
    quote: "The ceremonial work I did with Garrett opened doors I didn't know existed. His careful preparation and integration support ensured the experience was not only profound but also practical in my everyday life.",
    author: "Elena R.",
    location: "Austin, Texas",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section bg-stone-100 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal">
          <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium">
            Client Stories
          </span>
          <h2 className="text-stone-800 font-serif">Transformative Experiences</h2>
          <p className="text-stone-600">
            Read about the journeys of those who have worked with me and the impact it's had on their lives.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 reveal">
            <svg
              className="absolute left-4 top-4 text-amber-200 opacity-50 w-16 h-16 md:w-24 md:h-24"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 9.5C9.5 11.5 7.5 13 7.5 13C7.5 13 9.5 14.5 9.5 16.5C9.5 18.5 7.5 20 5 20C2.5 20 0.5 18.5 0.5 16.5C0.5 14.5 2.5 13 2.5 13C2.5 13 0.5 11.5 0.5 9.5C0.5 7.5 2.5 6 5 6C7.5 6 9.5 7.5 9.5 9.5Z"
                fill="currentColor"
              />
              <path
                d="M23.5 9.5C23.5 11.5 21.5 13 21.5 13C21.5 13 23.5 14.5 23.5 16.5C23.5 18.5 21.5 20 19 20C16.5 20 14.5 18.5 14.5 16.5C14.5 14.5 16.5 13 16.5 13C16.5 13 14.5 11.5 14.5 9.5C14.5 7.5 16.5 6 19 6C21.5 6 23.5 7.5 23.5 9.5Z"
                fill="currentColor"
              />
            </svg>
            
            <div className="relative z-10">
              <div className="min-h-[200px]">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "transition-opacity duration-500 absolute w-full",
                      active === index ? "opacity-100 visible" : "opacity-0 invisible"
                    )}
                  >
                    <blockquote className="text-stone-800 text-xl md:text-2xl font-serif font-medium italic leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-stone-800 font-semibold">{testimonial.author}</p>
                        <p className="text-stone-500 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-12 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      active === index
                        ? "bg-amber-500 w-8"
                        : "bg-stone-300 hover:bg-stone-400"
                    )}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
