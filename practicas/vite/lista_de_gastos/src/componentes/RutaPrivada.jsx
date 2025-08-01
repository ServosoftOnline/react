// React y react router
import React from "react";
import { Navigate } from "react-router-dom";

// Hook para acceder al contexto
import { useAuth } from "../contextos/AuthContext";

// Componente
const RutaPrivada = ({children}) => {
    const {sesion} = useAuth();
    if (sesion) return children;
    else return <Navigate replace to = '/iniciar-sesion'/>;
}
 
export default RutaPrivada;