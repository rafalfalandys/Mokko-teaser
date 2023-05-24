import Header from "./Header";
import Main from "./Main";
import "./MainPage.scss";

const MainPage: React.FC = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Main />
    </div>
  );
};

export default MainPage;
