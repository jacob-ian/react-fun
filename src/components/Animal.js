import "./Animal.css";
import { useState } from "react";

export default function Animal(props) {
  const [color, setColor] = useState(getRandomColor());

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomColor() {
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return `rgba(${red},${green},${blue}, 0.5)`;
  }

  function handleClick(e) {
    setColor(getRandomColor());
  }

  return (
    <div
      className="animal"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {props.name}
    </div>
  );
}
