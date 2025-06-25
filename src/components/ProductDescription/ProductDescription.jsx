import React from "react";
import "./ProductDescription.css";
function ProductDescription({ content }) {
  return (
    <div className="product-description">
      <p>{content}</p>
    </div>
  );
}

export default ProductDescription;
