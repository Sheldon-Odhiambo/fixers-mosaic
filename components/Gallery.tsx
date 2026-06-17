import React from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 text-center">Our Gallery</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-12 text-center leading-tight">Moments of <span className="italic text-primary">Experience</span></h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {GALLERY_IMAGES.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-xl ${
                index === 0 ? 'col-span-2 row-span-2' : 
                index === 3 ? 'col-span-2' : ''
              }`}
            >
              <img src={src} alt={`Experience ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
