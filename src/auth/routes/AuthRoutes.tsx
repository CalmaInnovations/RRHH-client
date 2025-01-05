import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from '../pages';

interface AuthRoutesProps {
   handleLogin: () => void;
}

export const AuthRoutes = ({ handleLogin }: AuthRoutesProps) => {

   const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";


   return (
      <Routes>
         {isAuthenticated ? (
            <Route path="*" element={<Navigate to="/recruitment/requests-recruiter" />} />
         ) : (
            <>
               <Route
                  path="login"
                  element={<LoginPage handleLogin={handleLogin} />}
               />
               <Route path="register" element={<RegisterPage />} />
               <Route path="*" element={<Navigate to="login" />} />
            </>
         )}
      </Routes>
   );
}
