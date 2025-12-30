import React, { useState } from 'react';
import './Schedule.css';

import nut1 from "../assets/mockup/nut1.jpeg";
import nut2 from "../assets/mockup/nut2.jpeg";
import nut3 from "../assets/mockup/nut3.jpeg";
import nut4 from "../assets/mockup/nut4.jpeg";
import nut5 from "../assets/mockup/nut5.jpeg";
import nut6 from "../assets/mockup/nut6.jpeg";
import nut7 from "../assets/mockup/nut7.jpeg";

const days = [
  { day: "Monday", background: nut1 },
  { day: "Tuesday", background: nut2 },
  { day: "Wednesday", background: nut3 },
  { day: "Thursday", background: nut4 },
  { day: "Friday", background: nut7 },
  { day: "Saturday", background: nut5 },
  { day: "Sunday", background: nut6 },
];

const Schedule = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const getCardClass = (index) => {
    if (activeIndex === null) return "card is-active";
    return activeIndex === index ? "card is-active" : "card";
  };

  return (
  <div className="schedule-wrapper bg-[#0b0600] /*bg-[#ffc2d5]*/">
    <div className="w-full min-h-screen bg-brand-dark flex flex-col justify-center items-center py-20">

      <div
        className="schedule-container"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {days.map((item, index) => (
          <div
            key={index}
            className={getCardClass(index)}
            // style={{
            //   backgroundImage: `url(${item.background})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   filter: activeIndex === index ? "blur(4px)" : "blur(0px)",
            // }}

            style={{
      "--bg-image": `url(${item.background})`,
    }}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="card__inner">
              <div className="card-day">{item.day}</div>
              <div className="card-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);

};

export default Schedule;
