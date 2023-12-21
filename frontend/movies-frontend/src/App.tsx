import "./App.css";
import MoviesContainer from "./pages/movies/MoviesContainer";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <MoviesContainer />
        <Footer />
      </>
    </Provider>
  );
}

export default App;
