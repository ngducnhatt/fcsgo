// src/components/CategoryNavigation.jsx
import React from "react";

const CategoryNavigation = () => {
  const categories = [
    { id: 1, name: "Bán chạy", icon: "🔥" }, // Thay icon bằng SVG/Image nếu có
    { id: 2, name: "Giảm giá khủng", icon: "💰" },
    { id: 3, name: "Mới về hôm nay?", icon: "✨" },
    { id: 4, name: "Đã xác minh", icon: "✅" },
    { id: 5, name: "Độc quyền", icon: "👑" },
  ];

  return (
    <nav className="category-navigation">
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <a href="#" className="category-navigation__link">
              <span className="category-navigation__icon">{category.icon}</span>
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNavigation;
