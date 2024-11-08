import { Navigate, Route, Routes } from "react-router";
import { DashboardLayout } from "../layout/DashboardLayout";
import { DashboardPage } from "../pages";
import { Requests } from "../pages";
import { RequestsAreaRecruiter } from "../pages/recruitment/request-area-recruiter/Request";

export const DashboardRoutes = () => {
   return (
      <DashboardLayout>
         <Routes>
            <Route path="/" element={<DashboardPage />} />

            <Route path="requests" element={<Requests />} />

            <Route path="/recruitment">
               <Route
                  path="requests-recruiter"
                  element={<RequestsAreaRecruiter />}
               />
            </Route>

            <Route path="/*" element={<Navigate to="/" />} />
         </Routes>
      </DashboardLayout>
   );
};
