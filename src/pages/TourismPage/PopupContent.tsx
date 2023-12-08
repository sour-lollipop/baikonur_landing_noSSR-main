/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {  useEffect, useState} from 'react';
import { gsap } from 'gsap';
import { TbXboxX } from "react-icons/tb";



interface PopupContentProps {
    closePopup: () => void;
    images: string[];
    image_cards: string[];
    description?: string;
    Plochadka?: boolean;
  }

 export const PopupContent: React.FC<PopupContentProps> = ({closePopup,Plochadka,images,image_cards,description}) =>
  {
    const [BigImage, setBigImage] = useState('defoult');

    function opacityAnimation(element:string): void{
        setBigImage(element)
        gsap.to('.big_image',{
            opacity:1,
            duration:3,
        })

    }
    useEffect(()=>{
        // reSizeImage(reversed)
        opacityAnimation(BigImage)
      })
  

    let image_defoult = 'https://lis.4dev.kz/anon/F2q7oUbTe1.png'
    return(
        <>
        <div className='popupContent'>
            <div className='mainPopupContent'>
                {Plochadka ? 
                    <img
                    src={image_defoult} 
                    alt='BigImage'
                    className={`big_image`}
                    width={470}
                    height={335.71}
        draggable={false}
        onClick={() => setBigImage('defoult')}
                    />
                    :
                    BigImage=='defoult' ?
                        <div className='popupImages'>
                        {[1, 2, 3, 4, 5, 6, 7, 8,9].map((num) => (
                            <img
                            key={num}
                            src={image_cards[num-1]}
                            alt={`image${num}`}
                            className={`PImage num_${num}`}
                            width={150}
                            height={150}
        draggable={false}
        onClick={() => opacityAnimation(images[num-1])}
                            />
                        ))}
                        </div>: <img
                                src={BigImage} 
                                alt='BigImage'
                                className={`big_image`}
                                width={470}
                                height={335.71}
        draggable={false}
        onClick={() => setBigImage('defoult')}
                            />
                }
                
                <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
            </div>
            <TbXboxX size= {50}
            onClick={BigImage === 'defoult' ? closePopup : () => setBigImage('defoult')}
            className='PopupButton'/>

        </div>
        </>
    );
  };
