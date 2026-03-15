import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./anaStil.css";
import AnaUygulama from "./bilesenler/AnaUygulama";

// uygulamayı kök dizinden başlat
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnaUygulama />
  </StrictMode>,
);
