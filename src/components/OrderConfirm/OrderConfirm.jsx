import React from "react";
import "./OrderConfirm.css";
function OrderConfirm({ product, onSubmit, loading }) {
  const price = product.data.price * 1000;

  return (
    <div className="order-confirm">
      <span>Đơn giá</span>
      <span>{price.toLocaleString()} VND</span>
      <span>Số lượng</span>
      <span>
      </span>
      <span>Thành tiền</span>
      <button onClick={onSubmit} disabled={loading}>
        {loading ? "Đang gửi..." : "Tạo đơn hàng"}
      </button>
    </div>
  );
}

export default OrderConfirm;
