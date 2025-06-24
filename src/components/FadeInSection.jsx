// File: src/components/FadeInSection.jsx

import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = (props) => {
  const { ref, inView } = useInView({
    // Options
    triggerOnce: true, // This makes the animation trigger only once
    threshold: 0.1, // The animation triggers when 10% of the section is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
