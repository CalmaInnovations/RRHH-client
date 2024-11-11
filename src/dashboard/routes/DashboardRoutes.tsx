import { Navigate, Route, Routes } from "react-router";
import { DashboardLayout } from "../layout/DashboardLayout";
import { DashboardPage } from "../pages";
import { Requests } from "../pages";

export const DashboardRoutes = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/" element={<DashboardPage />} />

                <Route path="/requests" element={<Requests />} />


                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </DashboardLayout>
    );
};
