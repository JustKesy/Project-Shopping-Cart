import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export function ShopItem(props) {
  const { productName, price, productImg, id } = props.item;
  const { cardItem, addItem } = useContext(ShopContext);
  return (
    <div className="shop-item">
      <div className="product-img-container">
        <img src={productImg} className="product-img" />
      </div>
      <p>{productName}</p>
      <p>$ {price}</p>
      <button className="addBtn" onClick={() => addItem(id)}>
        Add to Card {cardItem[id] > 0 && <>({cardItem[id]})</>}
      </button>
    </div>
  );
}
