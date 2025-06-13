// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>Giới thiệu</h3>
          <ul>
            <li>
              <a href="#">Điều khoản dịch vụ</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Hỗ trợ</h3>
          <p>Hotline: 0869.007.882 (Chỉ nghe gọi trong giờ làm việc)</p>
          <p>Email: hotro@muakey.com</p>
          <div className="footer__payment-methods">
            {/* Các icon phương thức thanh toán */}
            <img src="/images/payment_visa.png" alt="Visa" />
            <img src="/images/payment_mastercard.png" alt="Mastercard" />
            {/* Thêm các icon khác */}
          </div>
        </div>
        <div className="footer__section footer__section--badges">
          {/* Các huy hiệu chứng nhận */}
          <img
            src="/images/dmca.png"
            alt="DMCA Protected"
            className="footer__badge"
          />
          <img
            src="/images/safe_shopping.png"
            alt="Safe Shopping"
            className="footer__badge"
          />
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright © 20xx Sigma, all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
