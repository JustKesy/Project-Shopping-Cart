import React from "react";
import { useState, createContext } from "react";
import { Products } from "../asset/products";

export const ShopContext = createContext(null);

function createCardItem() {
  let card = {};
  for (let i = 1; i <= Products.length; i++) {
    card[i] = 0;
  }
  return card;
}

export function ShopContextPrvider(props) {
  const [cardItem, setCardItem] = useState(createCardItem());

  function addItem(itemId) {
    setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeItem(itemId) {
    setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function updateAmount(amount, itemId) {
    setCardItem((prev) => ({ ...prev, [itemId]: amount }));
  }

  function totalAmount() {
    let totalAmount = 0;
    for (let item in cardItem) {
      if (cardItem[item] > 0) {
        let itemInfo = Products.find((product) => product.id === +item);
        totalAmount += cardItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  const contextData = {
    cardItem,
    addItem,
    removeItem,
    updateAmount,
    totalAmount,
  };

  return (
    <ShopContext.Provider value={contextData}>
      {props.children}
    </ShopContext.Provider>
  );
}
