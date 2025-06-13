// src/components/ProductListSection/ProductListSection.jsx
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListSection.css";

// Bỏ prop onCardClick
const ProductListSection = ({ id, title, products }) => {
  return (
    <section id={id} className="product-list-section">
      <div className="product-list-section__header">
        <h2 className="product-list-section__title">{title}</h2>
        <a href="#" className="product-list-section__view-all">
          Xem tất cả ›
        </a>
      </div>
      <div className="product-list-section__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            // Không cần truyền onCardClick
          />
        ))}
      </div>
    </section>
  );
};

export default ProductListSection;
