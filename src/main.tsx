import React from "react";
import ReactDOM from "react-dom/client";
import { DashboardApp } from "./DashboardApp";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <DashboardApp />
      </BrowserRouter>
   </React.StrictMode>
);
