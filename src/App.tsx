import MainPage from "./pages/MainPage";
import Provider from "./store/Provider";

function App() {
  return (
    <Provider>
      <MainPage />
    </Provider>
  );
}

export default App;
