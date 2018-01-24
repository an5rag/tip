import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Main } from "./scenes/main/main";
import { rootReducer } from "./services/redux/root-reducer";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

export default App;
