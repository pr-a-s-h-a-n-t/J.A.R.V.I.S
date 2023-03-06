import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ModalProvider from "./contex/ModalContex";
import PlaygroundProvider from "./contex/EditorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PlaygroundProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </PlaygroundProvider>
);
