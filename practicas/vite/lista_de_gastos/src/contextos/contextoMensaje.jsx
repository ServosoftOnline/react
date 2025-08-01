/*
    CONTEXTO PARA ALMACENAR LOS MENSAJES Y EL RESULTADO DE LAS VALIDACIONES
*/


import React, { useState } from "react";

// Creo el contexto = Estado global
const ContextoMensaje = React.createContext();

// Creo componente proveedor del estado
const ProveedorMensaje = ({children}) => {

    // Estado que contiene un objeto con la configuración inicial
    const [mensajeAMostrar, cambiarMensajeAMostrar] = useState('');
    const [rdoValidacion, cambiarRdoValidacion]= useState('');

    // Funcion
    const cambiarMensaje = (mensajeNuevo, nuevaValidacion) => { 
        cambiarMensajeAMostrar(mensajeNuevo);
        cambiarRdoValidacion(nuevaValidacion);
    }

    const reiniciarMensaje = () => {
        setTimeout(() => {
            cambiarMensajeAMostrar('');
            cambiarRdoValidacion('');
        }
        , 5000);        
    }
       
    return (
       <ContextoMensaje.Provider value={{mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje}}>            
        {children}
       </ContextoMensaje.Provider>
    );
}

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves 
export {ContextoMensaje, ProveedorMensaje};