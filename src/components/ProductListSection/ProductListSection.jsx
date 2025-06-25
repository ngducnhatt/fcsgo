// src/components/ProductListSection/ProductListSection.jsx
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListSection.css";
import { Link } from "react-router-dom";

// Bỏ prop onCardClick
const ProductListSection = ({ id, title, products }) => {
  return (
    <section id={id} className="product-list-section">
      <div className="product-list-section__header">
        <h2 className="product-list-section__title">{title}</h2>
        <Link to={id} className="product-list-section__view-all">
          Xem Thêm ›
        </Link>
      </div>
      <div className="product-list-section__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            categoryId={id}
            // Không cần truyền onCardClick
          />
        ))}
      </div>
    </section>
  );
};

export default ProductListSection;
