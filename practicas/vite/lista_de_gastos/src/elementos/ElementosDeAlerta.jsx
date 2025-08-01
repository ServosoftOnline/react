/*
    ELEMENTOS QUE CONTIENE EL COMPONENTE DE ALERTAS
        - Keyframes permite mostrar animaciones que salen de arriba a abajo de la pantalla

        - ContenedorAlerta recirá la propiedad tipo:
            - Si contiene el texto error, mostrará la alerta en el color rojo definido en el objeto theme
            - Si contiene el texto exito, mostrará la alerta en el color verde definido en el objeto theme
            - si no le pasamos ninguna propiedad mostrará la alerta en negro
*/

import styled, {keyframes} from "styled-components";
import theme from "../objetos/theme";

const SlideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const ContenedorAlerta = styled.div`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; /* 20px */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${SlideDown} 4s ease forwards;
 
    p {
 
        background: ${(props) => {
            if(props.$tipo === 'error'){
                return theme.rojo;
            } else if (props.$tipo === 'exito') {
                return theme.verde;
            } else {
                return '#000';
            }
        }};
        color: #fff;
        padding: 1.25rem 2.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`;

export {SlideDown, ContenedorAlerta};