import { createStore, compose, applyMiddleware } from "redux";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "./resources/css/index.css";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import React from "react";
import App from "./App";
import reducers from "./resources/reducers";

/*
|--------------------------------------------------------------------------
| React Started Template Copyright © 2022 rvnrstnsyh All Rights Reserved
|--------------------------------------------------------------------------
|
| Author    : rvnrstnsyh
| Website   : https://rvnrstnsyh.dev
| Github    : https://github.com/rvnrstnsyh
|
*/

const redux = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={redux}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ! Delete this line for production
// ! "window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
