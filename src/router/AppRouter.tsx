import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";
import { useEffect, useState } from "react";
import { DashboardLayout } from "../dashboard/layout/DashboardLayout";
import { Requests } from "../dashboard/pages";


export const AppRouter = () => {

   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const location = useLocation();

   useEffect(() => {
      const storedAuth = localStorage.getItem("isAuthenticated");
      setIsAuthenticated(storedAuth === "true");
   }, [location]);

   const handleLogin = () => {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
   };

   // const handleLogout = () => {
   //    localStorage.removeItem("isAuthenticated");
   // };

    return (
        <Routes>
            {/* LOGIN Y REGISTRO */}
            <Route path="/auth/*" element={<AuthRoutes handleLogin={handleLogin}/>} />

            <Route
            path="/requests"
            element={
               <DashboardLayout isAuthenticated={isAuthenticated}>
                  <Requests />
               </DashboardLayout>
            }
         />

            {/* DASHBOARD APP */}
            <Route path="/*" element={
               isAuthenticated ? (
                  <DashboardRoutes />
               ) : (
                  <Navigate to="/auth/login" replace />
               )
            } />
            <Route />
        </Routes>
    );
};
