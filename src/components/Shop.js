import React from "react";
import { Products } from "../asset/products";
import { ShopItem } from "./ShopItem";

export function Shop(props) {
  return (
    <div className="shop">
      <h1 className="tittle">~Games~</h1>
      <div className="products">
        {Products.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
