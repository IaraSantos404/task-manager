import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/log/dashboard";
import PrivateLayout from "./layouts/privateLayout";
import AuthLayout from "./layouts/authLayout";
import ProtectedRoute from "./layouts/protectedRoute";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";


export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          {/* Rotas de autenticação */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Route>


        {/* Rotas privadas */}
        <Route element={
          <ProtectedRoute>
            <PrivateLayout />
          </ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}