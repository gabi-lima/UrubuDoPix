import React, { useState, useEffect } from "react";

const ComprarCard = ({
  title,
  valor,
  money,
  onMoneyChange,
  onItemBoughtChange,
  itensComprados,
}) => {
  const [itemComprado, setItemComprado] = useState(false);

  const handleBuyClick = () => {
    if (money >= valor) {
      onMoneyChange(money - valor);
      setItemComprado(true);

      // Salvar o item comprado no localStorage
      const itemsSalvos = localStorage.getItem("itensComprados");
      const itemsToUpdate = itemsSalvos ? JSON.parse(itemsSalvos) : {};
      itemsToUpdate[title] = true;
      localStorage.setItem("itensComprados", JSON.stringify(itemsToUpdate));
      onItemBoughtChange(title);
    } else {
      // Display some message to indicate insufficient funds
      console.log("You don't have enough money to buy this item.");
    }
  };
  useEffect(() => {
    console.log("Carregando itens do localStorage...");

    const itemsSalvos = localStorage.getItem("boughtItems");
    console.log("Itens salvos:", itemsSalvos);

    if (itemsSalvos) {
      const parsedItems = JSON.parse(itemsSalvos);
      if (parsedItems[title]) {
        setItemComprado(true);
      }
    }
    if (itensComprados[title]) {
      setItemComprado(true);
    }
  }, [title, itensComprados]);

  return (
    <div className="w-[80%] flex flex-wrap justify-between items-center mt-4 bg-white w-[90%] h-[90px] rounded-md">
      <div>
        <h2 className="ml-2"> {title} </h2>
        <h2 className="text-green-500 ml-10 text-2xl font-bold"> ${valor}</h2>
      </div>

      {itemComprado ? (
        <p className="text-green-500 ml-10 text-2xl font-bold">Comprado!</p>
      ) : (
        <button
          type="button"
          onClick={handleBuyClick}
          className="bg-[#29455b] ml-5 border border-black shadow-md shadow-[#060912] rounded-lg active:p-[1px] hover:bg-[#4380b0] w-[120px]"
        >
          Comprar
        </button>
      )}
    </div>
  );
};

export default ComprarCard;
