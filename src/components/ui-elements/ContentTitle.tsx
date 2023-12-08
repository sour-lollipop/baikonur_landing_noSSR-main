import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const ContentTitle= ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  const animatedElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (animatedElement.current) {
      gsap.to(animatedElement.current, {
        duration: 2, // продолжительность анимации в секундах
        x: window.innerWidth <= 700 ? 0 : -100,  // анимация будет двигать элемент на 100 пикселей по горизонтали
        y: window.innerWidth <= 700 ? -150 : 0,  // анимация будет двигать элемент на 100 пикселей по горизонтали
        opacity: 1, // также изменяем прозрачность элемента
        ease: "power3.out", // тип перехода (easing) 
      });
    }
  }, []); 

  return <div ref={animatedElement} className='contentTitle'>{children}</div>;
};

