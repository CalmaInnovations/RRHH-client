import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            {/* LOGIN Y REGISTRO */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* DASHBOARD APP */}
            <Route path="/*" element={<DashboardRoutes />} />
            <Route />
        </Routes>
    );
};
