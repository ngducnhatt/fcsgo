import React from "react";
import "./CategoryNavigation.css";

const CategoryNavigation = ({ categories }) => {
  return (
    <nav className="category-nav">
      <ul>
        {categories.map((item) => (
          <li key={item.text}>
            <a href={`#${item.id}`} className="category-nav__link">
              <span className="category-nav__icon">{item.icon}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNavigation;
