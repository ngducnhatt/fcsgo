// src/App.jsx
import React from "react";

// Components
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import CategoryNavigation from "./components/CategoryNavigation/CategoryNavigation";
import ProductListSection from "./components/ProductListSection/ProductListSection";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

// Dữ liệu
import productsData from "./data/products.json";
import bannerData from "./data/banners.json";
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

function App() {
  // Toàn bộ state và hàm xử lý modal đã được chuyển vào ModalContext!
  // App.jsx giờ đây sạch sẽ hơn rất nhiều.

  return (
    <div className="app-container">
      <Header navItems={productsData} />
      {/* <HeroSection bannerData={bannerData} /> */}
      <main>
        <CategoryNavigation categories={productsData} />

        {productsData.map((section) => (
          <ProductListSection
            key={section.id}
            id={section.id}
            title={section.title}
            products={dataMap[section.dataKey]}
            // onCardClick không còn cần thiết ở đây nữa
          />
        ))}
      </main>

      <Footer />
      {/* Modal sẽ được render bởi ModalProvider */}
      <BackToTopButton />
    </div>
  );
}

export default App;
