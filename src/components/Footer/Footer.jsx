// src/components/Footer/Footer.jsx

import React from "react";
import {
  FaFacebook,
  FaDiscord,
  FaCcVisa,
  FaCcMastercard,
  FaUniversity,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>F STORE</h3>
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
          <p>
            Email:
            <a href="mailto:fstore.hotro@gmail.com" target="_blank">
              <span> fstore.hotro@gmail.com</span>
            </a>
          </p>

          {/* 2. Thêm khu vực cho các icon mạng xã hội */}
          <div className="footer__socials">
            <a
              href="https://facebook.com/your-page"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://discord.com/your-server"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord />
            </a>
          </div>

          {/* 3. Thay thế các ảnh logo thanh toán bằng icon */}
          <div className="footer__payment-methods">
            <FaCcVisa title="Visa" />
            <FaCcMastercard title="Mastercard" />
            <FaUniversity title="Bank Transfer" />
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          Copyright © {new Date().getFullYear()} F-Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
