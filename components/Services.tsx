
import React from 'react';
import { SERVICES } from '../constants';

interface ServicesProps {
  onBookService: (title: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  const handleServiceClick = (service: typeof SERVICES[0]) => {
    if (service.id === 'car-hire') {
      const fleetSection = document.getElementById('fleet');
      if (fleetSection) {
        fleetSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onBookService(service.title);
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Excellence</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-6">World-Class Services</h3>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="reveal group relative bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer break-inside-avoid"
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => handleServiceClick(service)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* Primary Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110" 
                />
                {/* Hover Image */}
                <img 
                  src={service.hoverImage} 
                  alt={`${service.title} hover`} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-110" 
                />
                
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors"></div>
              </div>
              
              <div className="p-8">
                <div className="w-14 h-14 bg-primary text-secondary rounded-2xl flex items-center justify-center text-xl mb-6 shadow-lg shadow-primary/20 transition-transform group-hover:rotate-12 group-hover:scale-110">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h4 className="text-2xl font-bold text-secondary mb-3">{service.title}</h4>
                <p className="text-secondary/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-xs font-black uppercase tracking-widest transition-all">
                  {service.id === 'car-hire' ? 'View Available Fleet' : 'Book This Service'}
                  <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
