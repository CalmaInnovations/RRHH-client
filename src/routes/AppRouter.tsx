import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            {/* Ruta principal que usa el MainLayout */}
            <Route path="/" element={<MainLayout />}>
               <></>
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
