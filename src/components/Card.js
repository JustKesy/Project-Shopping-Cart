import React from "react";
import { Products } from "../asset/products";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { CardItem } from "./CardItem";
import { Link } from "react-router-dom";

export function Card() {
  const { cardItem, totalAmount } = useContext(ShopContext);

  return (
    <div className="card">
      <h1>Card Items:</h1>
      <div className="card-items">
        {Products.map((item) => {
          if (cardItem[item.id] !== 0) {
            return <CardItem key={item.id} item={item} />;
          }
        })}
      </div>
      {totalAmount() > 0 ? (
        <div className="conclusion">
          <p className="total-amount">Total: ${totalAmount()}</p>
          <div className="con-btns">
            <Link to="/shop">Back To Shop</Link>
            <Link>Pay 💰</Link>
          </div>
        </div>
      ) : (
        <h1>Card is Empty !</h1>
      )}
    </div>
  );
}
