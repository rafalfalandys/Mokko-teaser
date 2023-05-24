import Header from "../components/Header";
import Main from "../components/Main";
import "./MainPage.scss";

const MainPage: React.FC = () => {
  return (
    <div className="general-wrapper">
      <Header />
      <Main />
    </div>
  );
};

export default MainPage;
