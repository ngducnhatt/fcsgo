// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import CategoryNavigation from "./components/CategoryNavigation/CategoryNavigation";
import ProductListSection from "./components/ProductListSection/ProductListSection";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

// // Dữ liệu
import productsData from "./data/products.json";
import accountGamesData from "./data/accountsGame.json";
import coinEmpireData from "./data/coinEmpire.json";
import mobileCardData from "./data/mobileCard.json";
import steamCardData from "./data/steamCard.json";
import faceitData from "./data/faceitPremium.json";
import exitlagData from "./data/exitlagCode.json";

// Styles
import "./App.css";

const dataMap = {
  accountGamesData,
  coinEmpireData,
  mobileCardData,
  steamCardData,
  faceitData,
  exitlagData,
};
import HomePage from "./pages/Home/Home";
import EmpirePage from "./pages/Empire/Empire";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header navItems={productsData} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage categories={productsData} dataMap={dataMap}/>} />
            <Route path="/coin-empire" element={<EmpirePage />} />
          </Routes>
        </main>

        <Footer />
        <BackToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
