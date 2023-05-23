import "./Header.scss";
import logo from "../assets/logo_main.png";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <figure className="header__logo--wrapper">
          <img src={logo} alt="logo" />
        </figure>
      </header>
    </div>
  );
};

export default Header;
