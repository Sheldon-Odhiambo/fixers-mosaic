
import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'Car Hire', message: '' });

  const handleWhatsAppContact = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello The Fixers Mosaic! 👋%0A%0AInquiry from:%0A👤 Name: ${formData.name}%0A📞 Phone: ${formData.phone}%0A🛠️ Service: ${formData.service}%0A💬 Message: ${formData.message}`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Connect</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-12">Get In Touch</h3>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <span className="block text-secondary/40 text-xs uppercase tracking-widest mb-1">Call Support</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-bold text-secondary hover:text-primary transition-colors">{CONTACT_INFO.phone} / {CONTACT_INFO.phone2}</a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <span className="block text-secondary/40 text-xs uppercase tracking-widest mb-1">Our HQ</span>
                  <p className="text-xl font-bold text-secondary">{CONTACT_INFO.location}, {CONTACT_INFO.poBox}</p>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.69634789547!2d34.99175373307527!3d1.0134440539121855!2m3!1f0!2f0!3m0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178229b11e737c0f%3A0x8e578c93540c1157!2sKitale!5e0!3m2!1sen!2ske!4v1718600000000!5m2!1sen!2ske" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
            <form onSubmit={handleWhatsAppContact} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required placeholder="Name" className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary" onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required placeholder="Phone" className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary" onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <select className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary appearance-none" onChange={e => setFormData({...formData, service: e.target.value})}>
                <option>Car Hire</option>
                <option>Game Drives</option>
                <option>Executive Rides</option>
                <option>Hotel Booking</option>
              </select>
              <textarea required rows={4} placeholder="How can we help?" className="w-full bg-slate-50 border-0 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary resize-none" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              <button type="submit" className="w-full bg-[#25D366] text-white font-bold uppercase tracking-widest py-5 rounded-2xl hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3">
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
