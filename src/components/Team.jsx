import React, { useState } from 'react';
import './Team.css';

const teamMembers = [
  { 
    name: "Alex Johnson", 
    role: "Founder & Coach", 
    img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    name: "Sarah Miller", 
    role: "Nutrition Specialist", 
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    name: "David Kim", 
    role: "Strength Trainer", 
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    name: "Emily Davis", 
    role: "Yoga Instructor", 
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    name: "Michael Chen", 
    role: "Physiotherapist", 
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    name: "Lisa Wong", 
    role: "Operations Manager", 
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop" 
  }
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to determine card class based on index
  const getCardClass = (index) => {
    const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;
    if (offset === 0) return "team-card center";
    if (offset === 1) return "team-card right-1";
    if (offset === 2) return "team-card right-2";
    if (offset === teamMembers.length - 1) return "team-card left-1";
    if (offset === teamMembers.length - 2) return "team-card left-2";
    return "team-card hidden";
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className="team-page">
      
      {/* Header */}
      <div className="team-header">
        <h2 className="text-stroke-style text-[4.5rem] md:text-[8rem] tracking-tighter leading-none mb-[-3%]">
            OUR
          </h2>
          <h3 className="signature-font text-white font-6xl md:text-6xl ml-0 mt-5 tracking-wide drop-shadow-lg drop-shadow-amber-300">
            Team
          </h3>
      </div>

      <div className="carousel-container relative w-full ">
        
        {/* Left Arrow */}
        <button className="nav-arrow left " onClick={handlePrev}>‹</button>

        {/* Track */}
        <div className="w-70 mx-auto my-auto h-full">
            <div className="carousel-track ">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={getCardClass(index)}
              onClick={() => {
                if(!isAnimating && index !== currentIndex) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 800);
                }
              }}
            >
              <img src={member.img} alt={member.name} />
            </div>
          ))}
        </div>
        </div>

        {/* Right Arrow */}
        <button className="nav-arrow right" onClick={handleNext}><span>›</span></button>

      </div>

    </div>
  );
};

export default Team;