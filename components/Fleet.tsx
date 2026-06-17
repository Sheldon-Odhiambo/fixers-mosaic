
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { FLEET } from '../constants';

interface FleetProps {
  onBookVehicle: (name: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onBookVehicle }) => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="fleet" ref={sectionRef} className="py-24 bg-secondary scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-xl">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Real-Time Fleet</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Pristine Comfort.</h3>
            <p className="text-white/50 text-lg">
              Explore what we have in stock today. From high-capacity tour vans to executive luxury sedans, every vehicle is mission-ready for your Kenyan journey.
            </p>
          </div>
          <div className="hidden md:block w-40 h-[1px] bg-primary/30"></div>
        </motion.div>

        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {FLEET.map((item, idx) => {
            const parallaxOffset = (scrollY * 0.08) % 40; 

            return (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group bg-white/[0.03] rounded-[2.5rem] overflow-hidden border border-white/5 hover:bg-white/[0.07] transition-all duration-500 break-inside-avoid"
              >
                <div className="aspect-[16/9] parallax-container">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="parallax-img group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                    style={{ 
                      transform: `translateY(${parallaxOffset}px) scale(1.1)` 
                    }}
                  />
                  {/* Foreground overlay content */}
                  <div className="absolute top-6 left-6 bg-primary text-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-10 shadow-lg">
                    {item.type}
                  </div>
                  <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-secondary/80 backdrop-blur-md px-3 py-1.5 rounded-full text-white/80 text-[10px] uppercase font-bold border border-white/10 z-10 shadow-lg">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available Now
                  </div>
                </div>
                <div className="p-8 md:p-10 relative z-20">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-3xl font-serif text-white">{item.name}</h4>
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <i className="fa-solid fa-user-group text-sm"></i>
                      <span className="text-white/60 text-sm">{item.capacity}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => onBookVehicle(`Vehicle Hire: ${item.name}`)}
                    className="w-full py-3 bg-primary text-secondary font-bold uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-secondary hover:scale-[1.01] active:scale-95 transition-all duration-300 shadow-lg"
                  >
                    Reserve
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
