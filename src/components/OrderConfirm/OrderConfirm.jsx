import React from "react";
import "./OrderConfirm.css";
function OrderConfirm({ product, amount, total, onSubmit, loading }) {
  const price = product.data[0]?.price ? product.data[0].price * 1000 : 0;
  return (
    <div className="order-confirm">
      <div className="order-confirm__title">Xác nhận đơn hàng</div>
      <div className="order-confirm__content">
        <div className="order-confirm__item">
          <span className="order-confirm__label">Đơn giá</span>
          <span className="order-confirm__value">{price.toLocaleString()} VND</span>
        </div>
        <div className="order-confirm__item">
          <span className="order-confirm__label">Số lượng</span>
          <span className="order-confirm__value">{amount}</span>
        </div>
        <div className="order-confirm__total">
          <span className="order-confirm__total-label">Thành tiền</span>
          <span className="order-confirm__total-value">{total.toLocaleString()} VND</span>
        </div>
      </div>
      <button className="order-form__button" onClick={onSubmit} disabled={loading} style={{marginTop: '1.5rem', display: 'block', width: '100%'}}>
        {loading ? "Đang gửi..." : "Tạo đơn hàng"}
      </button>
    </div>
  );
}

export default OrderConfirm;
