// src/components/ProductCard/ProductCard.jsx
import React, { memo } from "react";
import { useModal } from "../../context/ModalContext"; // Import hook useModal
import "./ProductCard.css";

const ProductCard = memo(({ product }) => {
  const { image, title, price, oldPrice, sold, status } = product;
  const { openModal } = useModal(); // Lấy hàm openModal từ context

  const handleCardClick = () => {
    // Chỉ mở modal nếu sản phẩm không bị vô hiệu hóa
    if (status !== "disabled") {
      openModal(product); // Gọi openModal và truyền dữ liệu sản phẩm vào
    }
  };

  const cardClassName = `product-card ${
    status === "disabled" ? "product-card--disabled" : ""
  }`;

  return (
    <div className={cardClassName} onClick={handleCardClick}>
      {/* Nội dung còn lại giữ nguyên */}
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
