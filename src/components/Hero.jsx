import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Flip from 'gsap/Flip';
import './Hero.css'; // Import the custom CSS
// Make sure this path is correct based on where your image is located:
import bg from "../assets/background.png"; 
import first from "../assets/mockup/b1.png";
import second from "../assets/mockup/b2.png";
import third from "../assets/mockup/b3.png";
import fourth from "../assets/mockup/b4.png";
import sixth from "../assets/mockup/b6.png";
import seventh from "../assets/mockup/b7.png";


gsap.registerPlugin(Flip);

// Using the images from your codepen snippet
const images = [
  first,
  second,
    third,
    fourth,
    sixth,
    seventh,
    first,
  second,
    third,
    fourth,
    sixth,
    seventh,
    first,
  second,
    third,
    fourth,
    sixth,
    seventh
];

const Hero = () => {
  const wheelRef = useRef(null);
  const headerRef = useRef(null);
  const tweenRef = useRef(null); // Reference to store the animation
  const [currentCard, setCurrentCard] = useState(null);

  // Handle closing an open card
  const closeCard = () => {
    if (!currentCard) return;

    const img = headerRef.current.querySelector("img");
    if (img) {
      const state = Flip.getState(img);
      currentCard.appendChild(img);
      Flip.from(state, {
        ease: "power1.inOut",
        scale: true
      });
    }
    setCurrentCard(null);
    // Resume spinning when card closes
    if (tweenRef.current) tweenRef.current.play();
  };


  // Initial Setup and Animation Logic
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const wheel = wheelRef.current;
      const cards = gsap.utils.toArray(".wheel__card");
      
      // Setup Wheel Math
      const setup = () => {
        let radius = wheel.offsetWidth / 2;
        let center = radius;
        let slice = 360 / cards.length;
        let DEG2RAD = Math.PI / 180;

        gsap.set(cards, {
          x: i => center + radius * Math.sin(i * slice * DEG2RAD),
          y: i => center - radius * Math.cos(i * slice * DEG2RAD),
          rotation: i => i * slice,
          xPercent: -50,
          yPercent: -50
        });
      };

      setup();
      window.addEventListener("resize", setup);

      // AUTOMATIC INFINITE SPIN
      // We save this to tweenRef so we can pause/play it later
      tweenRef.current = gsap.to(wheel, {
        rotation: -360,     // Spin full circle
        ease: "none",       // Linear speed (constant)
        duration: 60,       // Time for one full rotation (Adjust this to make it faster/slower)
        repeat: -1          // Infinite repeat
      });

    }, wheelRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="relative w-full h-screen overflow-hidden bg-cover bg-center bg-brand-dark"
    >
      
      {/* Background Text FITRHO */}
      <div className="fitrho-text select-none hidden md:block">
        FITRHO
      </div>

      {/* The Header Area where image pops up */}
      <div 
        ref={headerRef} 
        className={`header-overlay pointer-events-none ${currentCard ? 'active' : ''}`}
        onClick={closeCard}
      >
        {/* Expanded image lands here */}
      </div>

      {/* The Wheel Section */}
      <section className="slider-section">
        <div 
          className="wheel" 
          ref={wheelRef}
          
        >
          {images.map((src, index) => (
            <div 
              key={index} 
              className="wheel__card "
              
            >
              <img className='min-w-50 h-80 object-cover' src={src} alt={`Gallery ${index}`} draggable="false" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Text */}
      <div className="cursor-pointer z-10 absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-white/70 tracking-widest uppercase">
        <a href="#story">
          Scroll to Explore
        <h1 className='text-center text-4xl animate-bounce mt-4'>↓</h1>
        </a>
      </div>
    </div>
  );
};

export default Hero;