import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { GlobalContextProvider } from "./context/globalContext";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <GlobalContextProvider>
          <Route path="/*" element={<App />} />
        </GlobalContextProvider>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
