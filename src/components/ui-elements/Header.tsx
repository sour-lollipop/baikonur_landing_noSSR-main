/* eslint-disable jsx-a11y/anchor-is-valid */
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export const Header = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const scrollTo = (target: string) => 
    gsap.to(window, {
      duration:1, 
      scrollTo: target, 
      x: 0,
      ease: 'power1.inOut' ,
      // horizontal: false,
    });
  return (
    <div className="header-container">
      <ul className="nav">
        <li><a onClick={()=> scrollTo('#CH1')}>Главная</a></li>
        <li><a onClick={()=> scrollTo('#CH2')}>История</a></li>
        <li><a onClick={()=> scrollTo('#CH3')}>Миссии</a></li>
        <li><a onClick={()=> scrollTo('#CH4')}>Туризм</a></li>
        <li><a onClick={()=> scrollTo('#CH5')}>Контакты</a></li>
      </ul>
    </div>
  );
};

