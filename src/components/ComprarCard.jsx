import React from "react";

const ComprarCard = ({ title, valor }) => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center mt-4 bg-white w-[90%] h-[90px] rounded-md">
      <h2 className="ml-2"> {title} </h2>
      <h2 className="text-green-500 mr-12 text-2xl font-bold"> ${valor}</h2>
      <button
        type="submit"
        className="bg-[#29455b] ml-5 border border-black shadow-md shadow-[#060912] rounded-lg active:p-[1px]  hover:bg-[#4380b0] w-[120px]"
      >
        Comprar
      </button>
    </div>
  );
};

export default ComprarCard;
