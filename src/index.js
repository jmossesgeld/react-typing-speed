import React from "react";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

// ---UNCOMMENT THE CODE BELOW TO USE THIS AS A STAND-ALONE REACT APP---
// import ReactDOM from "react-dom";
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const ReactTypingSpeed = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

export default ReactTypingSpeed