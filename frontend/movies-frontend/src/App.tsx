import { useState } from "react";

import "./App.css";
import MoviesContainer from "./pages/movies/MoviesContainer";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <MoviesContainer />
    </Provider>
  );
}

export default App;
