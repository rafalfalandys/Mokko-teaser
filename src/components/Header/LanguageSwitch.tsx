import { useContext } from "react";
import "./LanguageSwitch.scss";
import Context from "../../store/context";

const LanguageSwitch = () => {
  const { toggleLanguage, isEnglish } = useContext(Context);

  return (
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
  );
};

export default LanguageSwitch;
