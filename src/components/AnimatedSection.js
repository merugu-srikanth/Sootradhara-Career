"use client";

import { useScrollAnimation } from "./useScrollAnimation";

export default function AnimatedSection({ 
  children, 
  animation = "fade-up", 
  className = "" 
}) {
  const { ref, className: animClass } = useScrollAnimation(animation);

  return (
    <div ref={ref} className={`${animClass} ${className}`}>
      {children}
    </div>
  );
}
