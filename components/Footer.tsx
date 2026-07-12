import React from 'react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* LOGO SECTION */}
          <div>
            <img
              src="/assets/logo1.png"
              alt="The Fixers Mosaic Logo"
              className="mb-8 h-14 w-auto object-contain"
            />

            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              Providing premium transportation and unforgettable tourism experiences across Kenya. Quality and reliability in every mile.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href={CONTACT_INFO.tiktok} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-all">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-8">
              Quick Links
            </h4>

            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/60 text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all"></span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-8">
              Contact Info
            </h4>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <i className="fa-solid fa-phone text-primary"></i>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-white/60 text-sm hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone} / {CONTACT_INFO.phone2}
                </a>
              </li>

              <li className="flex gap-4">
                <i className="fa-solid fa-envelope text-primary"></i>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/60 text-sm hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>

              <li className="flex gap-4 text-white/60 text-sm">
                <i className="fa-solid fa-location-dot text-primary"></i>
                {CONTACT_INFO.location}, {CONTACT_INFO.poBox}
              </li>
            </ul>
          </div>

          {/* LOCATION IMAGE */}
          <div>
            {/* <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-8">
              Our Location
            </h4> */}

            <div className="rounded-2xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 h-32">
              <img
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=400"
                alt="Nakuru"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} The Fixers Mosaic
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-white/30 text-[10px] uppercase tracking-widest hover:text-white transition-colors font-bold"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-white/30 text-[10px] uppercase tracking-widest hover:text-white transition-colors font-bold"
            >
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};