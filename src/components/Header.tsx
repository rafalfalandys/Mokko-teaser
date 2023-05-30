import "./Header.scss";
import logo from "../assets/logo_main.png";
import useText from "../hooks/useText";
import { useContext } from "react";
import Context from "../store/context";

const Header: React.FC = () => {
  const text = useText();
  const { toggleLanguage, isEnglish } = useContext(Context);

  return (
    <div className="header__wrapper">
      <header className="header">
        <figure className="header__logo">
          <img src={logo} alt="logo" />
        </figure>
        <h1 className="header__title">{text.title}</h1>
        <div
          className="header__description"
          dangerouslySetInnerHTML={text.description}
        />
        <div className="language-switch" onClick={toggleLanguage}>
          <span className={`${isEnglish ? "" : "language-switch--active"}`}>
            PL
          </span>{" "}
          /
          <span className={`${isEnglish ? "language-switch--active" : ""}`}>
            {" "}
            EN
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;
