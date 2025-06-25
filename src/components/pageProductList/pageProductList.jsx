import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./pageProductList.css";

function PageProductList({ title, products }) {
    return (
        <>
            <h2><span>{title}</span></h2>
            <div className="product-list-section__grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
}

export default PageProductList;
