// DIFERENTES ELEMENTOS QUE USARÉ PARA DAR ESTILOS AL SELECT QUE USARÉ EN APP.JSX
import styled from "styled-components";
import theme from '../objetos/theme';

const ContenedorSelect = styled.div`
    background: ${theme.grisClaro};
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */

    // Hará que los elementos que muestre el select esten alineados
    position: relative;

    height: 4rem; /* 64px */
    width: 40%;
    padding: 0px 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    transition: .5s ease all;
    &:hover {
        background: ${theme.grisClaro2};
    }

    @media(max-width: 60rem){ /* 950px */
        width: 100%;        
    }
`;
 
const OpcionSeleccionada = styled.div`
    width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.25rem; /* 20px */
        height: auto;
        margin-left: 1.25rem; /* 20px */        
    }

    // Centro la opcion seleccionada
    @media(max-width: 60rem){ /* 950px */
        display: block;        
    }
`;
 
const Opciones = styled.div`
    background: ${theme.grisClaro};
    position: absolute;
    top: 5.62rem; /* 90px */
    left: 0;
    width: 100%;
    border-radius: 0.625rem; /* 10px */
    max-height: 18.75rem; /* 300px */
    overflow-y: auto;
`;
 
const Opcion = styled.div`
    padding: 1.25rem; /* 20px */
    display: flex;
    
    svg {
        width: 28px;
        height: auto;
        margin-right: 1.25rem; /* 20px */
    }
    &:hover {
        background: ${theme.grisClaro2};
    }
`;

export {ContenedorSelect, OpcionSeleccionada, Opciones, Opcion};

