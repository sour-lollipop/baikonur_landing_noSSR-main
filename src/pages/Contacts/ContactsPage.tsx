/* eslint-disable jsx-a11y/img-redundant-alt */
"use client";
import React, { useEffect,useState } from "react";
import { gsap } from "gsap";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import axios from 'axios';

export const Contact = () => {
  let image = "https://lis.4dev.kz/anon/5kk1245zl8.png";
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post('https://baikonur-test.5dev.kz/Auth/SendFeedback', {
        sender: email,
        body: question,
      });

      console.log('Ответ от сервера:', response.data);
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };

  // useEffect(() => {
  //   gsap.to(".imageSputnik", {
  //     duration: 50,
  //     repeat: -1,
  //     ease: "none",
  //     x: 1600,
  //     y: -300,
  //     scale: 5,
  //     rotation: 0,
  //     zIndex: -1,
  //   });
  // });
  return (
    <>
      <div id="CH5" className="ContactPage">
        <div className="Side">
          <h2 className="QA_title">Есть вопросы?</h2>
          <input 
            type="text" 
            placeholder="Введите Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          <textarea 
            placeholder="Введите ваш вопрос или предложение"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}></textarea>
          <div className="QAbutton" onClick={handleFormSubmit}>Отправить</div>
        </div>

        <div className="Side">
          <h2 className="QA_title">Способы связи с нами:</h2>
          <ul className="contactsLinks">
            {/* <li>
              <span style={{ fontSize: window.innerWidth <= 700 ? "30px" :"50px" }}>
                <BsInstagram />
              </span>
              <a className="ContactLink">#cosmodrombaikonur</a>
            </li> */}

            {/* <li>
            <span style={{ fontSize: window.innerWidth <= 700 ? "30px" :"50px" }}>
                <BsWhatsapp />
              </span>
              <a className="ContactLink">#cosmodrombaikonur</a>
            </li> */}

            <li>
            <span style={{ fontSize: window.innerWidth <= 700 ? "30px" :"50px" }}>
                <HiOutlineMail />
              </span>
              <a href="mailto:bayterek@bayterek.kz" className="ContactLink">bayterek@bayterek.kz</a>
            </li>

            <li>
            <span style={{ fontSize: window.innerWidth <= 700 ? "30px" :"50px" }}>
                <BsTelephone />
              </span>
              <a className="ContactLink">+7(7172) 28-06-02</a>
            </li>

            <li>
            <span style={{ fontSize: window.innerWidth <= 700 ? "30px" :"50px" }}>
                <BsTelephone />
              </span>
              <a className="ContactLink">+7(33622) 2-35-44</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <img
        src={image}
        alt="image"
        className={`imageSputnik`}
        width={79}
        height={50}
      /> */}
      <a href="https://www.gosu.kz" className="gosu">GOSU © 2023</a>

    </>
  );
};
export default Contact;
{
  /* <h2 className="contacts-header">Есть вопросы?</h2> */
}

{
  /* <input type="text" placeholder="Введите Email" />
<textarea placeholder="Введите ваш вопрос или предложение"></textarea> */
}

{
  /* <div>
    <h2 className="contacts-header">Способы связаться с нами:</h2>
  
  <ul className="external-links">
    <li>
      <span style={{ fontSize: "50px" }}>
        <BsInstagram />
      </span>
      #cosmodrombaikonur
    </li>
    <li>
      <span style={{ fontSize: "50px" }}>
        <BsWhatsapp />
      </span>
      ukmpts-baikonur@mail.ru
    </li>
    <li>
      <span style={{ fontSize: "50px" }}>
        <HiOutlineMail />
      </span>
      #cosmodrombaikonur
    </li>
    <li>
      <span style={{ fontSize: "43px" }}>
        <BsTelephone />
      </span>
      8 (33622) 7 58 00
    </li>
  </ul>
</div> */
}
