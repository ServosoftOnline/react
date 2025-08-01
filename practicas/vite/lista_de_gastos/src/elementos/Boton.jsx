/*
    ELEMENTO QUE CONTIENE LOS ESTILOS PARA LOS BOTONES
        - Importo:
            - styled components
            - El componente Link permitirá que el botón al que le asigne este elemento pueda cambiar a otras paginas

        - Defino los estilos del elemento boton
            - LLamo a la funcion styled y le paso el componente Link importado desde react router
            - Los estilos son muchos. Los describo en el interior de la definicion del componente
            - Le cambiaré su color a partir de la propiedad primario que opcionalmente podré pasarle como propiedad
            - Le cambiaré su anchura si le paso la propiedad conIcono
            - Le cambiare su altura si le paso la propiedad iconoGrande, conteniendo una imagen svg

        - Lo exporto

*/
import styled from "styled-components";
import {Link} from 'react-router-dom';
import theme from "../objetos/theme";


// Defino los estilos. Al elemento lo llamo Boton. Le aplico la funcion styled y le paso el componente Link creado por react router
const Boton = styled(Link)`

    // Si el Boton tiene como propiedad colorPrimario el fondo tendrá el color primario del objeto theme. Si no será de color negro
    background: ${(props) => props.$primario ? theme.colorPrimario : '#000'};    

    // Si tiene la propiedad conIcono, el icono será mas ancho
    width: ${(props) => props.$conIcono ? '15.62rem' : 'auto'}; /* 250px */

    // Descripción y ubicación del boton
    margin-left: 1.25rem; /* 20px */
    border: none;
    border-radius: 0.625rem; /* 10px */
    color: #fff;
    font-family: 'Work Sans', sans-serif;
    height: 3.438rem; /* 55px */
    padding: 1.25rem 1.87rem; /* 20px 30px */
    font-size: 1.25rem; /* 20px */
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
 
    // El icono será de tipo SVG. Si tiene la propiedad iconoGrande tendrá un alto del 100% y si no de 0.75 rem
    svg {
        height: ${(props) => props.$iconoGrande ? '100%' : '0.75rem;'};  /* 12px */
        fill: white;
    }

    @media(max-width: 60rem){ /* 950px */       
        font-size: 1.25rem; /* 20px */
        margin-left: 1rem; /* 16px */
        padding: 0.5rem 1rem; /* 8px 16px */           
    }
`;

export default Boton;
