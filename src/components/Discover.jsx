import React from 'react';
import './Schedule.css'; // Reuse text-stroke-style
import threeday from "../assets/mockup/3daypack.png"; // Background image
import sevenday from "../assets/mockup/7daypack.png"; // Background image
import onemonth from "../assets/mockup/1monthpack.png"; // Background image

import flaxseed from "../assets/mockup/flaxseed.jpeg"; // Background image
import chiaseed from "../assets/mockup/chiaseed.jpeg"; // Background image
import pumpkinseed from "../assets/mockup/pumpkin seed.jpeg"; 
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "3 Day Nutrition Pack",
    image: threeday,
    description: "using high-quality materials, this pack is designed for comfort and durability during your workouts.",
    button: "Discover More",
    // background: flaxseed
    background: "white",
    nav: "/product"
  },
  {
    id: 2,
    name: "7 Day Nutrition Pack",
    image: sevenday,
    description: "perfect for travel or everyday use, this pack combines nutrition and protien to keep you fit.",
    button: "Order Now",
    // background: chiaseed
    background: "white",
    nav: "/product"
  },
  {
    id: 3,
    name: "30 Day Nutrition Pack",
    image: onemonth,
    description: "ideal for long-term use, this pack offers a comprehensive solution for your nutritional needs.",
    button: "Know More",
    // background: pumpkinseed
    background: "white",
    nav: "/product"
  }
];

const Discover = () => {
  return (
    <div
    // style={
    //     {
    //         backgroundImage: `url(${bg})`
    //     }
    // }
     className=" min-h-screen w-full relative flex flex-col justify-center py-20 px-6 md:px-12 overflow-hidden bg-[#0b0600]">
      

      <div className="max-w-7xl mx-auto w-full z-10">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-20 text-center md:text-left">
  {/* DISCOVER - Stroke Style */}
  <h2
    className="
      text-stroke-style
      text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[9rem]
      tracking-tighter leading-none
      mb-[-5%] md:mb-[-3%]
    "
  >
    DISCOVER
  </h2>

  {/* Our Offering */}
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
    Our Offering
  </h3>
</div>



        {/* Products Grid */}
        <div
        
         className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <div
            style={{
          backgroundImage: `url(${product.background})`,
          // background:` black`
        }} 
              key={product.id} 
              className="group relative bg-white/10 border rounded-2xl overflow-hidden bg-center bg-cover object-cover"
            >
              
              {/* Image Container */}
              <div className="h-50 w-full overflow-hidden relative flex justify-center items-center xl:h-70 ">
                <div className="absolute inset-0 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col items-start space-y-2">
                <div className="flex justify-between w-full items-baseline">
                  <h4 className="text-sm font-bold text-white  transition-colors">
                    {product.name}
                  </h4>
                </div>
                
                <p className="text-gray-400 text-xs leading-relaxed">
                  {product.description}
                </p>

                {/* Button */}
                <Link to={product.nav} className="mt-4 w-full lg:py-5 py-3 bg-transparent border-2 border-amber-300 text-amber-300 font-bold uppercase tracking-widest text-xs text-center hover:bg-amber-300 hover:text-black  transition-all duration-300 rounded-xl">
                  {product.button}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Discover;