import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./store/storeObj.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

/*ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const app = ReactDOM.createRoot(document.getElementById("root"));

// wichtig, da sonst ohne App renderung ohne Daten
store.todoStore.setTodos(store.todoStore.load());

app.render(<App />);
