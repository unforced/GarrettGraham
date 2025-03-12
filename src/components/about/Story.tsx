
import { cn } from "@/lib/utils";

const Story = () => {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal">
          <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium">
            My Journey
          </span>
          <h2 className="text-stone-800 font-serif">The Path to Healing</h2>
          <p className="text-stone-600">
            How personal transformation led to a life dedicated to helping others find their own healing path.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 order-2 lg:order-1 reveal">
            <p className="text-stone-700 leading-relaxed">
              My name is Garrett Graham. I came to this healing path 15 years ago through an immense amount of personal suffering, which manifested as addiction, depression, and suicidality. After a profound moment of prayer, I was guided onto a spiritual path beyond anything I could have imagined at the time.
            </p>
            
            <p className="text-stone-700 leading-relaxed">
              Since then, I have dedicated myself to deep introspective work through the Twelve Steps, while studying traditional Tibetan Buddhism, Lakota spirituality, Shipibo and Amazonian shamanism. Having grown up in the church, I've also revolutionized my relationship with Christ in my adult life.
            </p>
            
            <p className="text-stone-700 leading-relaxed">
              Over the past twelve years following my own healing journey, I've studied numerous modalities to facilitate healing on both collective and individual levels. My holistic approach includes training in personal fitness, yoga, qigong, and various energy healing techniques. I hold a master's degree in clinical counseling alongside many specialized certifications.
            </p>
            
            <p className="text-stone-700 leading-relaxed">
              It is my highest goal in working with you to help you achieve your best life and highest consciousness, bringing awareness into all that you do. My mission is to support you in developing happiness, thriving as a human being, and creating deep interpersonal meaning in your life.
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl relative z-10 reveal">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Garrett Graham in nature" 
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
            </div>
            <div className="absolute top-8 -left-8 w-3/4 h-3/4 bg-amber-500/20 rounded-2xl -z-10 reveal stagger-1"></div>
            <div className="absolute -bottom-8 -right-8 w-3/4 h-3/4 bg-terracotta-500/10 rounded-2xl -z-10 reveal stagger-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
