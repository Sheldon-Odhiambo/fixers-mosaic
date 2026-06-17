
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Fleet } from './components/Fleet';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Loader } from './components/Loader';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial loading
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2200);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    window.addEventListener('scroll', handleScroll);
    
    if (!isLoading) {
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }

    return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
        revealObserver.disconnect();
    };
  }, [isLoading]);

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsBookingOpen(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-transparent">
      <Navbar scrolled={scrolled} onBookNow={() => handleBookService('')} />
      <Breadcrumbs />
      
      <main className="relative z-10">
        <Hero onBookNow={() => handleBookService('')} />
        
        {/* Sections container with white/off-white background for visibility */}
        <div className="bg-white relative z-20">
          <div id="services" className="reveal">
            <Services onBookService={handleBookService} />
          </div>

          <div id="gallery" className="reveal">
            <Gallery />
          </div>

          <div id="testimonials" className="reveal">
            <Testimonials />
          </div>
          
          <div id="fleet" className="reveal">
            <Fleet onBookVehicle={handleBookService} />
          </div>
          
          <div id="about" className="reveal">
            <About />
          </div>
          
          <div id="contact" className="reveal">
            <Contact />
          </div>
          
          <div id="faq" className="reveal">
            <FAQ />
          </div>

          {/* Footer is placed here to ensure it's at the very end of the scrollable content */}
          <Footer />
        </div>
      </main>

      <WhatsAppButton />
      
      {isBookingOpen && (
        <BookingModal 
          selectedService={selectedService} 
          onClose={() => setIsBookingOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
