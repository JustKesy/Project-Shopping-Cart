import React from "react";
import { Products } from "./products";
import { ShopItem } from "./shopItem";

export function Shop() {
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
