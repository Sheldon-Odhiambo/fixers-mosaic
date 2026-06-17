
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I book a safari?",
    answer: "You can book a safari by clicking the 'Book Now' button, selecting your preferred package, or contacting us directly via WhatsApp or email with your travel dates and preferences."
  },
  {
    question: "What is included in the car hire service?",
    answer: "Our car hire service includes a well-maintained vehicle, a professional driver-guide, fuel for specified routes, and comprehensive insurance cover."
  },
  {
    question: "Do you offer tailored safaris?",
    answer: "Yes, we specialize in tailor-made safari experiences. We work closely with you to design a personalized itinerary that aligns with your interests, budget, and travel goals."
  },
  {
    question: "What are your payment terms?",
    answer: "A deposit is required to confirm your booking, with the balance payable prior to the start of your safari or car rental period. We accept various secure payment methods."
  }
];

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-6 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-secondary font-bold text-lg">{item.question}</span>
        <i className={`fa-solid fa-chevron-down text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-600 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 text-center">FAQ</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-12 text-center leading-tight">Commonly Asked <span className="italic text-primary">Questions</span></h3>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {faqData.map((item, index) => (
            <AccordionItem key={index} item={item} />
            ))}
        </div>
      </div>
    </section>
  );
};
