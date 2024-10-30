
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { DashboardPage } from '../dashboard/pages/DashboardPage'

export const AppRouter = () => {
  return (
    <Routes>
        {/* LOGIN Y REGISTRO */}
        <Route path="/auth/*" element={<AuthRoutes/>} />

        {/* DASHBOARD APP */}
        <Route path="/*" element={<DashboardPage/>} />
        <Route/>
    </Routes>
  )
}
