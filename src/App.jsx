import { useState } from "react";
import TrabalharCard from "./components/TrabalharCard";

import "./index.css";
import urubu from "./assets/urubu1.png";

function App() {
  const [progress, setProgress] = useState(0);
  const [working, setWorking] = useState(false);

  const handleWorkClick = () => {
    setWorking(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          setWorking(false);
          return 0;
        }
      });
    }, 50); // Atualiza a cada 50ms

    setTimeout(() => {
      clearInterval(interval);
      setWorking(false);
      setProgress(0);
    }, 5000); // Para depois de 5 segundos
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
        </div>
        <div className="w-[80%] h-[50%] bg-[#0f1c2d] mt-10 shadow-[5px_5px_50px_3px] rounded-md flex flex-col items-center">
          <div className=" bg-[#3a668b] w-full flex flex-row justify-between  rounded-md">
            <h2 className=" h-8  w-[100%] text-center border border-black hover:bg-[#4380b0] transition-all cursor-pointer active:p-2">
              Trabalhar
            </h2>
            <h2 className=" h-8 w-[100%] text-center border border-black hover:bg-[#4380b0] transition-all cursor-pointer active:p-2">
              Comprar
            </h2>
          </div>
          {/* Aba Trabalhar */}

          <TrabalharCard title="Bater uma Laje" tempoBotao={10000} />
          <TrabalharCard title="Bater Carteira" tempoBotao={10} />
          <TrabalharCard title="Bater uma Laje" tempoBotao={1000} />
        </div>
      </div>
    </>
  );
}

export default App;
