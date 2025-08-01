/*
    ELEMENTOS QUE USARÉ EN LOS MENSAJES EN PANTALLA
        - Importo styled components y el objeto tema con los colores
        - El elemento ContenedorMensajes:
            - Mostrará un parrafo centrado
            - Será de color verde si la propiedad tipo contiene la cadena exito
            - Será de color rojo si la propiedad tipo contiene la cadena error
            - Si no tiene propiedades será de color negro

*/

import styled from "styled-components";
import theme from "../objetos/theme";
 
const ContenedorMensajes = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    font-weight: bold;
     
    p {
 
        color: ${(props) => {
            if(props.$validacion === 'incorrecta'){
                return theme.rojo;
            } else if (props.$validacion === 'correcta') {
                return theme.verde;
            } else {
                return '#000';
            }
        }};
        
    }

    @media(max-width: 60rem){ /* 950px */
        // padding-bottom: 0px;
        padding: 1px;
    }
`;

export {ContenedorMensajes};