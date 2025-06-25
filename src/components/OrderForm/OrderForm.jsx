import React from "react";
import "./OrderForm.css";
function OrderForm({ form, onChange }) {
  return (
    <div className="order-form-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="order-form-group">
          <label>ID Bán</label>
          <input
            className="order-form-input"
            type="text"
            name="id"
            value={form.id}
            onChange={onChange}
            required={true}
          />
        </div>
        <div className="order-form-group">
          <label>Số lượng</label>
          <input
            className="order-form-input"
            type="number"
            name="amount"
            value={form.amount}
            onChange={onChange}
            required={true}
          />
        </div>
        <div className="order-form-group">
          <label>Ngân hàng</label>
          <input
            className="order-form-input"
            type="text"
            name="bank"
            value={form.bank}
            onChange={onChange}
            required={true}
          />
        </div>
        <div className="order-form-group">
          <label>Số tài khoản</label>
          <input
            className="order-form-input"
            type="text"
            name="account"
            value={form.account}
            onChange={onChange}
            required={true}
          />
        </div>
        <div className="order-form-group">
          <label>Tên tài khoản ngân hàng</label>
          <input
            className="order-form-input"
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            required={true}
          />
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
