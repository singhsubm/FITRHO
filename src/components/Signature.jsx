import React from "react";
import "./Signature.css"; // Importing CSS for the text style
// import bg2 from "../assets/mockup/pista.png"; // Background image
import bg from "../assets/mockup/bg.png"; // Background image
import { Link } from "react-router-dom";

const Signature = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${bg2})` }}
      className="min-h-screen w-full relative py-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden object-cover bg-no-repeat bg-center"
    >
      <div
  className="
    max-w-7xl mx-auto w-full
    flex flex-col lg:flex-row
    justify-between items-center
    gap-16 lg:gap-24
    z-10
  "
>
  {/* LEFT CONTENT */}
  <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">

    {/* HEADINGS */}
    <div>
      <h2 className="text-stroke-style text-[5rem] sm:text-[6rem] md:text-[8rem] tracking-tighter">
        OUR
      </h2>
      <h3 className="signature-font text-white text-4xl sm:text-5xl md:text-7xl -mt-6 drop-shadow-lg drop-shadow-amber-300">
        Signature
      </h3>
    </div>

    {/* TEXT */}
    <div className="space-y-6 text-gray-300 font-nunito text-base sm:text-lg leading-relaxed">
      <p>
        A thoughtfully designed, day-wise nutrition system that removes daily food decisions and helps you stay consistent without effort.
      </p>
      <p>
        We don’t just sell dry fruits. We create a structured, day-wise nutrition system with thoughtfully portioned ingredients—so eating healthy becomes simple, consistent, and effortless.
      </p>
    </div>

    {/* BUTTONS */}
    <div className="pt-4 w-full flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6">
      <Link to="/story"
        className="
          text-white border-b border-brand-gold pb-1
            transition-all
          uppercase tracking-widest text-2xl
          text-[10px] md:text-sm
          font-bold
        "
      >
        Read The Full Story
      </Link>

      <button
        className="
          text-white border-2 border-amber-300
          px-6 py-2 rounded-md
          hover:text-amber-300 transition-all duration-300
          text-base sm:text-lg
        "
      >
        <Link to="/product">Order Now →</Link>
      </button>
    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div className="w-full lg:w-1/4 relative group flex justify-center">
    {/* Glow Background */}
    <div
      className="
        absolute inset-0 bg-brand-gold rounded-2xl
        translate-x-2 translate-y-2 opacity-20
        group-hover:translate-x-1 group-hover:translate-y-1
        transition-transform duration-500
      "
    ></div>

    <img
      src={bg}
      alt="Signature Training"
      loading="lazy"
      className="
        relative z-10
        w-full max-w-sm sm:max-w-md md:max-w-lg
        h-[40vh] sm:h-[50vh] lg:h-[60vh]
        object-cover object-center
        rounded-2xl
        transition-all duration-700
        shadow-2xl
      "
    />
  </div>
</div>

    </div>
  );
};

export default Signature;
