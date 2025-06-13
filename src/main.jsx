// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ModalProvider } from "./context/ModalContext"; // Import ModalProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      {" "}
      {/* Bọc App trong ModalProvider */}
      <App />
    </ModalProvider>
  </StrictMode>
);
