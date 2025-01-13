import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { DashboardApp } from "./DashboardApp";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <DashboardApp />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
);
