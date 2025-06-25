import React from "react";
import "./Empire.css";
import ProductBlock from "../../components/ProductBlock/ProductBlock";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderConfirm from "../../components/OrderConfirm/OrderConfirm";
import { useOrderForm } from "../../hooks/useOrderForm";

import coinEmpireData from "../../data/coinEmpire.json";

function Empire() {
  const { form, loading, message, handleChange, handleSubmit } = useOrderForm();

  return (
    <div>
      <ProductBlock product={coinEmpireData} />
      <div className="empire-content-row">
        <ProductDescription content="Vui lòng chuyển coin trước khi tạo đơn, các đơn hàng sẽ được xử lý trong 5 phút. Nếu sau 30 phút chưa nhận được coin hãy liên hệ Facebook" />
        <OrderForm form={form} onChange={handleChange} />
      </div>
      <OrderConfirm
        product={coinEmpireData}
        form={form}
        onSubmit={handleSubmit}
        loading={loading}
        message={message}
      />
    </div>
  );
}

export default Empire;
