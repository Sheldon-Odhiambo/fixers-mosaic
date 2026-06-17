import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<string>('Home');

  useEffect(() => {
    const handleScroll = () => {
      // Very simple detection of active section.
      const sections = ['services', 'gallery', 'testimonials', 'fleet', 'about', 'contact', 'faq'];
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSegment(id.charAt(0).toUpperCase() + id.slice(1));
            return;
          }
        }
      }
      setActiveSegment('Home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (activeSegment === 'Home') return null;

  return (
    <nav className="fixed top-[72px] left-0 right-0 z-30 bg-white/80 backdrop-blur-sm border-b border-gray-100 py-2 px-6">
      <div className="max-w-7xl mx-auto flex items-center text-sm text-gray-500">
        <a href="/" className="hover:text-primary transition-colors">Home</a>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-secondary font-medium">{activeSegment}</span>
      </div>
    </nav>
  );
};
