/*
    ELEMENTOS QUE USARÉ EN LOS FORMULARIOS
        
        - Importo:
            - styled components
            - El objeto theme que contiene los colores
            - La imagen svg que pondré en la pagina de inicar sesión creada como componente
            - Igual para la página de crear una cuenta

        - Creo los siguientes elementos:
            - ContenedorFiltros. 
                - Corresponden a la lista donde se indican los tipos de gastos y la fecha en Agregar gasto (App.jsx).

            - Formulario
            - Input
            - InputGrande
            - ContenedorBoton

        - Los exporto por separado
*/


import styled from "styled-components";
import theme from "../objetos/theme";
import imagenIniciarSesion from './../assets/registro.svg?react';
import imagenCrearCuenta from './../assets/login.svg?react';


const ContenedorFiltros = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 1.87rem; /* 30px */
 
    // Cuando llegue la ventana a 950px los elementos se colocan en forma de columna y no uno al lado de otro
    @media(max-width: 60rem){ /* 950px */
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;
 
const Formulario = styled.form`

    padding: 0 2.5rem; /* 40px */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    // Características de los inputs de dentro del formulario
    input {
        width: 100%;
        text-align: center;
        padding: 1.5rem 0; /* 24px */
        font-family: 'Work Sans', sans-serif;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;           
    }
`;
 
const Input = styled.input`

    font-size: 2rem; /* 32px */
    text-transform: uppercase;
    border: none;
    border-bottom: 2px solid ${theme.grisClaro};
    outline: none;
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 1.5rem; /* 28.8px */
    }
`;
 
const InputGrande = styled(Input)`
    font-size: 3rem; /* 48px */
    font-weight: bold;
`;
 
const ContenedorBoton = styled.div`

    display: flex;
    justify-content: center;
    margin: 2rem 0;  /* 32px */

    @media(max-width: 60rem){ /* 950px */
        margin: 0.5rem 0;  /* 16px */
    }
    
`;

const SvgIniciarSesion = styled(imagenIniciarSesion)`

    width: auto;
    max.height: 6.25rem; /* 100px */
    margin-bottom : 1.25rem; /* 20px */

    @media(max-width: 60rem){ /* 950px */
        height: 16rem; /* 256px */        
    }
`;

const SvgCrearCuenta = styled(imagenCrearCuenta)`
    width: 100%;
    max.height: 6.25rem; /* 100px */
    margin-bottom : 1.25rem; /* 20px */

    @media(max-width: 60rem){ /* 950px */
        height: 16rem; /* 256px */        
    }
`;



export {ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton, SvgIniciarSesion, SvgCrearCuenta} ;
