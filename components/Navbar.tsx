import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { NAV_ITEMS, Logo } from '../constants';

interface NavbarProps {
  scrolled: boolean;
  onBookNow: () => void;
}

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => {
  const variants = {
    top: {
      open: { rotate: 45, y: 7 },
      closed: { rotate: 0, y: 0 },
    },
    middle: {
      open: { opacity: 0 },
      closed: { opacity: 1 },
    },
    bottom: {
      open: { rotate: -45, y: -7 },
      closed: { rotate: 0, y: 0 },
    },
  };

  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        variants={variants.top}
        animate={isOpen ? 'open' : 'closed'}
      />
      <motion.line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        variants={variants.middle}
        animate={isOpen ? 'open' : 'closed'}
      />
      <motion.line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        variants={variants.bottom}
        animate={isOpen ? 'open' : 'closed'}
      />
    </motion.svg>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ scrolled, onBookNow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of NAV_ITEMS) {
        const element = document.querySelector(item.href);
        if (element instanceof HTMLElement) {
          if (
            element.offsetTop <= scrollPosition &&
            element.offsetTop + element.offsetHeight > scrollPosition
          ) {
            setActiveHash(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center">
        
        {/* LOGO (LEFT) */}
        <a href="#home" className="flex-shrink-0">
          <img
            src="/assets/logo1.png"
            alt="The Fixers Mosaic Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* NAV ITEMS (RIGHT) */}
        <div className="hidden lg:flex items-center justify-end flex-1 gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition-all hover:text-primary relative group ${
                activeHash === item.href ? 'text-primary' : 'text-secondary'
              }`}
              onClick={() => setActiveHash(item.href)}
            >
              {item.label}

              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                  activeHash === item.href
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}

          <button
            onClick={onBookNow}
            className="ml-4 bg-primary text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary/90 transition-all shadow-md"
          >
            BOOK NOW
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-secondary relative z-[70]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon isOpen={isOpen} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-secondary/98 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.85, 0, 0.15, 1)] 
        ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 px-6">
          
          {/* CLOSE BUTTON */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <span className="text-white text-xs font-medium tracking-widest">
              CLOSE
            </span>
            <button
              className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white"
              onClick={() => setIsOpen(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* MOBILE LINKS */}
          <div className="flex flex-col items-start w-full px-6">
            <h4 className="text-primary/70 text-xs font-bold tracking-[0.3em] uppercase mb-12">
              Explore Africa
            </h4>

            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white text-4xl font-serif font-bold tracking-tight hover:text-primary transition-all mb-6"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* BOOK BUTTON */}
          <button
            onClick={() => {
              setIsOpen(false);
              onBookNow();
            }}
            className="mt-8 bg-primary text-secondary w-full max-w-xs py-5 rounded-2xl text-lg font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </nav>
  );
};