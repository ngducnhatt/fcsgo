// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ image, title, price, sold, rating, oldPrice }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img src={image} alt={title} className="product-card__image" />
        {/* Có thể thêm overlay hoặc badge nếu cần, ví dụ: <span className="product-card__badge">Hot</span> */}
      </div>
      <h3 className="product-card__title">{title}</h3>
      <div className="product-card__price-info">
        {oldPrice && (
          <span className="product-card__old-price">{oldPrice}</span>
        )}
        <span className="product-card__price">{price}</span>
      </div>
      {sold && <p className="product-card__sold">Đã bán: {sold}</p>}
      {rating && (
        <div className="product-card__rating">
          {/* Bạn có thể dùng icon ngôi sao tại đây */}
          <span>⭐ {rating}</span>
        </div>
      )}
      <button className="product-card__button">Mua ngay</button>
    </div>
  );
};

export default ProductCard;
