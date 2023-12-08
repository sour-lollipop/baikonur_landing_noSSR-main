import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ContentText, ContentTitle } from "../../components";

export const History = () => {
  let cosmonaut_T = "https://lis.4dev.kz/anon/KYhOTQGdUD.png";
  let cosmonaut_G = "https://lis.4dev.kz/anon/0Zs4AWNYye.png";
  let rocket = "https://lis.4dev.kz/anon/luja2nNhdQ.png";
  let sputnik = "https://lis.4dev.kz/anon/paZpFQfvNV.png";
  const [reversed, setReversed] = useState(".rocket");
  const [temp, setTemp] = useState("defoult");
  
  const elements: string[] = [
    ".rocket",
    ".sputnik",
    ".cosmonaut_G",
    ".cosmonaut_T",
  ];

  function printArrayFromElement(element: string): void {
    let index = elements.indexOf(element);
    let newArray = elements.slice(index).concat(elements.slice(0, index));

    if (index !== -1) {
      // console.log(newArray.join(", "));
      gsap.to(newArray[0], {
        duration: 5,
        x: window.innerWidth <= 700 ? 15 : 50,  
        zIndex: 100,
        rotate: 0,
        ease: "power3.out",
        scale: 8,
      });

      gsap.to(newArray[1], {
        duration: 5,
        x: window.innerWidth <= 700 ? 10 : 20,  
        zIndex: 90,
        rotate: 170,
        ease: "power3.out",
        scale: 8,
      });

      gsap.to(newArray[2], {
        duration: 5,
        x: window.innerWidth <= 700 ? 0 : -10,  
        zIndex: 80,
        rotate: -15,
        ease: "power3.out",
        scale: 8,
      });

      gsap.to(newArray[3], {
        duration: 5,
        x: window.innerWidth <= 700 ? -5 : -40,  
        zIndex: 70,
        rotate: -23,
        ease: "power3.out",
        scale: 8,
      });
    } else {
      console.log("Элемент не найден в массиве.");
    }
  }

  function pressImage(element: string): void {
    if(element == reversed){
      let index = elements.indexOf(element);
      let newArray = elements.slice(index).concat(elements.slice(0, index));
      setReversed(newArray[1])

    }
    else{
      setReversed(element)

    }
  }

  useEffect(() => {
    
    printArrayFromElement(reversed);

    gsap.fromTo(
      ".animateCards",
      {
        rotateY: 6,
        rotate: -8,
      },
      {
        rotateY: -6,
        rotate: 7,
        duration: 20,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      }
    );
  });

  return (
    <div id="CH2" className="history">
      <div className="animateCards">
        {/* <Image alt='groupPicture' src={'https://lis.4dev.kz/anon/fNeTzBWQ2g.png'} className='cardG' width={644} height={580}/> */}
        <img
        draggable={false}
          alt="rocket"
          src={rocket}
          width={400}
          height={395}
          className="ACard rocket"
          onClick={() => pressImage(".rocket")}
        />
        <img
        draggable={false}

          alt="sputnik"
          src={sputnik}
          width={400}
          height={395}
          className="ACard sputnik"
          onClick={() => pressImage(".sputnik")}
        />
        <img
        draggable={false}

          alt="cosmonaut_G"
          src={cosmonaut_G}
          width={400}
          height={395}
          className="ACard cosmonaut_G"
          onClick={() => pressImage(".cosmonaut_G")}
        />
        <img
        draggable={false}

          alt="cosmonaut_T"
          src={cosmonaut_T}
          width={400}
          height={395}
          className="ACard cosmonaut_T"
          onClick={() => pressImage(".cosmonaut_T")}
        />
      </div>
      <div className="historytext">
        {reversed === ".rocket" ? (
          <>
            <ContentTitle>Байконыр Космическое наследие</ContentTitle>
            <ContentText>
              В середине XX века, на безбрежных просторах казахской степи,
              родился космодром Байконур.{" "}
            </ContentText>
          </>
        ) : reversed === ".sputnik" ? (
          <>
            <ContentTitle>
              <br />
              Спутник-1
            </ContentTitle>
            <ContentText>
              В 1957 году в небо взмыл &quot;Спутник-1&quot;
              <br /> первый искусственный спутник Земли.
            </ContentText>
          </>
        ) : reversed === ".cosmonaut_G" ? (
          <>
            <ContentTitle>
              <br />
              Юрий Гагарин
            </ContentTitle>
            <ContentText>
              В 1961 году стартовал &quot;Восток-1&quot;, на борту которого Юрий
              Гагарин совершил первый полет в космос, открыв новую страницу в
              истории человечества.
            </ContentText>
          </>
        ) : reversed === ".cosmonaut_T" ? (
          <>
            <ContentTitle>
              <br />
              Токтар Аубакиров
            </ContentTitle>
            <ContentText>
              Первый космонавт из казахов. Совершил полет в космос 2 октября
              1991 года
            </ContentText>
          </>
        ) : null}
      </div>
    </div>
  );
};
