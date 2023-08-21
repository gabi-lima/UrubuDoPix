import React from "react";
import TrabalharButton from "./TrabalharButton";

const TrabalharCard = ({ title, tempoBotao, dinheiroBotao, onMoneyChange }) => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center mt-4 bg-white w-[90%] h-[90px] rounded-md">
      <h2 className="ml-2"> {title} </h2>
      <TrabalharButton
        onClick={() => handleMoneyClick(dinheiroBotao)}
        duracao={tempoBotao}
        dinheiro={dinheiroBotao}
        onMoneyChange={onMoneyChange}
      />
    </div>
  );
};

export default TrabalharCard;
