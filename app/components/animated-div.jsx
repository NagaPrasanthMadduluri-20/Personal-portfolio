"use client";

import React, { useRef, useEffect, useState } from "react";

const AnimatedDiv = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle visibility based on intersection status
          setIsVisible(entry.isIntersecting);
          // We don't unobserve since we want the animation to happen every time
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  // Simple, minimal animation with 30px movement from bottom to top
  const animationStyle = isVisible
    ? {
        opacity: 1,
        transform: "translateY(0)",
        transition: `opacity 700ms ease-out, transform 700ms ease-out`,
        transitionDelay: `${delay}ms`,
      }
    : {
        opacity: 0,
        transform: "translateY(40px)",
        transition: "none",
      };

  return (
    <div ref={ref} style={animationStyle} className={className}>
      {children}
    </div>
  );
};

export default AnimatedDiv;
