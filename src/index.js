import React from "react";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

const ReactTypingSpeed = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(
  <ReactTypingSpeed/>,
  document.getElementById("root")
);

export default ReactTypingSpeed;
