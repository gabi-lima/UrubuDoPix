import { useState, useEffect } from "react";
import TrabalharCard from "./components/TrabalharCard";
import ComprarCard from "./components/ComprarCard";
import { randomExponential } from "d3-random"; // Importar função específica

import "./index.css";
import urubu from "./assets/urubu1.png";

const exponentialRandom = randomExponential(2); // Configurar distribuição exponencial

const getSkewedRandom = (min, max) => {
  let randomNumber;
  do {
    randomNumber = exponentialRandom();
  } while (randomNumber > 1); // Limitar para o intervalo [0, 1]
  return Math.floor(min + (max - min) * randomNumber);
};

function App() {
  const [activeTab, setActiveTab] = useState("trabalhar"); // Estado para controlar a aba ativa
  const [money, setMoney] = useState("");
  const [itensComprados, setItensComprados] = useState({});

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleMoneyChange = (amount) => {
    setMoney((prevMoney) => parseFloat(prevMoney + amount));
  };

  const handleMoneyBuy = (newMoney) => {
    setMoney(newMoney);
  };
  const handleItemBoughtChange = (itemTitle) => {
    setItensComprados((prevItems) => {
      return { ...prevItems, [itemTitle]: true };
    });
  };

  useEffect(() => {
    // Load money value from localStorage on component mount
    const savedMoney = localStorage.getItem("money");
    if (savedMoney) {
      setMoney(parseFloat(savedMoney));
    }
  }, []);

  useEffect(() => {
    // Save money value to localStorage whenever it changes
    localStorage.setItem("money", money);
  }, [money]);

  useEffect(() => {
    // Load itensComprados value from localStorage on component mount
    const savedItems = localStorage.getItem("itensComprados");
    if (savedItems) {
      setItensComprados(JSON.parse(savedItems));
    }
  }, []);

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
                money={"$50"}
                tempoBotao={6000}
                dinheiroBotao={50}
                onMoneyChange={handleMoneyChange}
              />
              {itensComprados["bmx muito boa para freestyle"] && (
                <TrabalharCard
                  title="Bater Carteira"
                  money={"$10~$100"}
                  tempoBotao={3500}
                  dinheiroBotao={getSkewedRandom(0, 100)}
                  onMoneyChange={handleMoneyChange}
                />
              )}

              {itensComprados["Galo de Rinha"] && (
                <TrabalharCard
                  title="Por galo para brigar"
                  money={"-$2k~$2k"}
                  tempoBotao={7500}
                  dinheiroBotao={getSkewedRandom(-2000, 2000)}
                  onMoneyChange={handleMoneyChange}
                />
              )}
              {itensComprados["Moto G2 com a tela trincada"] && (
                <TrabalharCard
                  title="Dar Golpes"
                  money={"-10k~$10k"}
                  tempoBotao={15000}
                  dinheiroBotao={getSkewedRandom(-3000, 10000)}
                  onMoneyChange={handleMoneyChange}
                />
              )}
            </>
          ) : (
            <>
              <ComprarCard
                title="bmx muito boa para freestyle"
                valor={350}
                money={money}
                onMoneyChange={handleMoneyBuy}
                onItemBoughtChange={handleItemBoughtChange}
                itensComprados={itensComprados}
              />
              <ComprarCard
                title="Galo Indio para Rinhas"
                valor={1500}
                money={money}
                onMoneyChange={handleMoneyBuy}
                onItemBoughtChange={handleItemBoughtChange}
                itensComprados={itensComprados}
              />
              <ComprarCard
                title="Moto G2 com a tela trincada"
                valor={4300}
                money={money}
                onMoneyChange={handleMoneyBuy}
                onItemBoughtChange={handleItemBoughtChange}
                itensComprados={itensComprados}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
