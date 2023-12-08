import React, { useEffect, useState } from "react";
import "./stars.scss";

function generateBoxShadows(count: number) {
  let shadows = "";
  for (let i = 0; i < count; i++) {
    shadows += `${Math.random() * 2000}px ${Math.random() * 6000}px #FFF, `;
  }
  return shadows.slice(0, -2);
}

export const Background = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [smallStars, setSmallStars] = useState("");
  const [mediumStars, setMediumStars] = useState("");
  const [bigStars, setBigStars] = useState("");

  useEffect(() => {
    setSmallStars(generateBoxShadows(700));
    setMediumStars(generateBoxShadows(200));
    setBigStars(generateBoxShadows(100));
  }, []);

  return (
    <div id="container">
      <div id="stars" style={{ boxShadow: smallStars }}></div>
      <div id="stars2" style={{ boxShadow: mediumStars }}></div>
      <div id="stars3" style={{ boxShadow: bigStars }}></div>
      <div id="stars4" style={{ boxShadow: bigStars }}></div>

      {children}
    </div>
  );
};
