import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header/Header";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
