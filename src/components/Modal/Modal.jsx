// src/components/Modal/Modal.jsx
import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  // Ngăn chặn sự kiện click lan ra overlay
  const handleModalContentClick = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalContentClick}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="modal-body">
          <div className="modal-product-header">
            <img
              src={product.image}
              alt={product.title}
              className="modal-product-image"
            />
            <h3 className="modal-product-title">{product.title}</h3>
          </div>

          <div className="modal-product-details">
            <div className="modal-product-price">
              <span className="modal-product-label">Giá:</span>
              <div className="modal-price-values">
                {product.oldPrice && (
                  <span className="modal-product-old-price">
                    {product.oldPrice}
                  </span>
                )}
                <span className="modal-product-current-price">
                  {product.price}
                </span>
              </div>
            </div>

            {product.sold && (
              <div className="modal-product-info">
                <span className="modal-product-label">Đã bán:</span>
                <span className="modal-product-sold">{product.sold}</span>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <p className="modal-confirmation-text">
              Hãy liên hệ qua Facebook của mình nha
            </p>
            <button className="modal-buy-button">
              <a
                href="https://www.facebook.com/100092840949249"
                target="_blank"
              >
                Facebook
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
