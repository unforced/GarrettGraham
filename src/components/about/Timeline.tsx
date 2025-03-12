
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "2008",
    title: "Spiritual Awakening",
    description: "Began journey into spirituality through personal transformation and recovery"
  },
  {
    year: "2011",
    title: "Tibetan Buddhist Studies",
    description: "Started formal training in Tibetan Buddhist practices and philosophy"
  },
  {
    year: "2013",
    title: "Lakota Spirituality",
    description: "Began learning from Lakota elders and participating in traditional ceremonies"
  },
  {
    year: "2015",
    title: "Master's in Counseling",
    description: "Completed Master's degree in Clinical Counseling with focus on holistic approaches"
  },
  {
    year: "2017",
    title: "Amazonian Shamanic Training",
    description: "Traveled to Peru to study with Shipibo healers and shamanic traditions"
  },
  {
    year: "2020",
    title: "Private Practice Launch",
    description: "Established private practice integrating various healing modalities"
  }
];

const Timeline = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal">
          <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium">
            My Path
          </span>
          <h2 className="text-stone-800 font-serif">Journey Through Time</h2>
          <p className="text-stone-600">
            Key milestones that have shaped my approach to healing and transformation
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-amber-200"></div>
          
          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex flex-col md:flex-row items-center reveal",
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "w-full md:w-1/2 p-6 md:p-10",
                  index % 2 !== 0 ? "md:text-right" : ""
                )}>
                  <span className="text-amber-500 font-bold text-xl">{milestone.year}</span>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-stone-800">{milestone.title}</h3>
                  <p className="text-stone-600">{milestone.description}</p>
                </div>
                
                <div className="mx-4 z-10 bg-amber-100 rounded-full p-4 my-4 md:my-0">
                  <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                </div>
                
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
