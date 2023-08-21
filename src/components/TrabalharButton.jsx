import React, { useState, useEffect } from "react";

const TrabalharButton = ({ duracao, dinheiro, onMoneyChange }) => {
  const [progress, setProgress] = useState(0);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (!working) {
      setProgress(0);
    }
  }, [working]);

  const handleWorkClick = () => {
    if (!working) {
      setWorking(true);
      let startTime = Date.now();
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const progressPercentage = (elapsedTime / duracao) * 100;

        if (progressPercentage <= 100) {
          setProgress(progressPercentage);
        } else {
          clearInterval(interval);
          setWorking(false);
          setProgress(0);
        }
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        onMoneyChange(dinheiro);
        console.log("Earning dinheiro:", dinheiro);

        setWorking(false);
        setProgress(0);
      }, duracao);
    }
  };

  return (
    <>
      <button
        onClick={handleWorkClick}
        disabled={working}
        type="submit"
        className="bg-[#29455b] ml-5 border border-black shadow-md shadow-[#060912] rounded-lg active:p-[1px]  hover:bg-[#4380b0] w-[120px]"
      >
        {working ? "Trabalhando..." : "Trabalhar"}
      </button>
      <progress value={progress} max="100"></progress>
    </>
  );
};

export default TrabalharButton;
