import React from "react";
import dom from "react-dom";
import "./styles/main.css";
import Index from "./viewes/index";

dom.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
