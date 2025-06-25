import React from "react";
import "./Steam.css";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import steamCard from "../../data/steamCard.json";
import PageProductList from "../../components/pageProductList/pageProductList";
function Steam() {
  return (
    <div className="page-container">
      <PageProductList title={steamCard.title} products={steamCard.data} />
      <div className="page-content">
        <div className="page-description">
          <ProductDescription content={<span>
            Liên hệ mua hàng :
            <a href="https://www.facebook.com/100092840949249" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}> Facebook</a>
          </span>} />
        </div>

      </div>
    </div>
  );
}

export default Steam;
