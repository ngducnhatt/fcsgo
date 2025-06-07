import storeLogo from "../../../public/logo.svg";
const Header = () => {
  return (
    <header>
      <div>
        <a href="#">
          <img src={storeLogo} className="logo" alt="logo" />
        </a>
        <ul>
          <li>
            <a href="#">Mua/Bán coin empire</a>
          </li>
          <li>
            <a href="#">Mua/Bán thẻ cào</a>
          </li>
          <li>
            <a href="#">Steam wallet</a>
          </li>
          <li>
            <a href="#">Faceit premium</a>
          </li>
          <li>
            <a href="#">Exitlag</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
