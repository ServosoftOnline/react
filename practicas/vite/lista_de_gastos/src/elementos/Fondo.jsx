/*
    MONTAMOS EL FONDO DE LA APP

        - Archivo que contiene todos los componentes que tendrá el fondo
        - Añado los estilos en este mismo archivo
        - Creo el componente
            - Devuelvo:
                - Un componente con los puntos de arriba, los de abajo y la onda
                - Para crear la onda:
                    - La obtengo de la web: https://getwaves.io/
                    - Copio de la web y lo pego en este archivo
                    - Le elimino el path fill, es el color de fondo y yo aplicaré mis estilos
                    - fill-opacity="1" lo adapto a camelCase
                    - Le cambio el nombre de la etiqueta al elemento Ondas para aplicarle los estilos
                    - Si no se ajustara bien añado preserveAspectRatio="none"


        - Los componentes serán
            - Svg. Contiene 
            - PuntosArriba. Que contiene los puntos que van arriba a la
            - PuntosAbajo
        - Les añado los estilos en este mismo archivo
    

*/

// React
import React from "react";
import styled from "styled-components";

// Importo la imagen puntos.svg como un componente
import Puntos from './../assets/puntos.svg?react';

// Estilos para las ondas
const Ondas = styled.svg`

    // Ancho y alto de la onda
    height: 50vh;
    width: 100%;

    // Coloco la onda de forma fija en la parte de abajo
    position: fixed;
    bottom: 0;
    z-index: 0;

    // Cambio del color de la onda
    path {
        fill: rgba(135,182,194, .15);
    }
`;


// Estilos para los puntos de arriba.
// Se aplican al componente Puntos proveniente de una imagen svg y le aplico la funcion styled
const PuntosArriba = styled(Puntos)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */

    // Cuando se reduzca el tamaño de la ventana a 950px, desaparecen los puntos
    @media(max-width: 60rem){ /* 950px */
        display: none;
    }
`;

// Estilos para los puntos de PuntosAbajo igual que PuntosArriba
const PuntosAbajo = styled(Puntos)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */

    // Cuando se reduzca el tamaño de la ventana a 950px, desaparecen los puntos
    @media(max-width: 60rem){ /* 950px */
        display: none;
    }
`;

// Creo el componente
const Fondo = () => {
    return (
        <>
            <PuntosArriba />
            <Ondas
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none">

                <path 
                    fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,149.3C672,171,768,181,864,197.3C960,213,1056,235,1152,213.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
                
            </Ondas>
            <PuntosAbajo />
        </>
      );
}
 
export default Fondo;