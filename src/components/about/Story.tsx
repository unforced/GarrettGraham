
import { cn } from "@/lib/utils";

const Story = () => {
  return (
    <section className="section bg-beige-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 reveal">
            <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium">
              My Journey
            </span>
            <h2 className="text-stone-800 font-serif">A Path of Transformation</h2>
            <div className="space-y-4 text-stone-600">
              <p>
                My name is Garrett Graham. I came to this healing path 15 years ago through an immense amount of personal suffering, which manifested as addiction, depression, and suicidality. After a profound moment of prayer, I was guided onto a spiritual path beyond anything I could have imagined at the time.
              </p>
              <p>
                Since then, I have dedicated myself to deep introspective work through the Twelve Steps, while studying traditional Tibetan Buddhism, Lakota spirituality, Shipibo and Amazonian shamanism. Having grown up in the church, I've also revolutionized my relationship with Christ in my adult life.
              </p>
              <p>
                Over the past twelve years following my own healing journey, I've studied numerous modalities to facilitate healing on both collective and individual levels. My holistic approach includes training in personal fitness, yoga, qigong, and various energy healing techniques. I hold a master's degree in clinical counseling alongside many specialized certifications.
              </p>
            </div>
          </div>
          
          <div className={cn("relative h-[500px] rounded-xl overflow-hidden shadow-xl reveal stagger-1")}>
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Garrett Graham spiritual journey" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
