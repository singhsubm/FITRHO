import React, { useEffect } from 'react';
import './Hero.css'; // Reusing styles

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen w-full bg-brand-dark pt-24 pb-12">
      
      {/* 1. Page Header */}
      <div className="text-center mb-16 relative z-10 px-6">
        <h2 className="text-stroke-style
      text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[8rem]
      tracking-tighter leading-none
      mb-[-5%] md:mb-[-3%]">
          CONTACT
        </h2>
        <h3 className="signature-font text-white
      text-3xl sm:text-4xl md:text-6xl lg:text-7xl
      mt-1 md:mt-0
      md:ml-50
      tracking-wide
      drop-shadow-lg drop-shadow-amber-300">
          Get In Touch
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        
        {/* 2. Contact Info Cards (Address, Call, Email) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Address */}
          <div className="bg-white/10 border border-white/10 p-8 rounded-2xl text-center hover:border-brand-gold/50 transition-all group">
            <div className="w-12 h-12 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
              📍
            </div>
            <h4 className="text-xl font-longline text-white mb-2">Address</h4>
            <p className="text-gray-400 font-nunito text-sm leading-relaxed">
              F33/1, Anand Nagar, MIDC,<br />
              Ambernath, Mumbai, India 421506
            </p>
          </div>

          {/* Call Us */}
          <div className="bg-white/10 border border-white/10 p-8 rounded-2xl text-center hover:border-brand-gold/50 transition-all group">
            <div className="w-12 h-12 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
              📞
            </div>
            <h4 className="text-xl font-longline text-white mb-2">Call Us</h4>
            <p className="text-brand-gold font-nunito text-lg font-bold">
              +91 7039 003 003
            </p>
            <p className="text-gray-500 text-xs mt-1">Mon-Sat, 9am - 6pm</p>
          </div>

          {/* Email */}
          <div className="bg-white/10 border border-white/10 p-8 rounded-2xl text-center hover:border-brand-gold/50 transition-all group">
            <div className="w-12 h-12 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
              ✉️
            </div>
            <h4 className="text-xl font-longline text-white mb-2">Email</h4>
            <p className="text-gray-400 font-nunito text-sm">
              support@fitrho.com<br />
              sales@fitrho.com
            </p>
          </div>
        </div>

        {/* 3. SPLIT SECTION: Form (Left) + Map (Right) */}
        <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
           
           {/* LEFT SIDE: Form */}
           <div className="w-full lg:w-1/2 p-8 md:p-12 relative">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="mb-8 relative z-10">
                <h3 className="text-3xl md:text-4xl font-longline text-amber-300 mb-2">Got Any Questions?</h3>
                <p className="text-amber-200 font-nunito text-sm">Use the form below to get in touch with our sales team.</p>
              </div>

              <form className="space-y-6 relative z-10 text-amber-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  {/* First Name */}
                  <div className="space-y-2 ">
                    <input type="text" required placeholder="Your Name" className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors" />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <input type="email" required placeholder="Your Email" className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors" />
                  </div>
                </div>

                {/* Phone Selection Row */}
                <div className="space-y-2">
                   <div className="flex gap-4">
                      <div className="bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white flex items-center gap-2 w-32 justify-center">
                        🇮🇳 +91
                      </div>
                      <input type="tel" required placeholder="Phone Number" className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors" />
                   </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <textarea rows="4" required placeholder="How can we help you?" className="w-full bg-brand-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors resize-none"></textarea>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-brand-gold text-brand-dark font-bold py-4 rounded-xl uppercase tracking-widest border-2    border-amber-300 hover:bg-amber-300 hover:text-black cursor-pointer transition-all duration-300 shadow-lg ">
                  Submit Message
                </button>
              </form>
           </div>

           {/* RIGHT SIDE: Map (Full Height of Container) */}
           <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10 grayscale hover:grayscale-0 transition-all duration-700 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110449.15628747914!2d82.9087071232005!3d25.32089491990974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1767007381720!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fitrho Location"
              ></iframe>
           </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;