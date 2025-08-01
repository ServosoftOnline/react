/*
  COMPONENTE ALERTAS
    - Mostrará mensajes desde arriba
    - Por ahora no lo estoy usando. me gusta más que salgan los mensajes abajo del botón con el resultado de la validacion
    - Lo dejo por si acaso lo quiero retomar en otra aplicacion
    - Tampoco estoy usando los ElementosDeAlerta y tambien los dejo  

*/

// React
import React from "react";

// Elementos
import {ContenedorAlerta} from '../elementos/ElementosDeAlerta';

const Alerta = ({$tipo, mensaje}) => {
    return (
        <ContenedorAlerta $tipo={$tipo}>
            <p>{mensaje}</p>
        </ContenedorAlerta>
      );
}
 
export default Alerta;



