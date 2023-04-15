import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navigation";
import "./App.css";
import { Home } from "./components/Home";
import { Card } from "./components/Card";
import { Shop } from "./components/Shop";
import { ShopContextPrvider } from "./context/ShopContext";

function App() {
  return (
    <div className="App">
      <ShopContextPrvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </BrowserRouter>
      </ShopContextPrvider>
    </div>
  );
}

export default App;
