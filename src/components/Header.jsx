// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          {/* Thay thế bằng logo của bạn */}
          <img src="/logo.svg" alt="Muakey Logo" />
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#">Tài Khoản Game</a>
            </li>
            <li>
              <a href="#">Mua/Bán thẻ cào</a>
            </li>
            <li>
              <a href="#">Steam Gift Card</a>
            </li>
            <li>
              <a href="#">Resell Premium</a>
            </li>
            <li>
              <a href="#">YouTube Premium</a>
            </li>
            <li>
              <a href="#">ExitLag</a>
            </li>
            <li>
              <a href="#">Thanh toán VISA</a>
            </li>
          </ul>
        </nav>
        <div className="header__actions">
          <button className="header__button header__button--login">
            Đăng nhập
          </button>
          <button className="header__button header__button--register">
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
