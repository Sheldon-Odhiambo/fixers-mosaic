
import React, { useState, useEffect } from 'react';
import { HERO_BACKGROUNDS } from '../constants';

interface HeroProps {
  onBookNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Container - Fixed to viewport */}
      <div className="hero-fixed-bg">
        {HERO_BACKGROUNDS.map((bg, index) => (
          <div 
            key={bg}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1500 ease-in-out ${index === currentBg ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url('${bg}')` }}
          ></div>
        ))}
        {/* Darkening Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full pt-32 pb-20 flex flex-col justify-between min-h-screen">
        <div className="pt-20">
          <div className="overflow-hidden mb-6">
            <span className="inline-block bg-white/10 text-white border border-white/20 px-5 py-2 rounded-full text-xs font-medium tracking-[0.2em] animate-slide-up backdrop-blur-sm">
              TRUSTED AFRICAN SAFARIS
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Experience the <br />
            <span className="text-primary italic">Soul</span> of Kenya
          </h1>

          <p className="text-white text-lg md:text-xl max-w-xl leading-relaxed font-light mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Strategically headquartered in Kitale, we offer premium transport solutions and bespoke safari adventures across Kenya, combining local expertise with comfort for every modern explorer.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <button 
              onClick={onBookNow}
              className="bg-primary text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-600 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
            >
              Start Your Adventure
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <a 
              href="#services"
              className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-white/20 transition-all duration-300 backdrop-blur-sm text-center flex items-center justify-center border border-white/20"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 flex ml-auto gap-4 bg-secondary/80 backdrop-blur-md p-4 rounded-xl border border-white/10 w-fit">
            {[
                { label: 'DESTINATIONS', value: '150+' },
                { label: 'HAPPY TRAVELERS', value: '2.5k' },
                { label: 'SUPPORT', value: '24/7' },
            ].map((stat) => (
                <div key={stat.label} className="text-white border-r border-white/20 last:border-0 pr-4 last:pr-0">
                    <div className="text-xl font-bold font-serif">{stat.value}</div>
                    <div className="text-[8px] tracking-widest text-white/60 font-bold">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
