import "./Header.scss";
import useText from "../../hooks/useText";
import logo from "../../assets/logo-exhibition.jpeg";
import LanguageSwitch from "./LanguageSwitch";
import { InstagramLogo } from "@phosphor-icons/react";

const Header: React.FC = () => {
  const text = useText();

  return (
    <div className="header__wrapper">
      <header className="header">
        <div className="header__info-box">
          <figure className="header__logo">
            <img src={logo} alt="exhibition logo" />
          </figure>
          <div className="header__info-box__text">
            <h1 className="header__title">{text.title}</h1>
            <span className="header__name">Monika Kocielska</span>
            <a
              href="https://www.instagram.com/kocielska_mokkoart/"
              className="header__in"
              target="_blank"
            >
              <InstagramLogo />
              @kocielska_mokkoart
            </a>
            <span className="header__dates">07-06 / 20 - 06.2023</span>
            <span className="header__exhibition-type">
              {text.exhibitionType}
            </span>
            <span className="header__curator-producer">{text.curator}</span>
            <span className="header__curator-producer">{text.producer}</span>

            <span className="header__opening">{text.opening}</span>
            <span className="header__place-address">{text.place}</span>
            <span className="header__place-address">{text.address}</span>

            <LanguageSwitch />
          </div>
        </div>
        <div className="main__section__header header__main__section__header">
          <h3>{text.title}</h3>
        </div>
        <div
          className="header__description"
          dangerouslySetInnerHTML={text.description}
        />
      </header>
    </div>
  );
};

export default Header;
