// src/components/ProductListSection/ProductListSection.jsx
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListSection.css";
import { Link } from "react-router-dom";

const ProductListSection = ({ id, title, products }) => {
  const data = Array.isArray(products) ? products : products.data || [];

  return (
    <section id={id} className="product-list-section">
      <div className="product-list-section__header">
        <h2 className="product-list-section__title">{title}</h2>
        <Link to={`/${id}`} className="product-list-section__view-all">
          Xem Thêm ›
        </Link>
      </div>
      <div className="product-list-section__grid">
        {data.map((product) => (
          <Link to={`/${id}`} key={product.id}>
            <ProductCard
              product={product}
            /></Link>
        ))}
      </div>
    </section>
  );
};

export default ProductListSection;
