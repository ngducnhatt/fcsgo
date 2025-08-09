// src/components/Header/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="/logo.svg" alt="F-Store Logo" />
      </Link>

      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
        <ul>
          <li className="header__nav-close-container">
            <button onClick={toggleMenu} className="header__nav-close">
              &times;
            </button>
          </li>

          {navItems &&
            navItems.map((item) => (
              <li key={item.id}>
                <Link to={`/${item.id}`} onClick={toggleMenu}>
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      <button className="header__hamburger" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  );
};

export default Header;
