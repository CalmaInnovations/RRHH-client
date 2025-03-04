import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import RLeaderRouter from "../modules/Recruitment-Leader/router/RLeaderRouter";
import RequestRctRouter from "../modules/Recruitment/Request-recruiter/router/RequestRctRouter";
import CallRouter from "../modules/Recruitment/Calls/router/CallRouter";

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            {/* Ruta principal que usa el MainLayout */}
            <Route path="/" element={<MainLayout />}>
               <Route path="requests-leader/*" element={<RLeaderRouter />} />
               <Route
                  path="requests-recruiter/*"
                  element={<RequestRctRouter />}
               />
               <Route path="call/*" element={<CallRouter />} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
