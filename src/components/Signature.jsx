import React from "react";
import "./Signature.css"; // Importing CSS for the text style
import bg2 from "../assets/mockup/pista.png"; // Background image
import bg from "../assets/mockup/bg.png"; // Background image

const Signature = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg2})` }}
      className="min-h-fit w-full relative py-20 px-6 md:px-12 flex flex-col justify-center overflow-hidden object-cover bg-no-repeat bg-center"
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
        malesuada.
      </p>
      <p>
        Suspendisse potenti. Ut pharetra augue nec augue. Nam elit magna,
        hendrerit sit amet, tincidunt ac, viverra sed, nulla.
      </p>
    </div>

    {/* BUTTONS */}
    <div className="pt-4 w-full flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6">
      <button
        className="
          text-white border-b border-brand-gold pb-1
            transition-all
          uppercase tracking-widest
          text-[10px] sm:text-xs md:text-sm
          font-bold
        "
      >
        Read The Full Story
      </button>

      <button
        className="
          text-white border-2 border-amber-300
          px-6 py-2 rounded-md
          hover:text-amber-300 transition-all duration-300
          text-base sm:text-lg
        "
      >
        Order Now →
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
        md:grayscale hover:grayscale-0
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
