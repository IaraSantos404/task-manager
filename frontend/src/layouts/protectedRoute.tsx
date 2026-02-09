import type { JSX } from "react";
import { Navigate } from "react-router-dom";


export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = true;
  
  if(!isAuthenticated){
    return <Navigate to="/login" />
  }

  return children;
}