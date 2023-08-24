import React from "react";
import TrabalharButton from "./TrabalharButton";

const TrabalharCard = ({
  title,
  money,
  tempoBotao,
  dinheiroBotao,
  onMoneyChange,
  onAlertClick,
}) => {
  const handleButtonClick = () => {
    onMoneyChange(dinheiroBotao);
    onAlertClick();
  };
  return (
    <div className="w-80% flex flex-wrap justify-between items-center mt-4 bg-white w-[90%] h-[90px] rounded-md">
      <div className="w-[100px]">
        <h2 className="ml-2"> {title} </h2>
        <h2 className="text-green-500 mr-12 text-2xl font-bold ml-10">
          {" "}
          {money}
        </h2>
      </div>

      <TrabalharButton
        onClick={handleButtonClick}
        duracao={tempoBotao}
        dinheiro={dinheiroBotao}
        onMoneyChange={onMoneyChange}
      />
    </div>
  );
};

export default TrabalharCard;
