import React from "react";

export function ShopItem(props) {
  const { productName, price, productImg } = props.item;
  return (
    <div className="shop-item">
      <div className="product-img-container">
        <img src={productImg} className="product-img" />
      </div>
      <p>{productName}</p>
      <p>$ {price}</p>
      <button className="addBtn" onClick={() => alert("Polako---Bicee---")}>
        Add to Card
      </button>
    </div>
  );
}
