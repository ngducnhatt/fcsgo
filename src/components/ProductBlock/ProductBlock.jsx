import React from "react";
import "./ProductBlock.css";
function ProductBlock({ product }) {
  return (
    <div className="product-header">
      <img
        src={product[0].image}
        alt={product[0].title}
        className="product-logo"
      />
      <div className="product-title-group">
        <h2 className="product-title">{product[0].title}</h2>
      </div>
    </div>
  );
}

export default ProductBlock;
