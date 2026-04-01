"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation(animationClass = "fade-up") {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // Optionally stop observing once animated:
          // observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  // Return a class name string that applies the chosen animation class.
  // We'll spread this ref onto the element we want to animate.
  return { ref: elementRef, className: animationClass };
}
