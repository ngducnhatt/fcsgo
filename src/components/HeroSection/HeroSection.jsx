import React from "react";
import "./HeroSection.css";
const HeroSection = ({ bannerData }) => {
  return (
    <section className="hero-section">
      {bannerData.map((bannerData) => (
        <div key={bannerData.id} className="hero-section__item">
          <img src={bannerData.image} alt={bannerData.alt} />
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
