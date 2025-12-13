import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300">
      {/* Glassmorphism Container */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md border-b border-white/30 shadow-lg"></div>

      {/* Content Container (Relative to sit on top of glass) */}
      <div className="relative w-full max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo (Left) */}
        <div
         className="text-3xl font-bold tracking-widest text-brand-gold uppercase font-longline text-yellow-300">
          <a href="#home">FITRHO</a>
        </div>

        {/* Links (Mid) */}
        <div className="hidden md:flex gap-8 items-center">
          {['Home', 'Services', 'Commitment', 'Story'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white text-lg font-nunito font-semibold tracking-wide transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Reach Us (Right) - Pill Shape */}
        <button className=" font-bold px-8 py-2 rounded-full transition-all duration-300 bg-yellow-300 text-black  cursor-pointer  hover:bg-white shadow-md">
          <a href="#contact">Reach Us</a>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;