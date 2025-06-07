import facebookLogo from "../../../public/facebook.svg";
const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <a href="#">Giới thiệu</a>
          </li>
          <li>
            <a href="#">Điều khoản dịch vụ</a>
          </li>
          <li>
            <a href="#">Chính sách</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Liên hệ</p>
        <a href="#">
          <img src={facebookLogo} className="logo" alt="logo" />
        </a>
        <p>
          Email: <span>fstorevn@gmail.com</span>
        </p>
      </div>
      <div>
        <p>© 2025 Fstore.</p>
      </div>
    </footer>
  );
};

export default Footer;
