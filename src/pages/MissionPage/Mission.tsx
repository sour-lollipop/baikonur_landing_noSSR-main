/* eslint-disable jsx-a11y/img-redundant-alt */
import {  useEffect} from 'react';
import { gsap } from 'gsap';

export const Mission = () => {

  let image = 'https://lis.4dev.kz/anon/efucDQpSXn.png'

  useEffect(()=>{
    gsap.fromTo('.image', { 
      rotation: 360, 
      duration: 50, 
      // repeat: -1, 
      ease: 'none',
      zIndex:5,
      x: window.innerWidth <= 700 ? 0 : 400,  

    }, { 
      rotation: -360, 
      duration: 50, 

      yoyo: true, 
      repeat: -1, 
      ease: 'none',
      zIndex:5,
      x: 0
    });

    gsap.to('.ttitle_container', { 
      rotateX: -360, 
      duration: 35, 
      repeat: -1, 
      ease: 'none', 
      zIndex:10,
    });
    gsap.fromTo('.ttitle_container', { 
      rotateY: 6, 
      rotate: -8 
    },{ 
      rotateY: -6, 
      rotate: 7,
      duration: 35, 
      yoyo: true, 
      repeat: -1, 
      ease: 'sine.inOut' 
    });
  })

    return (<>
    <div id='CH3' className='mission'>
      <div className='ttitle_container'>
        <div className='ttitle ttitle-front'>
          <p className='word'>
            Мы верим в важность сохранения культурного и исторического наследия Байконура и его уникальных туристических объектов. 
          </p>
        </div>
        <div className='ttitle ttitle-back'>
          <p className='word'>
          Мы верим в важность сохранения культурного и исторического наследия Байконура и его уникальных туристических объектов. 
          </p>
        </div>
        <div className='ttitle ttitle-bottom'>
          <p className='word'>
            Нашей миссией является вдохновить посетителей не только посетить эти места, но и узнать об их богатой истории и культурном значении.  
          </p>
        </div>
        <div className='ttitle ttitle-top'>
          <p className='word'>
          Мы стремимся сделать Байконур доступным и привлекательным для всех, а также содействовать его сохранению и развитию для будущих поколений.
          </p>
        </div>
      </div>
      <img  
        draggable={false}
        src={image} 
        alt='image'
        className={`image`}
        width={1000}
        height={600}
    />
    </div>
    
    </>);
  };
  export default Mission;
  