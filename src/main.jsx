import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ContextTheme } from "./context/ContextTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextTheme>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </ContextTheme>
  </BrowserRouter>
);
