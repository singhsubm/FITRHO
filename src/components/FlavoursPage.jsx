import React, { useState, useRef } from "react";
import "./FlavoursPage.css";
import "./Hero.css"; // Global styles if needed

// Import your images here properly
// import b1 from "../assets/mockup/b1.png"; etc...

import b1 from "../assets/mockup/b1.png";
import b2 from "../assets/mockup/b2.png";
import b3 from "../assets/mockup/b3.png";
import b4 from "../assets/mockup/b4.png";
import b6 from "../assets/mockup/b6.png";
import b7 from "../assets/mockup/b7.png";

const flavours = [
  {
    id: 1,
    name: "Monday-Reset",
    desc: "Energizing mix to kickstart your week.",
    price: 199,
    weight: "75gm",
    image: b1,
  },
  {
    id: 2,
    name: "Tuesday-Activate ",
    desc: "Protein-packed for active days.",
    price: 199,
    weight: "75gm",
    image: b2,
  },
  {
    id: 3,
    name: "Wednesday-Align",
    desc: "Balanced blend for midweek focus.",
    price: 180,
    weight: "75gm",
    image:
      b3,
  },
  {
    id: 4,
    name: "Thursday-Build",
    desc: "Nutrient-dense for muscle growth.",
    price: 199,
    weight: "75gm",
    image:
      b4,
  },
  {
    id: 5,
    name: "Friday-Perform",
    desc: "Endurance mix for peak performance.",
    price: 199,
    weight: "75gm",
    image:
      b6,
  },
  {
    id: 6,
    name: "Saturday-Recover",
    desc: "Soothing blend for recovery days.",
    price: 210,
    weight: "75gm",
    image:
      b7,
  },
  {
    id: 7,
    name: "Sunday-Enjoy",
    desc: "Delightful mix for a relaxed day.",
    price: 210,
    weight: "75gm",
    image:
      b3,
  },
];

const FlavoursPage = () => {
  const [active, setActive] = useState(0);
  const startX = useRef(0);

  const prev = () =>
    setActive((prev) => (prev - 1 + flavours.length) % flavours.length);
  const next = () => setActive((prev) => (prev + 1) % flavours.length);

  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  // Logic to handle 7 visible cards (Center + 3 Left + 3 Right)
  const getClass = (index) => {
    const len = flavours.length;
    // Calculate distance (0 is active, -1 is left, 1 is right)
    let distance = (index - active + len) % len;
    if (distance > len / 2) distance -= len; // Handle wrap-around

    if (distance === 0) return "falvourCard active";
    if (distance === -1) return "falvourCard prev-1";
    if (distance === 1) return "falvourCard next-1";
    if (distance === -2) return "falvourCard prev-2";
    if (distance === 2) return "falvourCard next-2";
    if (distance === -3) return "falvourCard prev-3";
    if (distance === 3) return "falvourCard next-3";

    return "falvourCard hidden"; // Hide anything beyond 3 steps
  };

  return (
    <div className="flavours-root pt-20 pb-20 md:w-[80%] md:mx-auto">
      <h2 className="text-stroke-style text-[4.5rem] md:text-[8rem] tracking-tighter leading-none mb-[-3%]">
        OUR
      </h2>
      <h3 className="signature-font text-white text-4xl sm:text-5xl md:text-7xl -mt-6 drop-shadow-lg drop-shadow-amber-300">
        Offerings
      </h3>

      <div
        className="carousel mt-40"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {flavours.map((item, i) => (
          <div
            key={item.id}
            className={getClass(i)}
            onClick={() => setActive(i)}
          >
            {/* Image Container */}
            <div className="img-container">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="details">
              <h4>
                {item.name} <span className="text-sm">({item.weight})</span>
              </h4>
              <p>{item.desc}</p>
              <span>₹ {item.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="nav">
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </div>
  );
};

export default FlavoursPage;
