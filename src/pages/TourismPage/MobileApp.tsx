import { useEffect } from "react";
import { gsap } from "gsap";


export const MobileApp = () => {
  let image = "https://lis.4dev.kz/anon/es5GyIwSZZ.png";

  useEffect(() => {
    gsap.fromTo(
      ".imageMobile",
      {
        // rotation: 15,
        duration: 5,
        rotateY: 2,
        rotate: -2,
        ease: "none",
      },
      {
        // rotation: -15,
        rotateY: -2,
        rotate: 2,
        yoyo: true,
        duration: 5,
        repeat: -1,
        ease: "none",
      }
    );
  });

  return (
    <div className="mobile">
        {window.innerWidth <= 700 ? 
          <>
          <div className="mobileApp">
              <h1>Присоединитесь к путешествию</h1>
              <h2>
                в историю космических достижений на Байконуре, где каждый шаг
                оставляет след в бесконечности космоса.
              </h2>
              <div className="mobileContentContainer">  
                <div className="downloadIcons">
                  <img
                    src="/I App Store.svg"
                    alt="IStore"
                    className="IStore"
                    width={150}
                    height={44.44}
        draggable={false}
        />
                  <img
                    src="/Google Play.svg"
                    alt="GooglePlay"
                    className="GooglePlay"
                    width={150}
                    height={44.44}
        draggable={false}
        />
                </div>
                <img
                  src={image}
                  alt="imageMobile"
                  className={`imageMobile`}
        draggable={false}
        />
              </div>
            </div>
          </> : 
          <>
            <div className="mobileApp">
              <h1>Присоединитесь к путешествию</h1>
              <h2>
                в историю космических достижений на Байконуре, где каждый шаг
                оставляет след в бесконечности космоса.
              </h2>
              <div className="button">Присоединиться</div>
              <h3>С помощью нашего мобильного приложения:</h3>
              <div>
                <img
                  src="/I App Store.svg"
                  alt="IStore"
                  className="IStore"
                  width={250}
                  height={74.07}
        draggable={false}
        />
                <img
                  src="/Google Play.svg"
                  alt="GooglePlay"
                  className="GooglePlay"
                  width={250}
                  height={74.07}
        draggable={false}
        />
              </div>
            </div>
            <img
              src={image}
              alt="imageMobile"
              className={`imageMobile`}
              width={370}
              height={600}
        draggable={false}
        />
          </>}

      
    </div>
  );
};
