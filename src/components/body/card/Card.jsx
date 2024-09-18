import React, { useContext } from "react";
import { CalcContext } from "../Home";
const numbers = [
  1,
  2,
  3,
  "*",
  "C",
  4,
  5,
  6,
  "-",
  "/",
  7,
  8,
  9,
  "+",
  "%",
  0,
  ".",
  "X",
  "=",
  "^",
];

const Card = (input) => {
  const { handleButtonClick, handleClear, handleEquals, handleElement } =
    useContext(CalcContext);

  return (
    <>
      {numbers.map((item, index) => (
        <input
          type="button"
          value={item}
          key={index}
          onClick={() =>
            item === "="
              ? handleEquals(item)
              : item === "C"
              ? handleClear(item)
              : item === "X"
              ? handleElement(item)
              : handleButtonClick(item)
          }
          className="w-8 h-8 flex justify-center items-center bg-purple-300 drop-shadow-lg rounded-full "
        />
      ))}
    </>
  );
};

export default Card;
