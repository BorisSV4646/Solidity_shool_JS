import React from "react";
import ReactDOM from "react-dom/client";
import Webpages from "./Routers.jsx";
import Navbar from "./components/screens/header/Navbar.jsx";
import "./assets/styles/global.css";

ReactDOM.createRoot(document.getElementById("navbar")).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Webpages />
  </React.StrictMode>
);
