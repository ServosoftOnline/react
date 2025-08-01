/*
    contextoTema.jsx

        - Estado global que guarda la configuración del tema
        - En otras app podría tener por ejemplo para crear un estado global para un carrito de compra
        - Importo react y el hook useState
        - Creo el contexto y un componente proveedor de dicho contexto

        - El componente proveedor:

            - Contiene:
                - Como parametro los elementos hijos
                - Un estado local con un objeto con la configuración inicial del tema
                - Las funciones que permiten cambiar el tema

            - Devuelve:
                - Proporciona el contexto
                - En value añado el estado inicial y las funciones que serán inyectados a sus hijos
                    - El value contiene un objeto que a su vez contiene otro objeto con el estado y las funciones
                    - De ahí las dobles llaves
                    - Al ser inyectados a sus hijos ya son globales añadiendose a lo que llamamos contexto
            
        - No los exporto por defecto sino por separado y entre llaves porque seran importados en sitios diferentes
            - El proveedor lo importaré en el componente donde llame al componente ppal App
                - Donde introduciré el componente ppal en el interior del componente proveedor del contexto
                

*/


import React, { useState } from "react";

// Creo el contexto = Estado global
const ContextoTema = React.createContext();

// Creo componente proveedor del estado
const ProveedorTema = ({children}) => {

    // Estado que contiene un objeto con la configuración inicial del tema
    const [tema, cambiarTema] = useState(
        {
            alineado: 'left',
            fuente: 20
        }
    );

    // Funciones que permiten cambiar el tema
    const aumentarFuente    = () => cambiarTema ({...tema, fuente: tema.fuente + 1});
    const disminuirFuente   = () => cambiarTema ({...tema, fuente: tema.fuente - 1});
    const alineaIzda        = () => cambiarTema ({...tema, alineado: 'left'});
    const alineaDcha        = () => cambiarTema ({...tema, alineado: 'right'});
    const alineaAlCentro    = () => cambiarTema ({...tema, alineado: 'center'})
    
    return (
       <ContextoTema.Provider value={{
            tema,
            aumentarFuente,
            disminuirFuente,
            alineaIzda,
            alineaDcha,
            alineaAlCentro
        }}>
            
        {children}
       </ContextoTema.Provider>
    );
}

// No exporto por defecto. Exporto el contexto y su proveedor por separado y entre llaves 
export {ContextoTema, ProveedorTema};