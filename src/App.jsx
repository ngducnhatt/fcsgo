// src/App.jsx
import React, { useState } from "react";

// Components
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import CategoryNavigation from "./components/CategoryNavigation/CategoryNavigation";
import ProductListSection from "./components/ProductListSection/ProductListSection";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

// --- Dữ liệu ---
// 1. Import file cấu hình trung tâm
import productsData from "./data/products.json";
import bannerData from "./data/banners.json";
// 2. Import tất cả dữ liệu sản phẩm tương ứng
import accountGamesData from "./data/accountsGame.json";
import coinEmpireData from "./data/coinEmpire.json";
import mobileCardData from "./data/mobileCard.json";
import steamCardData from "./data/steamCard.json";
import faceitData from "./data/faceitPremium.json";
import exitlagData from "./data/exitlagCode.json";

// Styles
import "./App.css";

// 3. Tạo một "data map" để ánh xạ dataKey trong JSON với biến dữ liệu thực tế
const dataMap = {
  accountGamesData,
  coinEmpireData,
  mobileCardData,
  steamCardData,
  faceitData,
  exitlagData,
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <Header navItems={productsData} />

      <HeroSection bannerData={bannerData} />

      <main>
        <CategoryNavigation categories={productsData} />

        {productsData.map((section) => (
          <ProductListSection
            key={section.id}
            id={section.id}
            title={section.title}
            products={dataMap[section.dataKey]}
            onCardClick={handleCardClick}
          />
        ))}
      </main>

      <Footer />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
      <BackToTopButton />
    </div>
  );
}

export default App;
