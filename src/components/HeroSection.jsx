// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  // Dữ liệu giả định cho các banner
  const banners = [
    { id: 1, image: "/images/banner1.png", alt: "Banner 1" },
    { id: 2, image: "/images/banner2.png", alt: "Banner 2" },
    { id: 3, image: "/images/banner3.png", alt: "Banner 3" },
    { id: 4, image: "/images/banner4.png", alt: "Banner 4" },
    { id: 5, image: "/images/banner5.png", alt: "Banner 5" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-section__grid">
        {banners.map((banner) => (
          <div key={banner.id} className="hero-section__item">
            <img src={banner.image} alt={banner.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
