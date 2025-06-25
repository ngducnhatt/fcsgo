import React from "react";
import "./OrderForm.css";
const idSend = '123456789';

function OrderForm({ form, onChange }) {
  return (
    <div className="order-form">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          ID nhận coin
          <span
            onClick={() => navigator.clipboard.writeText(idSend)}
            style={{ cursor: 'pointer', marginLeft: '8px', color: 'blue' }}
            title="Sao chép ID"
          >
            {idSend}
          </span>
        </label>

        <label>ID Bán</label>
        <input
          className="order-form-input"
          type="text"
          name="id"
          onChange={onChange}
          required={true}
        />
        <label>Số lượng</label>
        <input
          className="order-form-input"
          type="number"
          name="amount"
          onChange={onChange}
          required={true}
        />
        <label>Ngân hàng</label>
        <input
          className="order-form-input"
          type="text"
          name="bank"
          onChange={onChange}
          required={true}
        />
        <label>Số tài khoản</label>
        <input
          className="order-form-input"
          type="text"
          name="account"
          onChange={onChange}
          required={true}
        />
        <label>Tên tài khoản ngân hàng</label>
        <input
          className="order-form-input"
          type="text"
          name="name"
          onChange={onChange}
          required={true}
        />
      </form>
    </div>
  );
}

export default OrderForm;
