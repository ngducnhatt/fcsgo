import { useState } from "react";

export const useOrderForm = () => {
  const [form, setForm] = useState({
    id: "",
    amount: "",
    bank: "",
    account: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");
    const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const text = `ĐƠN MỚI\nID Bán: ${form.id}\nSố lượng: ${form.amount}\nNgân hàng: ${form.bank}\nSố tài khoản: ${form.account}\nTên tài khoản ngân hàng: ${form.name}`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
          }),
        }
      );

      if (res.ok) {
        setMessage("Đã gửi đơn hàng thành công!");
        setForm({ id: "", amount: "", bank: "", account: "", name: "" });
      } else {
        setMessage("Gửi đơn hàng thất bại!");
      }
    } catch {
      setMessage("Có lỗi khi gửi đơn hàng!");
    }

    setLoading(false);
  };

  return {
    form,
    loading,
    message,
    handleChange,
    handleSubmit,
  };
};
