import React from 'react';
import './Signature.css'; // Reusing your text styles
import bgImage from "../assets/mockup/dryfruitbg.jpeg"; // Background image
import comittmentBg from "../assets/mockup/comittmentbg.png"; // Background image

const features = [
  {
    title: "Fit Day by Day",
    desc: "Consistent progress with our daily tracked nutrition packs designed for your metabolism.",
  },
  {
    title: "Travel Friendly",
    desc: "Compact, leak-proof, and TSA-compliant packaging so your gains never take a vacation.",
  },
  {
    title: "Personalized Pack",
    desc: "Custom-built supplement stacks based on your body goals and workout intensity.",
  }
];

const Commitment = () => {
  return (
    <div className="min-h-screen w-full bg-brand-dark relative py-20 px-4 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Image (Blurred behind the glass) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={
            bgImage
          } 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Dark Overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/80 to-brand-dark"></div>
      </div>

      {/* Main Content Container (z-10 to sit above background) */}
      <div className="w-full max-w-7xl z-10 flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="text-center md:text-left">
  <h2
    className="
      text-stroke-style
      text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem]
      tracking-tighter leading-none
      mb-[-5%] md:mb-[-3%]
    "
  >
    COMMITMENT
  </h2>

  <h3
    className="
      signature-font text-white
      text-3xl sm:text-4xl md:text-6xl lg:text-7xl
      mt-1 md:mt-0
      md:ml-50
      tracking-wide
      drop-shadow-lg drop-shadow-amber-300
    "
  >
    to Quality
  </h3>
</div>


        {/* The Glassmorphism Card (Based on your reference) */}
        <div className="relative w-full h-fit rounded-[40px] overflow-hidden border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5 p-8 md:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Text Content */}
            <div className="space-y-8">
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    
                    <div>
                      <h5 className="text-xl text-white font-bold mb-1">{feature.title}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button inside Glass Card */}
              <button className="bg-amber-300 text-brand-dark px-8 py-3 rounded-md font-bold transition-scale duration-300 mt-4 underline hover:bg-white">
                Start Your Journey
              </button>
            </div>

            {/* Right Side: Image inside Glass Card */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden group">
               <div className="absolute inset-0 bg-brand-gold/20 mix-blend-overlay z-10"></div>
               <img 
                 src={comittmentBg} 
                 alt="Quality Fitness" 
                 className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
               
               {/* Decorative Element on Image */}
               <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
                 <span className="text-brand-gold font-bold text-sm">★ Premium Grade</span>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Commitment;