/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { TbChevronsDown } from "react-icons/tb";

export const ScrollButton = () => {
  gsap.registerPlugin(ScrollToPlugin);
  let pos_y = 0
  const handleScroll  = () => {
      gsap.to(window, { duration: 1, scrollTo: { y: pos_y+750,} });
      pos_y+=750
      console.log(pos_y)
      //3750
      if (pos_y >= 3750){
        gsap.to('.Scroll_button', {
          duration: 1,
          rotate: 180,
        });
      }
      // if (pos_y == 4500){
      //   gsap.to('.Scroll_button', {
      //     duration: 2,
      //     rotate: 0,
      //   });
      // }
      if (pos_y > 3750){
        gsap.to(window, { duration: 1, scrollTo: { y: 0,} });
        pos_y = 0
        gsap.to('.Scroll_button', {
          duration: 1,
          rotate: 0,
        });
      }
    };  
  // useEffect(()=>{
  //   if (pos_y >= 3000){
  //     gsap.to('.Scroll_button', {
  //       duration: 2,
  //       rotate: 180,
  //     });
  //   }
  // }, [pos_y])
  return (
    <div className="Scroll" >
      <TbChevronsDown color='white' className='Scroll_button' onClick={handleScroll }/>
    </div>
  );
};
