import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster
      position="bottom-right"
      richColors
      closeButton
      toastOptions={{
        duration: 5000,
        style: {
          maxWidth: "400px",
          borderRadius: "10px",
          padding: "18px",
          fontSize: "18px",
        },
        success: {
          style: { background: "green" },
          icon: "✅",
        },
        error: {
          style: { background: "#dc3545", color: "white" },
          icon: "❌",
        },
        warn: {
          style: { background: "#ffc107", color: "black" },
          icon: "⚠️",
        },
      }}
      toastMotion={{
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.25 },
      }}
    />
  </StrictMode>
);
