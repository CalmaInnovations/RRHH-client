import { Navigate, Route, Routes } from "react-router";
import { DashboardLayout } from "../layout/DashboardLayout";
import {
   Requests,
   RequestsAreaRecruiter,
   Call,
   DashboardPage,
   CallBoard,
} from "../pages";

export const DashboardRoutes = () => {
   return (
      <DashboardLayout>
         <Routes>
            <Route path="/" element={<DashboardPage />} />

            <Route path="/requests" element={<Requests />} />

            <Route path="/recruitment">
               <Route
                  path="requests-recruiter"
                  element={<RequestsAreaRecruiter />}
               />
               <Route path="call" element={<Call />} />

               <Route path="call/:id" element={<CallBoard />} />
            </Route>

            <Route path="/*" element={<Navigate to="/" />} />
         </Routes>
      </DashboardLayout>
   );
};
