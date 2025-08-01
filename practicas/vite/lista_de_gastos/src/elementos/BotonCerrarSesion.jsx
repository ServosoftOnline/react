/* 
    ELEMENTO QUE MOSTRARÁ UN BOTON CON LA FUNCIONALIDAD DE CERRAR LA SESION EN FIREBASE Y REDIRECCIONAR HACIA INICIAR SESION
        - Importo lo necesario
            - signOut permite cerrar una sesión en authentification de firebase

        - Creo el elemento
            - Creo la cte navigate para poder llamarla despues al redireccionar
            - Creo la función asincrona que cerrará la sesión a la que se llamará cuando se haga click en el botón
            - Devuelvo el botón que tendrá un icono grande y será la imagen svg log-out creada anteriormente como componente


*/

// React y react router
import React from "react";
import { useNavigate } from "react-router-dom";

// Imagen svg pasada a componente
import IconoCerrarSesion from './../assets/log-out.svg?react';

// Elemento importado 
import Boton from "./Boton";

// Firebase
import { signOut } from "firebase/auth";
import { auth } from './../firebase/firebaseConfig';

// Elemento
const BotonCerrarSesion = () => {
    const navigate = useNavigate();


    // Funcion asíncrona
    const cerrarSesion = async () => {
        try {

            await signOut(auth);
            console.log('sesion cerrada');
            navigate('/iniciar-sesion');

        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <Boton $iconoGrande as="button" onClick={()=>{cerrarSesion()}}>
            <IconoCerrarSesion/>
        </Boton>
    );
}
 
export default BotonCerrarSesion;