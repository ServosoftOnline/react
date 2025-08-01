/*
    CONTEXTO MENSAJE CON EL RESULTADO DE LAS OPERACIONES
*/


import React, { useState } from "react";

// Creo el contexto = Estado global
const ContextoMensaje = React.createContext();

// Creo componente proveedor del estado
const ProveedorMensaje = ({children}) => {

    // Estado que contiene un objeto con la configuración inicial del tema
    const [mensaje, cambiarMensaje] = useState(
        {
            contenido: '',
            color: '' 
        }
    );

    // Funciones que permiten cambiar el tema
    const mensajeOk   = () => cambiarMensaje ({contenido: 'Operacion realizada correctamente', color: 'green'});
    const mensajeKo   = () => cambiarMensaje ({contenido: 'Error al realizar la operación', color: 'red'});
    const reiniciarMensaje  = () => cambiarMensaje ({contenido: '', color: ''});
    
    return (
       <ContextoMensaje.Provider value={{mensaje, mensajeOk, mensajeKo, reiniciarMensaje}}>            
        {children}
       </ContextoMensaje.Provider>
    );
}

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves 
export {ContextoMensaje, ProveedorMensaje};