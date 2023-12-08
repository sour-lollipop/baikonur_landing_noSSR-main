import { useRef, useEffect } from "react";
import Popup from "reactjs-popup";
import { PopupContent } from "./PopupContent";
import { popupData } from "../../data/popup";
import {ContentText} from "../../components"
export const Tourism = () => {
  const ref = useRef<any>();
  const closeTooltip = () => {
    if (ref.current) {
      ref.current.close();
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      closeTooltip();
    };

    // Добавляем обработчик события скролла при монтировании компонента
    window.addEventListener("scroll", handleScroll);

    // Убираем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="CH4" className="Tourism">
        <img
          src="/TStarts.svg"
          alt="TStarts"
          className="TStarts"
          width={804}
        draggable={false}
        height={500}
        />

        {popupData.map((data, index) => (
          <Popup
            key={index}
            ref={ref}
            trigger={<button className={data.className}></button>}
            modal
          >
            <PopupContent
              closePopup={closeTooltip}
              Plochadka={data.Plochadka}
              image_cards={data.image_cards}
              images={data.images}
              description={data.description}
            />
          </Popup>
        ))}
      </div>
      <p className='textToPressStar'>
        Нажмите на любую звездочку
      </p>
    </>
  );
};
export default Tourism;
