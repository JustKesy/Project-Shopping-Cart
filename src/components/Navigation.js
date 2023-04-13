import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="nav-bar">
      <h1 className="store-name">Game Store 🎮</h1>
      <div className="links">
        <Link to="/shop">Shop</Link>
        <Link to="card">🛒</Link>
      </div>
    </div>
  );
}
