import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[200] bg-secondary flex flex-col items-center justify-center">
      
      {/* LOADER CIRCLE */}
      <div className="relative mb-12">
        
        {/* Spinning ring */}
        <div className="w-40 h-40 border-[4px] border-primary/20 border-t-primary rounded-full animate-spin-slow"></div>

        {/* Center content (LOGO INSIDE) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.4)] animate-pulse overflow-hidden">
            
            <img
              src="/assets/logo1.png"
              alt="Fixers Mosaic Logo"
              className="w-12 h-12 object-contain"
            />

          </div>
        </div>

      </div>

      {/* TEXT */}
      <div className="text-center overflow-hidden">
        <h2 className="text-white text-3xl font-serif font-black tracking-[0.3em] uppercase animate-slide-up">
          THE FIXERS
        </h2>

        <h2
          className="text-primary text-3xl font-serif font-black tracking-[0.5em] uppercase animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          MOSAIC
        </h2>

        <p className="mt-8 text-white/40 text-[10px] uppercase tracking-[0.6em] font-bold animate-pulse">
          LASTING CHANGE
        </p>
      </div>

    </div>
  );
};