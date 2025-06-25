import React from "react";
import "./Exitlag.css";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import exitlagCode from "../../data/exitlagCode.json";
import PageProductList from "../../components/pageProductList/pageProductList";
function Exitlag() {
  return (
    <div className="page-container">
      <PageProductList title={exitlagCode.title} products={exitlagCode.data} />
      <div className="page-content">
        <div className="page-description">
          <ProductDescription content={<span>
            Liên hệ mua hàng :
            <a href="https://www.facebook.com/100092840949249" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}> Facebook</a>
            <br />
            - Quý khách sẽ nhận được code kích hoạt ExitLag 1 tháng sau khi thanh toán thành công.
            <br />
            - Sản phẩm chỉ sử dụng được trên 1 thiết bị tại 1 thời điểm.
            <br />
            - Chỉ đảm bảo nhập code thành công cho tài khoản Exitlag tạo ở Việt Nam.
          </span>} />
        </div>

      </div>
    </div>
  );
}

export default Exitlag;
