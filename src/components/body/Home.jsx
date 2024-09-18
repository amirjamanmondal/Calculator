import React, { createContext, useState } from "react";
import Card from "./card/Card";
import { evaluate } from "mathjs";

const CalcContext = createContext();

const Home = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEquals = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (e) {
      setInput("Error");
    }
  };

  const handleElement = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };
  console.log(input);

  return (
    <div className="w-[260px] h-[400px] flex flex-col justify-between items-center bg-white border-2 border-purple-600 rounded-md drop-shadow-2xl">
      <input
        type="text"
        value={input}
        className="w-[250px] h-24 bg-slate-400 mt-2 rounded-md text-indigo-600 text-right text-3xl px-2 outline-none border-2 border-purple-600 shadow-lg"
        readOnly
      />
      <div className="w-[250px] h-full m-2 flex justify-center items-center flex-row gap-4 flex-wrap">
        <CalcContext.Provider
          value={{
            handleButtonClick,
            handleClear,
            handleEquals,
            handleElement,
          }}
        >
          <Card input={input} />
        </CalcContext.Provider>
      </div>
    </div>
  );
};

export default Home;
export { CalcContext };
