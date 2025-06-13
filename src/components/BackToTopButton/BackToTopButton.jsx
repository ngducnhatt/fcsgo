// src/components/BackToTopButton/BackToTopButton.jsx

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Sử dụng icon mũi tên từ react-icons
import "./BackToTopButton.css";

const BackToTopButton = () => {
  // State để theo dõi việc nút có nên hiển thị hay không
  const [isVisible, setIsVisible] = useState(false);

  // Hàm kiểm tra vị trí cuộn và cập nhật state
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Hiện nút nếu cuộn xuống hơn 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Hàm để cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Tạo hiệu ứng cuộn mượt mà
    });
  };

  useEffect(() => {
    // Thêm một trình lắng nghe sự kiện 'scroll' khi component được tạo
    window.addEventListener("scroll", toggleVisibility);

    // Dọn dẹp trình lắng nghe sự kiện khi component bị hủy
    // Đây là bước quan trọng để tránh rò rỉ bộ nhớ!
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && ( // Chỉ render nút khi isVisible là true
        <button
          onClick={scrollToTop}
          className="back-to-top-button"
          aria-label="Go to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
