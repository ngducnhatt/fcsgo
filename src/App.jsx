// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

// // Dữ liệu
import productsData from "./data/products.json";
import accountsGame from "./data/accountsGame.json";
import coinEmpire from "./data/coinEmpire.json";
import mobileCard from "./data/mobileCard.json";
import steamCard from "./data/steamCard.json";
import faceit from "./data/faceitPremium.json";
import exitlag from "./data/exitlagCode.json";

// Styles
import "./App.css";

const dataMap = {
  accountsGame,
  coinEmpire,
  mobileCard,
  steamCard,
  faceit,
  exitlag,
};
import HomePage from "./pages/Home/Home";
import AccountGame from "./pages/AccountGame/AccountGame";
import EmpirePage from "./pages/Empire/Empire";
import MobileCard from "./pages/MobileCard/MobileCard"
import Steam from "./pages/Steam/Steam"
import Faceit from "./pages/Faceit/Faceit"
import Exitlag from "./pages/Exitlag/Exitlag"
import TermsOfService from "./pages/TermsOfService/TermsOfService"
import WarrantyPolicy from "./pages/WarrantyPolicy/WarrantyPolicy"

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header navItems={productsData} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage categories={productsData} dataMap={dataMap} />} />
            <Route path="/account-game" element={<AccountGame />} />
            <Route path="/empire" element={<EmpirePage />} />
            <Route path="/mobile-card" element={<MobileCard />} />
            <Route path="/steam" element={<Steam />} />
            <Route path="/faceit" element={<Faceit />} />
            <Route path="/exitlag" element={<Exitlag />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/warranty-policy" element={<WarrantyPolicy />} />
          </Routes>
        </main>

        <Footer />
        <BackToTopButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
