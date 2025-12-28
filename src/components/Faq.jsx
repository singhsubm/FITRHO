import React, { useState } from 'react';
import './Hero.css'; // Reusing text styles

const faqData = [
  {
    question: "What makes FITRHO different from other fitness brands?",
    answer: "FITRHO isn't just about supplements; it's about a holistic ecosystem. We combine premium, lab-tested nutrition with personalized coaching and AI-driven workout plans, ensuring you have every tool needed to reach your peak potential."
  },
  {
    question: "Are your supplements suitable for beginners?",
    answer: "Absolutely. Our product line is tiered to cater to everyone from complete novices to elite athletes. If you are just starting, we recommend our 'Starter Essentials' pack which focuses on foundation and recovery."
  },
  {
    question: "How do I know which product is right for me?",
    answer: "We offer a 'Body Balance Quiz' on our products page. Based on your goals (weight loss, muscle gain, or endurance), age, and lifestyle, we recommend a custom stack tailored specifically for your physiology."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship globally to over 50 countries. International shipping typically takes 7-14 business days depending on customs processing in your region. We use premium carriers to ensure your package arrives safely."
  },
  {
    question: "Are your ingredients natural and safe?",
    answer: "Transparency is our core value. All our products are free from banned substances, artificial fillers, and harmful additives. We use natural sweeteners and source our whey from grass-fed cattle."
  },
  {
    question: "What is your return and refund policy?",
    answer: "We stand by our quality. If you are not 100% satisfied with your purchase, you can return the unopened product within 30 days for a full refund. For opened products, reach out to our support for store credit options."
  },
  {
    question: "Can I cancel or pause my subscription anytime?",
    answer: "Yes, our 'Fit-Auto' subscription model is completely flexible. You can pause, skip a month, or cancel your subscription directly from your dashboard with zero hidden fees or penalties."
  },
  {
    question: "Do you offer vegetarian or vegan options?",
    answer: "Yes! We have a dedicated 'Plant Power' line featuring pea protein isolates, vegan BCAAs, and plant-based multivitamins that are just as effective as their whey counterparts."
  },
  {
    question: "Is personal coaching included with the products?",
    answer: "Our 'Signature' and 'Elite' product bundles come with complimentary access to our coaching app for 3 months. For individual product purchases, coaching can be added as a separate subscription at a discounted rate."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is dispatched, you will receive a tracking link via email and SMS. You can also log in to your account on our website to view real-time updates on your shipment's status."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full bg-brand-dark relative py-20 px-6 md:px-12 flex flex-col items-center">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto w-full z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-stroke-style text-[5rem] sm:text-[6rem] md:text-[8rem] tracking-tighter">
            FAQ
          </h2>
          <h3 className="signature-font text-white text-4xl sm:text-5xl md:text-7xl -mt-6 drop-shadow-lg drop-shadow-amber-300">
            Queries
          </h3>
        </div>

        {/* Accordion Container */}
        <div className="space-y-1">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-white/5 border-brand-gold/30' : 'bg-transparent hover:bg-white/5'}`}
            >
              {/* Question Header */}
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <span className={`text-lg md:text-xl font-bold font-nunito transition-colors duration-300 ${activeIndex === index ? 'text-amber-300' : 'text-white group-hover:text-brand-gold'}`}>
                  {item.question}
                </span>
                
                {/* Plus/Minus Icon */}
                <span className="relative ml-4 flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <span className={`absolute w-full h-0.5 bg-amber-300 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}></span>
                  <span className={`absolute w-full h-0.5 bg-amber-300 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 opacity-0' : 'rotate-90'}`}></span>
                </span>
              </button>

              {/* Answer Content */}
              <div 
                className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-400 font-nunito leading-relaxed border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <button className="text-amber-300 border-b border-brand-gold pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest text-sm font-bold">
            <a href="#contact">Contact Support</a>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Faq;