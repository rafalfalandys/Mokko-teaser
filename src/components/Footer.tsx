import useText from "../hooks/useText";
import "./Footer.scss";

const Footer = () => {
  const text = useText();

  return (
    <footer className="footer">
      <div className="main__section__header">
        <h3>{text.footerHeader}</h3>
      </div>
      <p>{text.footer}</p>
    </footer>
  );
};

export default Footer;
