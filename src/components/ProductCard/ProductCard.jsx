// src/components/ProductCard/ProductCard.jsx
import React, { memo } from "react";
import "./ProductCard.css";

const ProductCard = memo(({ product }) => {
  const { image, title, price, oldPrice, sold, status } = product;

  const cardClassName = `product-card ${status === "disabled" ? "product-card--disabled" : ""
    }`;

  return (
    <div className={cardClassName}>
      <div className="product-card__image-container">
        <img src={image} alt={title} className="product-card__image" />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__price-line">
          <span className="product-card__price">{price}</span>
          {oldPrice && (
            <span className="product-card__old-price">{oldPrice}</span>
          )}
        </div>
        <div className="product-card__meta">
          {status === "enabled" ? (
            <span className="product-card__status product-card__status--in-stock">
              🛒 Còn hàng
            </span>
          ) : (
            <span className="product-card__status product-card__status--out-of-stock">
              🛒 Hết hàng
            </span>
          )}
          {sold !== undefined && (
            <span className="product-card__sold">Đã bán {sold}</span>
          )}
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
