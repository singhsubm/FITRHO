import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Global.css'; // Reusing global styles
import pishta from "../assets/mockup/pishta.jpeg"

const ingredients = [
  {
    name: "Almonds (Badam)",
    desc: "Premium Mamra almonds rich in Vitamin E and brain-boosting healthy fats.",
    image: "https://images.unsplash.com/photo-1508779018996-601e37fa274e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Cashews (Kaju)",
    desc: "Creamy W320 grade cashews providing essential zinc and magnesium for energy.",
    image: "https://images.unsplash.com/photo-1729514256038-c489695f4d79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Walnuts (Akhrot)",
    desc: "Brain food loaded with Omega-3s to keep your focus sharp all day.",
    image: "https://images.unsplash.com/photo-1694955416507-8d4b82ac1668?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const StoryPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen w-full bg-brand-dark text-white pt-24 pb-12 overflow-x-hidden">
      
      {/* 1. HERO SECTION: The Promise */}
      <div className="relative w-full px-6 mb-32 flex flex-col items-center text-center z-10">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none"></div>

        <h1 className=" text-stroke-style
      text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[8rem]
      tracking-tighter leading-none
      mb-[-5%] md:mb-[-3%]">
          THE VOW
        </h1>
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
    Our pledge
  </h3>
        {/* <h2 className="mt-20 text-brand-gold font-longline text-3xl md:text-5xl max-w-4xl leading-tight">
          "Nutrition for everyone. <br/> Without missing a single day."
        </h2> */}
      </div>

      {/* 2. THE PROBLEM & SOLUTION (Split Layout) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image with Floating Effect */}
          <div className="relative">
             <div className="absolute inset-0 bg-brand-gold/20 rounded-3xl transform rotate-3"></div>
             <img 
               src="https://images.unsplash.com/photo-1607664608695-45aaa6d621fc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt="Healthy Habit" 
               className="relative rounded-3xl shadow-2xl transition-all duration-700 z-10"
             />
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -right-5 bg-[#2a2b30] border border-brand-gold p-6 rounded-xl shadow-xl z-20 animate-bounce-slow">
                <span className="text-2xl font-bold text-amber-300 block">365</span>
                <span className="text-xs text-brand-gold uppercase tracking-widest">Days Consistency</span>
             </div>
          </div>

          {/* Right: The Text Content */}
          <div className="space-y-8">
            <h3 className="text-4xl text-amber-300 font-longline">The "Dabba" Problem</h3>
            <p className="text-gray-400 font-nunito text-lg leading-relaxed border-l-2 border-brand-gold pl-6">
              We noticed a pattern. You buy a 1kg box of almonds with high hopes. You eat them for 3 days. Then the box sits in the kitchen, forgotten. <br/><br/>
              <span className="text-white font-bold">Nutrition only works if it's consistent.</span>
            </p>
            <p className="text-gray-400 font-nunito text-lg leading-relaxed">
              That's why FITRHO was born. We don't just sell dry fruits; we sell a <span className="text-brand-gold">daily habit</span>. We pre-portion premium Cashews, Almonds, and Walnuts into personalized daily packs. No measuring, no forgetting. Just grab and go.
            </p>
          </div>
        </div>
      </div>

      {/* 3. INGREDIENTS SHOWCASE (Visuals) */}
      <div
      style={
        {
            backgroundImage: `url(${pishta})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
      }
       className="w-full py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ingredients.map((item, index) => (
              <div key={index} className="group relative bg-white/10 border border-white/5  rounded-2xl overflow-hidden hover:-translate-y-3 transition-transform duration-500">
                <div className="h-64 w-full overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl text-white font-bold  mb-2 group-hover:text-brand-gold  transition-colors">{item.name}</h4>
                  <p className="text-gray-400 text-sm font-nunito leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. FINAL CTA */}
      <div className="max-w-4xl mx-auto text-center mt-32 mb-20 px-6">
        <h2 className="text-white text-4xl md:text-5xl font-longline mb-8">
          Ready to build your <span className="text-brand-gold">Streak?</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Join thousands who have switched from "bulk buying" to "daily thriving".
        </p>
        <Link to="/product">
          <button className="bg-amber-300 text-black px-12 py-4 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,215,0,0.3)]">
            Start My Subscription
          </button>
        </Link>
      </div>

    </div>
  );
};

export default StoryPage;