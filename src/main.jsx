import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initGoatCounter } from "./lib/goatcounter";

// Module scope: runs exactly once per document load, so a single production
// page view can never be registered twice (React StrictMode double-invokes
// effects in development only — this call is not an effect).
initGoatCounter();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
