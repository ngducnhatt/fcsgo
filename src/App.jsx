// src/App.jsx
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CategoryNavigation from "./components/CategoryNavigation";
import ProductListSection from "./components/ProductListSection";
import Footer from "./components/Footer";
import "./App.css"; 
// Dữ liệu giả định cho các phần
const popularProducts = [
  {
    image: "/images/product1.jpg",
    title: "Tài Khoản LOL PBE",
    price: "25.000đ",
    sold: "5.2K",
    rating: "4.7",
  },
  {
    image: "/images/product2.jpg",
    title: "Valorant Level 20",
    price: "30.000đ",
    sold: "1.2K",
    rating: "4.8",
  },
  {
    image: "/images/product3.jpg",
    title: "Steam Gift Card 50$",
    price: "1.150.000đ",
    oldPrice: "1.200.000đ",
    sold: "700",
    rating: "4.9",
  },
  {
    image: "/images/product4.jpg",
    title: "Netflix Premium",
    price: "50.000đ/tháng",
    sold: "3.5K",
    rating: "4.5",
  },
  {
    image: "/images/product5.jpg",
    title: "Spotify Premium",
    price: "30.000đ/tháng",
    sold: "2.8K",
    rating: "4.6",
  },
  {
    image: "/images/product6.jpg",
    title: "ExitLag 3 tháng",
    price: "200.000đ",
    sold: "1.5K",
    rating: "4.7",
  },
];

const recommendProducts = [
  {
    image: "/images/rec_product1.jpg",
    title: "Liên Minh Huyền Thoại",
    price: "50.000đ",
    sold: "7.8K",
    rating: "4.9",
  },
  {
    image: "/images/rec_product2.jpg",
    title: "Cần Thơ Gaming",
    price: "30.000đ",
    sold: "1.5K",
    rating: "4.8",
  },
  {
    image: "/images/rec_product3.jpg",
    title: "Mua Key - Game Bản Quyền",
    price: "500.000đ",
    sold: "3.2K",
    rating: "4.7",
  },
  {
    image: "/images/rec_product4.jpg",
    title: "VnGame",
    price: "20.000đ",
    sold: "1.8K",
    rating: "4.6",
  },
  {
    image: "/images/rec_product5.jpg",
    title: "DotNet Fanclub",
    price: "10.000đ",
    sold: "900",
    rating: "4.5",
  },
  {
    image: "/images/rec_product6.jpg",
    title: "Đỗ Anh Tuấn",
    price: "8.000đ",
    sold: "500",
    rating: "4.4",
  },
];

const accountGames = [
  {
    image: "/images/account_lol_pbe.jpg",
    title: "Tài khoản LOL PBE",
    price: "25.000đ",
    sold: "5.2K",
  },
  {
    image: "/images/account_valorant.jpg",
    title: "Tài khoản Valorant Level 20 Chất lượng",
    price: "30.000đ",
    sold: "1.2K",
  },
];

const mobileCards = [
  {
    image: "/images/card_viettel.jpg",
    title: "Thẻ cào Viettel",
    price: "10.000đ - 1.000.000đ",
    sold: "35K",
  },
  {
    image: "/images/card_mobifone.jpg",
    title: "Mobifone",
    price: "10.000đ - 500.000đ",
    sold: "28K",
  },
  {
    image: "/images/card_vinaphone.jpg",
    title: "Vinaphone",
    price: "10.000đ - 500.000đ",
    sold: "22K",
  },
  {
    image: "/images/card_zing.jpg",
    title: "Zing",
    price: "20.000đ - 200.000đ",
    sold: "15K",
  },
  {
    image: "/images/card_garena.jpg",
    title: "Garena",
    price: "20.000đ - 500.000đ",
    sold: "18K",
  },
];

const premiumServices = [
  {
    image: "/images/premium_facebook.jpg",
    title: "BUFF VIEWS, FOLLOWERS, LIKES FANPAGE",
    price: "8.000đ",
  },
  {
    image: "/images/premium_buff_views.jpg",
    title: "BUFF VIEWS, FOLLOWERS, LIKES FANPAGE",
    price: "15.000đ",
  },
  {
    image: "/images/premium_tiktok.jpg",
    title: "BUFF VIEWS, FOLLOWERS, LIKES TIKTOK",
    price: "20.000đ",
  },
  {
    image: "/images/premium_discord.jpg",
    title: "BUFF MEMBERS, NO WAY, REAL TIME, LIFETIME",
    price: "10.000đ",
  },
];

const steamCards = [
  {
    image: "/images/steam_wallet_code.jpg",
    title: "Steam Wallet Code $50 USD",
    price: "1.200.000đ",
    sold: "375",
  },
  {
    image: "/images/steam_wallet_code_50_usd.jpg",
    title: "Steam Wallet Code $50 USD",
    price: "1.170.000đ",
    sold: "200",
  },
  {
    image: "/images/steam_wallet_code_30_usd.jpg",
    title: "Steam Wallet Code $30 USD",
    price: "750.000đ",
    sold: "97",
  },
];

const gameGiftCards = [
  {
    image: "/images/gift_card_riot.jpg",
    title: "Riot Games Gift Card $25 USD",
    price: "600.000đ",
    sold: "40",
  },
  {
    image: "/images/gift_card_google_play.jpg",
    title: "Google Play Gift Card $10 USD",
    price: "250.000đ",
    sold: "20",
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <CategoryNavigation />
        <ProductListSection
          title="Sản phẩm nổi bật"
          products={popularProducts}
          linkText="Xem tất cả"
        />
        <ProductListSection
          title="Đề xuất cho bạn"
          products={recommendProducts}
        />
        <ProductListSection title="Tài khoản Game" products={accountGames} />
        <ProductListSection title="Mua/Bán thẻ cào" products={mobileCards} />
        <ProductListSection title="Premium" products={premiumServices} />
        <ProductListSection
          title="Steam Gift Card / Steam Wallet Code"
          products={steamCards}
        />
        <ProductListSection title="Game Gift Card" products={gameGiftCards} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
