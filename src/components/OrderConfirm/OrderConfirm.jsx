import React from "react";
import "./OrderConfirm.css";
function OrderConfirm({ product, form, onSubmit, loading, message }) {
  const price = product[0].price * 1000;
  const amount = parseInt(form.amount) || 0;
  const total = amount ? price * amount : 0;

  return (
    <div>
      <div>
        <span>Đơn giá</span>
        <span>{price.toLocaleString()} VND</span>
      </div>
      <div>
        <span>Số lượng</span>
        <span>
          {form.amount ? parseInt(form.amount).toLocaleString() : "0"}
        </span>
      </div>
      <div>
        <span>Thành tiền</span>
        <span>{total.toLocaleString()} VND</span>
      </div>
      <button onClick={onSubmit} disabled={loading}>
        {loading ? "Đang gửi..." : "Tạo đơn hàng"}
      </button>
      {message && (
        <div
          style={{
            color: message.includes("thành công") ? "#ffd84d" : "#ff6b6b",
            marginTop: 8,
            textAlign: "center",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default OrderConfirm;
