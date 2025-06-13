import React from "react";
import ProductCard from "./ProductCard"; // Đảm bảo đường dẫn đúng

const ProductListSection = ({
  title,
  products,
  linkText = "Xem thêm",
  linkHref = "#",
  onBuyClick,
}) => {
  return (
    <section className="product-list-section">
      <div className="product-list-section__header">
        <h2 className="product-list-section__title">{title}</h2>
        <a href={linkHref} className="product-list-section__view-more">
          {linkText} <span className="arrow">→</span>
        </a>
      </div>
      <div className="product-list-section__cards-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index} // Trong thực tế, bạn nên dùng một ID duy nhất cho key
            image={product.image}
            title={product.title}
            price={product.price}
            sold={product.sold}
            rating={product.rating}
            oldPrice={product.oldPrice}
            onBuyClick={onBuyClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductListSection;
