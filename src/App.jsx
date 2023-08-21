import { useState } from "react";
import TrabalharCard from "./components/TrabalharCard";
import ComprarCard from "./components/ComprarCard";
import { randomExponential } from "d3-random"; // Importar função específica

import "./index.css";
import urubu from "./assets/urubu1.png";

const exponentialRandom = randomExponential(1); // Configurar distribuição exponencial

const getSkewedRandom = (min, max) => {
  let randomNumber;
  do {
    randomNumber = exponentialRandom();
  } while (randomNumber > 1); // Limitar para o intervalo [0, 1]
  return Math.floor(min + (max - min) * randomNumber);
};

function App() {
  const [activeTab, setActiveTab] = useState("trabalhar"); // Estado para controlar a aba ativa
  const [money, setMoney] = useState(0.0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleMoneyChange = (amount) => {
    setMoney((prevMoney) => prevMoney + amount);
  };

  function getTriangularRandom(min, max) {
    const baseRandom = Math.random();
    const triangularRandom = Math.sqrt(baseRandom);
    return min + (max - min) * triangularRandom;
  }

  function pegarNumeroAleatorio(min, max, fatorProbabilidade) {
    const probabilidade = Math.random() ** fatorProbabilidade;

    const valorFinal = min + probabilidade * (max - min);

    return Math.floor(valorFinal);
  }

  const baterCarteiraDinheiro = pegarNumeroAleatorio(10, 300, 10);
  console.log(baterCarteiraDinheiro);

  const golpesDinheiro = pegarNumeroAleatorio(0, 99999, 2);
  console.log(golpesDinheiro);

  function handleCustomAlert() {
    alert("Você pode perder dinheiro...");
  }

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
                money={50}
                tempoBotao={1000}
                dinheiroBotao={50}
                onMoneyChange={handleMoneyChange}
              />
              <TrabalharCard
                title="Bater Carteira"
                money={"10 - $100"}
                tempoBotao={100}
                dinheiroBotao={baterCarteiraDinheiro}
                onMoneyChange={handleMoneyChange}
              />
              <TrabalharCard
                title="Dar Golpes"
                money={"0 - $99999"}
                tempoBotao={100}
                dinheiroBotao={getSkewedRandom(-60000, 99999)}
                onMoneyChange={handleMoneyChange}
                onAlertClick={handleCustomAlert}
              />
              <TrabalharCard
                title="Por galo para brigar"
                tempoBotao={4300}
                dinheiroBotao={25}
                onMoneyChange={handleMoneyChange}
              />
            </>
          ) : (
            <>
              <ComprarCard title="bmx muito boa para freestyle" valor={1200} />
              <ComprarCard title="Moto G2 com a tela trincada" valor={6300} />
              <ComprarCard title="Galo de Rinha" />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
