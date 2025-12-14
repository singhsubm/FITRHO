import React from 'react';
import './Schedule.css'; // Reuse text-stroke-style
import threeday from "../assets/mockup/3daypack.png"; // Background image
import sevenday from "../assets/mockup/7daypack.png"; // Background image
import onemonth from "../assets/mockup/1monthpack.png"; // Background image

import flaxseed from "../assets/mockup/flaxseed.jpeg"; // Background image
import chiaseed from "../assets/mockup/chiaseed.jpeg"; // Background image
import pumpkinseed from "../assets/mockup/pumpkin seed.jpeg"; 

const products = [
  {
    id: 1,
    name: "Three Day Nutrition Pack",
    image: threeday,
    description: "using high-quality materials, this pack is designed for comfort and durability during your workouts.",
    button: "Discover More",
    // background: flaxseed
    background: "white"
  },
  {
    id: 2,
    name: "Seven Day Nutrition Pack",
    image: sevenday,
    description: "perfect for travel or everyday use, this pack combines nutrition and protien to keep you fit.",
    button: "Order Now",
    // background: chiaseed
    background: "white"
  },
  {
    id: 3,
    name: "One Month Nutrition Pack",
    image: onemonth,
    description: "ideal for long-term use, this pack offers a comprehensive solution for your nutritional needs.",
    button: "Know More",
    // background: pumpkinseed
    background: "white"
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
     className="min-h-screen w-full relative flex flex-col justify-center object-cover bg-no-repeat bg-center bg-cover py-20 px-6 md:px-12 overflow-hidden">
      

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
        
         className="grid grid-cols-1 md:grid-cols-3 gap-20">
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
              <div className="h-70 w-full overflow-hidden relative flex justify-center items-center">
                <div className="absolute inset-0 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col items-start space-y-4">
                <div className="flex justify-between w-full items-baseline">
                  <h4 className="text-2xl font-bold text-white  transition-colors">
                    {product.name}
                  </h4>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Button */}
                <button className="mt-4 w-full py-3 bg-transparent border-2 border-amber-300 text-amber-300 font-bold uppercase tracking-widest text-xs hover:bg-amber-300 hover:text-black  transition-all duration-300 rounded">
                  {product.button}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Discover;