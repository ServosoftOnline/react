/*
    CONTEXTO O ESTADO GLOBAL QUE PERMITIRÁ SABER SI SE INICIO SESIÓN 

    - Creo un contexto, un proveedor de dicho contexto y un hook que devuelva el contexto
    - El contexto lo usaré solo dentro de este archivo
        - Lo usaré en el return del proveedor para poder inyectarlo en los elementos hijo

    - El proveedor lo importo en mains.jsx y englobo toda la app en él
        - El estado usuarioInicioSesion:
            - Guardará true o false dependiendo si se inicio o no sesión en firebase
            - Será el valor que contendrá el objeto que devolvemos en el proveedor del contexto
        
        - El estado cargando:
            - Indicará si hemos finalizado de comprobar si se inicio sesion en firebase
            - Será una condición para inyectar el estado global a los hijos

        - Creo un efecto que se conectará una sola vez authentification de firebase para ver si se inició sesion
            - Cuando acabe cambiarán los estados de usuarioInicioSesion y cargando
                - En usuarioInicioSesion añadirá un objeto con los datos del usuario obtenido de firebase
                - En cargando indicará que ya acabo el proceso de authentificación. Autorizando a inyectar el contexto a los hijos

    - El hook solo obtiene el contexto y lo devuelve
    - Exporto el contexto, el proveedor del contexto y el hook
        - Creo que el contexto no sería necesario exportarlo. De esa funcion se encarga el hook
        - Lo dejo por si acaso lo necesitara más adelante

*/

// React
import React, { useContext, useEffect, useState } from "react";

// Firebase
import { auth } from '../firebase/firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

// Creo el contexto = Estado global
const AuthContext = React.createContext();

// Creo un hook que devuelva el contexto
const useAuth = () => {
    return useContext(AuthContext);
}

// Creo componente proveedor del estado 
const AuthProvider = ({children}) => {

    // Estado que almacenará si el usuario inicio o no sesion
    const [usuarioInicioSesion, cambiarUsuarioInicioSesion] = useState();

    // Estado que almacenará si acabamos de comprobar si se inició sesion o no
    const [cargando, cambiarCargando] = useState(true);

    // Efecto que se ejecuta una sola vez y comprueba si se inicio sesion en firebase
    useEffect(() => {

        // CancelarSusripción almacenara un valor que podemos llamar cuando queramos cerrar la sesion en autthentification
        const cancelarSuscripción = onAuthStateChanged(auth, (usuario) => {
            // Función que se ejecuta cada vez que halla algun cambio en la sesión
            cambiarUsuarioInicioSesion(usuario);
            cambiarCargando(false);
        });

        // Cuando se desmonte el componente devolvemos cancelarSuscripcion y cerramos la sesión
        return cancelarSuscripción;

    }, []);

    return (
        // Solo inyectará cuando hallamos acabado de comprobar si se inició sesion. Que no estemos cargando
       <AuthContext.Provider value={{sesion: usuarioInicioSesion}}>            
        {!cargando && children}
       </AuthContext.Provider>
    );
}

// No exporto por defecto. Exporto el contexto, su proveedor y el hook por separado y entre llaves 
export {AuthContext, AuthProvider, useAuth};