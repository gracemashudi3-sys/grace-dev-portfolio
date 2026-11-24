import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "@fontsource/newsreader/latin-500.css";
import { App } from "./App";
import "./styles/index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element #root is missing");
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
