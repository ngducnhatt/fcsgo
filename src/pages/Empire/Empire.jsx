import React from "react";
import "./Empire.css";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderConfirm from "../../components/OrderConfirm/OrderConfirm";
import ProductCard from "../../components/ProductCard/ProductCard";
import coinEmpireData from "../../data/coinEmpire.json";

function Empire() {
  return (
    <div>
      <h2><span>{coinEmpireData.data.title}</span></h2>
      <div className="product-list-section__grid">
        {coinEmpireData.data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <ProductDescription content=" Vui lòng chuyển coin trước khi tạo đơn, các đơn hàng sẽ được xử lý trong 5 phút. Nếu sau 30 phút chưa nhận được coin hãy liên hệ Facebook" />
      <OrderForm/>
      <OrderConfirm
        product={coinEmpireData}
      />
    </div>
  );
}

export default Empire;
