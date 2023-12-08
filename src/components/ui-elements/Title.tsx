import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Title = () => {
  
  const animatedElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    
    if (animatedElement.current) {
      gsap.to(animatedElement.current, {
        duration: 5, 
        x: window.innerWidth <= 700 ? 0 : 100,  
        y: window.innerWidth <= 700 ? 100 : 0,  
        opacity: 1, 
        ease: "power3.out",
      });
    }
  }
  , []); 

  return <div  ref={animatedElement} className='title'>Baikonur</div>;
};
