import { Navigate, Route, Routes } from "react-router";
import { DashboardLayout } from "../layout/DashboardLayout";
import { CallBoardProvider } from "../pages/recruitment/call-board/context/call-board-provider";
import {
   Requests,
   RequestsAreaRecruiter,
   Call,
   DashboardPage,
   CallBoard,
} from "../pages";

interface DashboardRoutesProps {
   isAuthenticated?: boolean;
}

export const DashboardRoutes = ({isAuthenticated= true}:DashboardRoutesProps) => {
   return (
      <DashboardLayout isAuthenticated={isAuthenticated}>
         <Routes>
            <Route path="/" element={<DashboardPage />} />

            <Route path="/requests" element={<Requests />} />

            <Route path="/recruitment">
               <Route
                  path="requests-recruiter"
                  element={<RequestsAreaRecruiter />}
               />
               <Route path="call" element={<Call />} />

               <Route
                  path="call/:id"
                  element={
                     <CallBoardProvider>
                        <CallBoard />
                     </CallBoardProvider>
                  }
               />
            </Route>

            {/* <Route path="/*" element={<Navigate to="/" />} /> */}
         </Routes>
      </DashboardLayout>
   );
};
