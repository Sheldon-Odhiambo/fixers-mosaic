
import React, { useState } from 'react';
import { CONTACT_INFO, SERVICES, FLEET } from '../constants';

interface BookingModalProps {
  selectedService: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ selectedService, onClose }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', pax: '', details: '' });

  const detail = SERVICES.find(s => s.title === selectedService) || FLEET.find(f => `Vehicle Hire: ${f.name}` === selectedService);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Goodmorning Africa! 👋%0A%0AI want to book: *${selectedService || 'General Trip'}*%0A%0A*Booking Details:*%0A👤 Name: ${formData.name}%0A📞 Phone: ${formData.phone}%0A📅 Date: ${formData.date}%0A👥 Passengers: ${formData.pax}%0A📝 Details: ${formData.details || 'No additional details provided.'}`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-secondary/95 backdrop-blur-xl animate-fade-in" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-scale-in flex flex-col md:flex-row max-h-[95vh] lg:max-h-[90vh]">
        
        {/* Visual Sidebar */}
        <div className="md:w-5/12 bg-secondary relative overflow-hidden min-h-[180px] md:min-h-full">
          {detail && (
            <img src={detail.image} alt={selectedService} className="absolute inset-0 w-full h-full object-cover opacity-40 scale-110" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <span className="inline-block bg-primary/20 border border-primary/30 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              Premium Reservation
            </span>
            <h4 className="text-3xl font-serif mb-3 leading-tight uppercase">{selectedService || 'Adventure Awaits'}</h4>
            <p className="text-white/50 text-xs font-light leading-relaxed">
              Your request will be prioritized and handled by our senior travel consultants for a seamless experience.
            </p>
          </div>
        </div>

        {/* Form Area */}
        <div className="md:w-7/12 p-8 md:p-14 overflow-y-auto">
          <button 
            className="absolute top-8 right-8 text-secondary/20 hover:text-secondary transition-colors" 
            onClick={onClose}
            aria-label="Close Modal"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-secondary mb-2">Secure Your Booking</h3>
            <p className="text-secondary/40 text-[10px] font-bold uppercase tracking-[0.2em]">Verified WhatsApp Direct Channel</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60 ml-1">Full Name</label>
                <input 
                  required 
                  placeholder="e.g. John Doe" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-sm" 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60 ml-1">Phone Number</label>
                <input 
                  required 
                  type="tel"
                  placeholder="+254..." 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-sm" 
                  onChange={e => setFormData({...formData, phone: e.target.value})} 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60 ml-1">Date of Travel</label>
                <input 
                  required 
                  type="date" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-sm" 
                  onChange={e => setFormData({...formData, date: e.target.value})} 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60 ml-1">No. of Guests</label>
                <input 
                  required 
                  type="number" 
                  placeholder="Count" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-sm" 
                  onChange={e => setFormData({...formData, pax: e.target.value})} 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-secondary/60 ml-1">Additional Details</label>
              <textarea 
                placeholder="Share any specific requirements or itinerary preferences..." 
                rows={3} 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-sm resize-none" 
                onChange={e => setFormData({...formData, details: e.target.value})}
              ></textarea>
            </div>
            
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-secondary text-white font-black uppercase tracking-[0.3em] py-5 rounded-2xl hover:bg-primary hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-4 shadow-2xl shadow-secondary/20"
              >
                <i className="fa-brands fa-whatsapp text-2xl text-[#25D366]"></i>
                Confirm via WhatsApp
              </button>
              <p className="text-center text-[9px] text-secondary/30 uppercase font-bold mt-6 tracking-widest">
                Safe & Secure Communication Powered by Goodmorning Africa
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
