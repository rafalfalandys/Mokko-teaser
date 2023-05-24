import "./Header.scss";
import logo from "../assets/logo_main.png";
import useText from "../hooks/useText";

const Header: React.FC = () => {
  const text = useText();

  return (
    <div className="header__wrapper">
      <header className="header">
        <figure className="header__logo">
          <img src={logo} alt="logo" />
        </figure>
        <h1 className="header__title">{text.title}</h1>
        <p className="header__description">{text.description}</p>
        <p></p>
      </header>
    </div>
  );
};

export default Header;
