import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 text-center">Testimonials</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-12 text-center leading-tight">What Our <span className="italic text-primary">Clients Say</span></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p className="text-gray-600 italic flex-grow mb-6">"{t.review}"</p>
              <div>
                <p className="font-bold text-secondary">{t.name}</p>
                <p className="text-primary text-sm font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
