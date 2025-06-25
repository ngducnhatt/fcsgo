import React from "react";
import "./Faceit.css";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import faceitPremium from "../../data/faceitPremium.json";
import PageProductList from "../../components/pageProductList/pageProductList";
function Faceit() {
  return (
    <div className="page-container">
      <PageProductList title={faceitPremium.title} products={faceitPremium.data} />
      <div className="page-content">
        <div className="page-description">
          <ProductDescription content={<span>
            Liên hệ mua hàng :
            <a href="https://www.facebook.com/100092840949249" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}> Facebook</a>
            <br />
            - Quý khách sẽ được kích hoạt Faceit Premium sau khi thanh toán thành công.
            <br />
            <br />
            <b>1. Đổi tên Faceit<br /></b>
            - Là đổi tên hiển thị Faceit của bạn
            <br />
            <b>2. Đổi tên Faceit (idle nickname)<br /></b>
            - Là đổi tên hiển thị Faceit đã từng được dùng bởi người khác trước đó nhưng hiện tại đã không còn sử dụng nữa.
            <br />
            <b>3. Faceit Plus khác gì Faceit Premium <br /></b>
            - Bạn có thể xem chi tiết <a href="https://www.faceit.com/en/upgrade" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>tại đây</a>
            <br />
          </span>} />
        </div>

      </div>
    </div>
  );
}

export default Faceit;
