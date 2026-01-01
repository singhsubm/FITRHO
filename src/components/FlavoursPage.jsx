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
    ingredients: "4 almonds, 1 small handful raisins, 1 spoon flax seeds, 1 spoon pumpkin seeds",
    weight: "75gm",
    image: b1,
  },
  {
    id: 2,
    name: "Tuesday-Activate ",
    desc: "Protein-packed for active days.",
    ingredients: "4 walnuts, 1 small handful dried cranberries, 1 spoon chia seeds, 1 spoon sunflower seeds",
    weight: "75gm",
    image: b2,
  },
  {
    id: 3,
    name: "Wednesday-Align",
    desc: "Balanced blend for midweek focus.",
    ingredients: "4 cashews, 1 small handful dried apricots, 1 spoon hemp seeds, 1 spoon sesame seeds",
    weight: "75gm",
    image:
      b3,
  },
  {
    id: 4,
    name: "Thursday-Build",
    desc: "Nutrient-dense for muscle growth.",
    ingredients: "4 pecans, 1 small handful dried figs, 1 spoon poppy seeds, 1 spoon flax seeds",
    weight: "75gm",
    image:
      b4,
  },
  {
    id: 5,
    name: "Friday-Perform",
    desc: "Endurance mix for peak performance.",
    ingredients: "4 hazelnuts, 1 small handful dried cherries, 1 spoon chia seeds, 1 spoon pumpkin seeds",
    weight: "75gm",
    image:
      b6,
  },
  {
    id: 6,
    name: "Saturday-Recover",
    desc: "Soothing blend for recovery days.",
    ingredients: "4 macadamia nuts, 1 small handful dried blueberries, 1 spoon hemp seeds, 1 spoon sesame seeds",
    weight: "75gm",
    image:
      b7,
  },
  {
    id: 7,
    name: "Sunday-Enjoy",
    desc: "Delightful mix for a relaxed day.",
    ingredients: "4 brazil nuts, 1 small handful dried mango, 1 spoon poppy seeds, 1 spoon sunflower seeds",
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
    <div className="flavours-root pb-20 md:w-[80%] md:mx-auto relative">

      <div
        className="carousel mt-20"
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
              <h4 className="text-lg lg:text-2xl font-bold text-black">
                {item.name} <span className="text-sm lg:text-xl">({item.weight})</span>
              </h4>
              <p className="text-xs text-zinc-900 underline lg:text-lg">{item.desc}</p><br />
              <p className="ingredients text-xs lg:text-sm text-zinc-700">{item.ingredients}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="nav w-full absolute lg:top-0 left-0">
        <div className="w-full flex px-4 items-center lg:justify-end justify-center h-full">
          <button onClick={prev} className="flex items-center bg-amber-300 justify-center">{"←"}</button>
          <button onClick={next} className="flex items-center bg-amber-300 justify-center">{"→"}</button>
        </div>
      </div>
    </div>
  );
};

export default FlavoursPage;
