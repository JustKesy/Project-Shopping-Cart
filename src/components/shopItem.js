import React from "react";

export function ShopItem(props) {
  const { productName, price, productImg } = props.item;
  return (
    <div className="shop-item">
      <img src={productImg} className="product-img" />
      <p c>{productName}</p>
      <p>$ {price}</p>
      <button className="addBtn" onClick={() => alert("Polako---Bicee---")}>
        Add to Card
      </button>
    </div>
  );
}
