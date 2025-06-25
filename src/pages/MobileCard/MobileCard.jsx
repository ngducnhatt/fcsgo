import React from "react";
import "./MobileCard.css";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import mobileCard from "../../data/mobileCard.json";
import PageProductList from "../../components/pageProductList/pageProductList";
function MobileCard() {
  return (
    <div className="page-container">
      <PageProductList title={mobileCard.title} products={mobileCard.data} />
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

export default MobileCard;
