
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    year: "2009",
    title: "Personal Awakening",
    description: "Began personal healing journey through spiritual practice and recovery work"
  },
  {
    year: "2011",
    title: "Spiritual Studies",
    description: "Initiated studies in traditional Tibetan Buddhism and indigenous spiritual traditions"
  },
  {
    year: "2013",
    title: "Formal Education",
    description: "Started master's program in Clinical Counseling while continuing spiritual development"
  },
  {
    year: "2015",
    title: "Holistic Training",
    description: "Completed certifications in yoga, qigong, and energy healing modalities"
  },
  {
    year: "2017",
    title: "Advanced Studies",
    description: "Deepened practice through apprenticeship with Shipibo and Amazonian shamanic traditions"
  },
  {
    year: "2019",
    title: "Professional Practice",
    description: "Established formal counseling practice integrating multiple healing modalities"
  },
  {
    year: "2021",
    title: "Community Initiatives",
    description: "Began developing community support programs and giving back initiatives"
  },
  {
    year: "Present",
    title: "Ongoing Evolution",
    description: "Continuing to expand offerings and deepen practice while serving a growing community"
  }
];

const Timeline = () => {
  return (
    <section className="section bg-beige-100 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal">
          <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium">
            Professional Journey
          </span>
          <h2 className="text-stone-800 font-serif">Path of Development</h2>
          <p className="text-stone-600">
            Key milestones in my personal and professional evolution as a healer and guide.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200 rounded-full hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-center reveal"
              >
                {/* Year marker for mobile */}
                <div className="md:hidden w-full text-center mb-2">
                  <span className="inline-block px-4 py-1 bg-amber-500 text-white rounded-full text-sm font-semibold">
                    {event.year}
                  </span>
                </div>
                
                {/* Left content (odd index) */}
                <div className={cn(
                  "md:w-1/2 md:pr-12 space-y-2",
                  index % 2 === 1 ? "md:text-right" : "md:hidden"
                )}>
                  {index % 2 === 1 && (
                    <>
                      <h3 className="text-xl font-serif font-semibold text-stone-800">{event.title}</h3>
                      <p className="text-stone-600">{event.description}</p>
                    </>
                  )}
                </div>
                
                {/* Center marker */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold z-10 border-4 border-white">
                    {event.year}
                  </div>
                </div>
                
                {/* Right content (even index) */}
                <div className={cn(
                  "md:w-1/2 md:pl-12 space-y-2",
                  index % 2 === 0 ? "md:ml-auto" : "md:hidden"
                )}>
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-xl font-serif font-semibold text-stone-800">{event.title}</h3>
                      <p className="text-stone-600">{event.description}</p>
                    </>
                  )}
                </div>
                
                {/* Mobile content (displayed for both but hidden on desktop) */}
                <div className="md:hidden w-full space-y-2">
                  <h3 className="text-xl font-serif font-semibold text-stone-800">{event.title}</h3>
                  <p className="text-stone-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
