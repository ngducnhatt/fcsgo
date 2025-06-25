import React from "react";
import "./OrderForm.css";
const idSend = '76561199498002292';

function OrderForm({ form, onChange }) {
  return (
    <div className="order-form">
      <div className="order-form__title">Tạo đơn bán </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="order-form__group">
          <label className="order-form__label">
            ID nhận
            <span
              onClick={() => navigator.clipboard.writeText(idSend)}
              style={{ cursor: 'pointer', marginLeft: '0.5em', color: 'var(--color-accent)' }}
              title="Sao chép ID"
            >
              {idSend}
            </span>
            <br />
            <span>Fcsgo.store | Lv70</span>
          </label>
        </div>
        <div className="order-form__group">
          <label className="order-form__label" htmlFor="order-id">ID Bán</label>
          <input
            className="order-form__input order-form__input--small"
            id="order-id"
            type="text"
            name="id"
            value={form.id}
            onChange={onChange}
            required
          />
        </div>
        <div className="order-form__group">
          <label className="order-form__label" htmlFor="order-amount">Số lượng</label>
          <input
            className="order-form__input order-form__input--small"
            id="order-amount"
            type="number"
            name="amount"
            min="10"
            value={form.amount}
            onChange={onChange}
            required
          />
        </div>
        <div className="order-form__group">
          <label className="order-form__label" htmlFor="order-bank">Ngân hàng</label>
          <input
            className="order-form__input order-form__input--small"
            id="order-bank"
            type="text"
            name="bank"
            value={form.bank}
            onChange={onChange}
            required
          />
        </div>
        <div className="order-form__group">
          <label className="order-form__label" htmlFor="order-account">Số tài khoản</label>
          <input
            className="order-form__input order-form__input--small"
            id="order-account"
            type="text"
            name="account"
            value={form.account}
            onChange={onChange}
            required
          />
        </div>
        <div className="order-form__group">
          <label className="order-form__label" htmlFor="order-name">Tên tài khoản ngân hàng</label>
          <input
            className="order-form__input order-form__input--small"
            id="order-name"
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
