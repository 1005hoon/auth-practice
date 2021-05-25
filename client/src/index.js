import { applyMiddleware, createStore } from "redux";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import SignUp from "./components/auth/SignUp";
import Welcome from "./components/Welcome";

import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
