import { useState } from "react";
import TrabalharCard from "./components/TrabalharCard";

import "./index.css";
import urubu from "./assets/urubu1.png";

function App() {
  const [progress, setProgress] = useState(0);
  const [working, setWorking] = useState(false);
  const [activeTab, setActiveTab] = useState("trabalhar"); // Estado para controlar a aba ativa
  const [money, setMoney] = useState(50.0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleMoneyChange = (amount) => {
    setMoney((prevMoney) => prevMoney + amount);
  };

  return (
    <>
      <div className="bg-[#060912] w-screen h-screen flex flex-col items-center ">
        <div className="text-4xl text-white font-bold flex flex-col items-center w-full mt-10">
          <img
            src={urubu}
            className="rounded-full w-[200px] h-[200px] shadow-2xl shadow-[#295174]/50 transition-all hover:shadow-[2px_2px_2px_2px] hover:w-[210px] hover:h-[210px] "
            alt="Urubuzao"
          />
          <h1 className="mt-20"> Urubu do Pix</h1>
          <h2 className="text-green-500"> ${money}</h2>
        </div>
        <div className="w-[80%] h-[50%] bg-[#0f1c2d] mt-10 shadow-[5px_5px_50px_3px] rounded-md flex flex-col items-center">
          <div className=" bg-[#3a668b] w-full flex flex-row justify-between  rounded-md">
            <h2
              className={`h-8 w-[50%] text-center border border-black hover:bg-[#4380b0] transition-all cursor-pointer ${
                activeTab === "trabalhar" ? "bg-[#4380b0]" : ""
              } active:p-2`}
              onClick={() => handleTabClick("trabalhar")}
            >
              Trabalhar
            </h2>
            <h2
              className={`h-8 w-[50%] text-center border border-black hover:bg-[#4380b0] transition-all cursor-pointer ${
                activeTab === "comprar" ? "bg-[#4380b0]" : ""
              } active:p-2`}
              onClick={() => handleTabClick("comprar")}
            >
              Comprar
            </h2>
          </div>
          {/* Aba Trabalhar */}
          {activeTab === "trabalhar" ? (
            <>
              <TrabalharCard
                title="Bater uma Laje"
                tempoBotao={100}
                dinheiroBotao={10}
                onMoneyChange={handleMoneyChange}
              />
              <TrabalharCard
                title="Bater Carteira"
                tempoBotao={100}
                dinheiroBotao={5}
                onMoneyChange={handleMoneyChange}
              />
              <TrabalharCard
                title="Bater uma Laje"
                tempoBotao={100}
                dinheiroBotao={25}
                onMoneyChange={handleMoneyChange}
              />
            </>
          ) : (
            <h1> Teste </h1>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
