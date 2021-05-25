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
import Feature from "./components/Feature";
import Signout from "./components/Signout";
import Signin from "./components/auth/Signin";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") },
  },
  applyMiddleware(reduxThunk)
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signout">
          <Signout />
        </Route>
        <Route path="/features">
          <Feature />
        </Route>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
