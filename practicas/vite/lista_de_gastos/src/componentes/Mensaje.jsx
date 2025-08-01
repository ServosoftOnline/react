/*
    COMPONENTE QUE PERMITE MOSTRAR MENSAJES EN PANTALLA.
    
        - Sustituirá a los mensajes mostrados en consola
        - Lo uso para mostrar errores de validación en pantalla

        - importo react y el elementos
        - Creo el componente
            - Recibe el tipo de mensaje (Deben ser los caracteres error o exito)
            - El mensaje que mostrará
            
        - Devuelve:
            - El contenedor de los mensajes donde paso el tipo del mensaje
                - Si el tipo contiene error mostrará el mensaje en rojo
                - Si el tipo contiene exito mostrará el mensaje en verde

*/

// React
import React from "react";

// Elementos
import {ContenedorMensajes} from  './../elementos/ElementosDeMensajes';

const Mensaje = ({$validacion, mensaje}) => {
    
    return (
        <ContenedorMensajes $validacion={$validacion}>
            <p>{mensaje}</p>
        </ContenedorMensajes>
      );
}
 
export default Mensaje;



