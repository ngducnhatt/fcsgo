import React from "react";
import "./AccountGame.css";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import ProductCard from "../../components/ProductCard/ProductCard";
import accountsGame from "../../data/accountsGame.json";

function AccountGame() {
    const data = accountsGame.data
    return (
        <div>
            <h2><span>{accountsGame.title}</span></h2>
            <div className="product-list-section__grid">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
            <ProductDescription content="Đây là tài khoản game" />
        </div>
    );
}

export default AccountGame;
