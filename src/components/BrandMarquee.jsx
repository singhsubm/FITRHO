import React from "react";

// Replace with your actual logo assets
const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Zomato_Logo.svg/2560px-Zomato_Logo.svg.png",
  "https://cdn.brandfetch.io/idqFC5Rk0D/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://cdn.brandfetch.io/ideeTxiKQK/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  "https://cdn.brandfetch.io/idWdImNSUt/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  "https://cdn.brandfetch.io/idIM18oaEt/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  "https://cdn.brandfetch.io/idmjhO-S03/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
];

const BrandMarquee = () => {
  return (
    <div className="w-full py-16 m-auto overflow-hidden relative">
      
      {/* Internal Styles for Animation */}
      <style>{`
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scrollRight 60s linear infinite;
        }
        .animate-scroll-left {
          animation: scrollLeft 80s linear infinite;
        }
        /* Make logos white/grey to match theme */
        .brand-logo {
          filter: brightness(1.5);
        }
        
      `}</style>

      {/* --- TOP ROW (Moves Right ->) --- */}
      <div className="w-full overflow-hidden mb-10">
        <div className="marquee-track animate-scroll-right hover:[animation-play-state:paused]">
          {/* Loop twice for infinite effect */}
          {[...brands, ...brands, ...brands].map((logo, index) => (
            <div key={`top-${index}`} className="flex items-center justify-center mx-8 w-[120px] sm:w-[160px]">
              <img 
                src={logo} 
                alt="brand" 
                className="brand-logo w-full h-12 object-contain opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM ROW (Moves Left <-) --- */}
      <div className="w-full overflow-hidden">
        <div className="marquee-track animate-scroll-left hover:[animation-play-state:paused]">
          {/* Loop twice for infinite effect */}
          {[...brands, ...brands, ...brands].map((logo, index) => (
            <div key={`bottom-${index}`} className="flex items-center justify-center mx-8 w-[120px] sm:w-[160px]">
              <img 
                src={logo} 
                alt="brand" 
                className="brand-logo w-full h-12 object-contain opacity-100" 
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BrandMarquee;