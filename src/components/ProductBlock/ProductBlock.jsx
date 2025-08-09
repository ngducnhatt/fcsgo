import React from "react";
import "./ProductBlock.css";
function ProductBlock({ product }) {
  const productData = product?.[0];
  if (!productData) {
    return null;
  }
  return (
    <div className="product-header">
      <img
        src={productData.image}
        alt={productData.title}
        className="product-logo"
      />
      <div className="product-title-group">
        <h2 className="product-title">{productData.title}</h2>
      </div>
    </div>
  );
}

export default ProductBlock;
