import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <img
            src={product.image}
            alt={product.title}
            className="modal-product-image"
          />
          <h3 className="modal-product-title">{product.title}</h3>
          <div className="modal-product-price">
            {product.oldPrice && (
              <span className="modal-product-old-price">
                {product.oldPrice}
              </span>
            )}
            <span className="modal-product-current-price">{product.price}</span>
          </div>
          {product.sold && (
            <p className="modal-product-sold">Đã bán: {product.sold}</p>
          )}

          <button className="modal-buy-button">XÁC NHẬN MUA</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
