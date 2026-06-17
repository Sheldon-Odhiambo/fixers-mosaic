
import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <img src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=600" alt="Safari" className="rounded-[3rem] shadow-2xl mt-12 hover:-translate-y-4 transition-transform duration-700" />
              <img src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=600" alt="Car" className="rounded-[3rem] shadow-2xl hover:translate-y-4 transition-transform duration-700" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">The Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">Elevating Kenyan <br /><span className="italic text-primary">Travel Experiences</span></h3>
            <p className="text-secondary/70 text-lg leading-relaxed mb-10 font-light">
              Founded in Nakuru, The Fixers Mosaic has set the standard for luxury transportation in the Rift Valley. We combine local expertise with world-class service to ensure every journey is safe, comfortable, and memorable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-map-marked-alt"></i>
                </div>
                <div>
                  <h5 className="font-bold text-secondary">Local Experts</h5>
                  <p className="text-secondary/60 text-sm">Drivers who know every hidden gem.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h5 className="font-bold text-secondary">Safety First</h5>
                  <p className="text-secondary/60 text-sm">Rigorous vehicle maintenance protocols.</p>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-4 text-secondary font-black uppercase tracking-[0.3em] group">
              About Us 
              <span className="w-12 h-[2px] bg-secondary group-hover:w-20 transition-all"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
