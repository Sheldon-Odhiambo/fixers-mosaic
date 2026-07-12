
import React from 'react';
import { Service, Vehicle, NavItem } from './types';

export const CONTACT_INFO = {
  phone: '+254 724 778 099',
  phone2: '+257 372 48 099',
  whatsapp: '254724778099',
  location: 'Watamu opposite Hemingways',
  tiktok: 'https://tiktok.com/@thefixersmosaic',
  email: 'info@thefixersmosaic.com'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'tours-safaris',
    title: 'Tours & Safaris',
    description: 'Breathtaking wildlife encounters and custom safari adventures in Kenya’s finest destinations.',
    icon: 'fa-tree',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    hoverImage: '/assets/safarihiace.jpeg'
  },
  {
    id: 'transfers',
    title: 'Transfers',
    description: 'Seamless, punctual airport and hotel transfer services designed for stress-free travel.',
    icon: 'fa-plane-arrival',
    image: 'assets/airport.jpg',
    hoverImage: '/assets/airport.jpg'
  },
  {
    id: 'car-hire',
    title: 'Professional Car Hire',
    description: 'Premium, well-maintained vehicle rentals for city trips, business, or rugged adventures.',
    icon: 'fa-car-side',
    image: '/assets/service2.jpeg',
    hoverImage: '/assets/service2.jpeg',
  },
  {
    id: 'chauffeur-services',
    title: 'Drivers for Hire',
    description: 'Professional, experienced driver-guides to ensure safety and comfort for your journey.',
    icon: 'fa-user-tie',
    image: '/assets/drivers.jpg',
    hoverImage: '/assets/drivers.jpg'
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel',
    description: 'Seamless professional transportation and logistics for your business events and team building.',
    icon: 'fa-briefcase',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'executive-rides',
    title: 'Executive Rides',
    description: 'First-class luxury transportation for high-profile clients and special occasions.',
    icon: 'fa-gem',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
  }
];


export const FLEET: Vehicle[] = [
  {
    id: 'safari-cruiser',
    name: 'Land Cruiser V8',
    type: 'Luxury 4x4',
    capacity: '7-9 Pax',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'executive-van',
    name: 'Safari Hiace',
    type: 'Tour Van',
    capacity: '8-10 Pax',
    image: 'assets/safarihiace.jpeg'
  },
  {
    id: 'business-sedan',
    name: 'Executive Sedan',
    type: 'Chauffeured',
    capacity: '4 Pax',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800'
  },
  // {
  //   id: 'adventure-prado',
  //   name: 'Toyota Prado',
  //   type: 'Premium SUV',
  //   capacity: '5 Pax',
  //   image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800'
  // }
];

export const TESTIMONIALS = [
  {
    name: 'Sero Mvuamba',
    role: 'Traveler',
    review: 'Had an amazing experience with the safari package! Everything was perfectly organized.',
    rating: 5
  },
  {
    name: 'Okono Olongo',
    role: 'Business Traveler',
    review: 'Professional drivers and excellent vehicles. Highly recommended for business transfers.',
    rating: 5
  },
  {
    name: 'Alice Mandela',
    role: 'Tourist',
    review: 'The tailored itinerary was exactly what we needed. Thanks to the team for a great trip.',
    rating: 4
  }
];

export const GALLERY_IMAGES = [
   '/assets/Gallery1.jpeg',
  '/assets/home2.jpeg',
  '/assets/Gallery2.jpeg',
  '/assets/home4.jpeg',
  '/assets/Gallery3.jpeg',

];

export const HERO_BACKGROUNDS = [
  '/assets/home1.jpeg',
  '/assets/home2.jpeg',
  '/assets/home3.jpeg',
  '/assets/home4.jpeg',
  '/assets/home5.jpeg',


  
];

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="/images/logo-removebg-preview.png"
      alt="The Fixers Mosaic Logo"
      className="h-12 w-auto object-contain"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = 'none';
        (e.currentTarget.parentElement as HTMLElement).innerHTML += `
          <div class="flex flex-col leading-none">
            <span class="text-primary font-serif font-black text-xl tracking-tighter">THE FIXERS</span>
            <span class="text-secondary font-serif font-bold text-lg tracking-widest">MOSAIC</span>
          </div>
        `;
      }}
    />
  </div>
);
