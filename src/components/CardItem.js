import React from "react";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

export function CardItem(props) {
  const { productName, price, productImg, id } = props.item;
  const { cardItem, addItem, removeItem, updateAmount } =
    useContext(ShopContext);
  return (
    <div className="card-item">
      <div className="card-img-container">
        <img src={productImg} className="card-img" />{" "}
      </div>
      <div className="card-info">
        <p>{productName}</p>
        <p>$ {price}</p>
        <div className="amount">
          <button onClick={() => removeItem(id)}>-</button>
          <input
            value={cardItem[id]}
            onChange={(e) => updateAmount(e.target.value, id)}
          />
          <button onClick={() => addItem(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
