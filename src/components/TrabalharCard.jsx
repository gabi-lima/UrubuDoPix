import React from "react";
import TrabalharButton from "./TrabalharButton";

const TrabalharCard = ({
  title,
  money,
  tempoBotao,
  dinheiroBotao,
  onMoneyChange,
}) => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center mt-4 bg-white w-[90%] h-[90px] rounded-md">
      <h2 className="ml-2"> {title} </h2>
      <h2 className="text-green-500"> ${money}</h2>
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
