import React, { useState } from "react";
import "./Empire.css";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderConfirm from "../../components/OrderConfirm/OrderConfirm";
import PageProductList from "../../components/pageProductList/pageProductList";
import coinEmpireData from "../../data/coinEmpire.json";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

function Empire() {
  const data = coinEmpireData.data;
  const price = data[0]?.price ? data[0].price * 1000 : 0;
  const [form, setForm] = useState({
    id: "",
    amount: 10,
    bank: "",
    account: "",
    name: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrder = async () => {
    // Validate all fields
    if (!form.id || !form.amount || !form.bank || !form.account || !form.name || Number(form.amount) < 10) {
      setError("Vui lòng nhập đầy đủ thông tin và số lượng tối thiểu 10");
      setSuccess("");
      return;
    }
    setLoading(true);
    setSuccess("");
    setError("");
    const total = price * Number(form.amount || 1);
    const message =
      `\u{1F4B0} ĐƠN BÁN Value EMPIRE\n` +
      `ID bán: \`${form.id}\`\n` +
      `Số lượng: ${form.amount}\n` +
      `Ngân hàng: ${form.bank}\n` +
      `Số tài khoản: \`${form.account}\`\n` +
      `Tên tài khoản: ${form.name}\n` +
      `Thành tiền: ${total.toLocaleString()} VND`;
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: "Markdown"
          })
        }
      );
      if (res.ok) {
        setSuccess("Đã gửi đơn hàng thành công!");
        setForm({ id: "", amount: 10, bank: "", account: "", name: "" });
      } else {
        setError("Gửi đơn hàng thất bại!");
      }
    } catch (err) {
      setError("Có lỗi khi gửi đơn hàng!");
    }
    setLoading(false);
  };

  return (
    <div className="page-container">
      <PageProductList title={coinEmpireData.title} products={coinEmpireData.data} />
      <div className="page-content">
        <div className="page-description">
          <ProductDescription content={<span>
            Hiện tại server đang có trục trặc các bạn bật 1.1.1.1 để order nhé ạ mk cảm ơn nha.
            Vui lòng chuyển Value trước khi tạo đơn.
            <br></br>
            Các đơn hàng sẽ được xử lý trong 5 phút-10 phút.
            <br></br>
            Nếu sau 30 phút chưa nhận được hãy liên hệ
            <a href="https://www.facebook.com/100092840949249" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}> Facebook.</a>
          </span>} />
        </div>
        <div className="page-forms">
          <div className="page-order-form">
            <OrderForm form={form} onChange={handleChange} />
          </div>
          <div className="page-order-confirm">
            <OrderConfirm
              product={coinEmpireData}
              amount={form.amount}
              total={price * Number(form.amount || 1)}
              onSubmit={handleOrder}
              loading={loading}
            />
            {success && <div style={{ color: 'var(--color-accent)', marginTop: '1em' }}>{success}</div>}
            {error && <div style={{ color: '#f56565', marginTop: '1em' }}>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Empire;
