import React from 'react';

const Footer = () => {
  return (
    // Changed: min-h-[50vh] and reduced padding (py-10 instead of pt-20)
    <footer className="w-full bg-[#15161a] border-t border-white/10 py-10 px-6 md:px-12 relative overflow-hidden min-h-[50vh] flex flex-col justify-center">
      

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10 items-center">
        
        {/* LEFT SIDE: Compact Info */}
        <div className="flex flex-col justify-between h-full">
          
          <div className="space-y-6">
             {/* Logo Section */}
            <div>
              <h2 className="text-3xl font-bold tracking-widest text-brand-gold uppercase font-longline text-yellow-300">
                FITRHO
              </h2>
              <p className="text-gray-400 mt-2 max-w-sm font-nunito text-xs leading-relaxed">
                Elevating your fitness journey with premium nutrition and quality coaching.
              </p>
            </div>

            {/* Links Columns (Compact) */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              
              {/* Column 1 */}
              <div className="space-y-2">
                <h4 className="text-white font-bold uppercase text-xs">Quick Links</h4>
                <ul className="space-y-1 text-gray-500 text-xs font-nunito">
                  <li className="hover:text-brand-gold cursor-pointer"><a href="#home"> Home</a></li>
                  <li className="hover:text-brand-gold cursor-pointer"><a href="#story">About</a></li>
                  <li className="hover:text-brand-gold cursor-pointer"><a href="#services">Products</a></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <h4 className="text-white font-bold uppercase text-xs">Resources</h4>
                <ul className="space-y-1 text-gray-500 text-xs font-nunito">
                  <li className="hover:text-brand-gold cursor-pointer"><a href="#faqs">FAQs</a></li>
                  <li className="hover:text-brand-gold cursor-pointer"><a href="#review">Reviews</a></li>
                  <li className="hover:text-brand-gold cursor-pointer"><a href="#support">Support</a></li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <h4 className="text-white font-bold uppercase text-xs">Company</h4>
                <ul className="space-y-1 text-gray-500 text-xs font-nunito">
                  <li className="hover:text-brand-gold cursor-pointer"><a href="#story">Story</a></li>
                  <li className="hover:text-brand-gold cursor-pointer"><a href="#team">Team</a></li>
                  <li className="hover:text-brand-gold cursor-pointer"><a href="#legal">Legal</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-8 pt-4 border-t border-white/5 text-gray-600 text-[10px] font-nunito">
            <p>&copy; 2025 FITRHO Essentials. All rights reserved.</p>
          </div>

        </div>


        {/* RIGHT SIDE: Compact Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between items-baseline mb-4">
            <h3 className="text-xl font-longline text-amber-300 font-bold">Get In Touch</h3>
            <span className="text-amber-300 text-xs font-nunito">We reply fast.</span>
          </div>
          
          <form className="space-y-3">
            
            <div className="grid grid-cols-2 gap-3">
                {/* Name Input */}
                <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                />
                {/* Email Input */}
                <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                />
            </div>

            {/* Message Input */}
            <textarea 
                rows="2"
                placeholder="Message"
                className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
            ></textarea>

            {/* Submit Button */}
            <button className="w-full bg-amber-300 text-brand-dark font-bold py-2 rounded-lg uppercase text-xs tracking-widest hover:bg-white transition-colors shadow-lg shadow-brand-gold/10">
              Send
            </button>

          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;