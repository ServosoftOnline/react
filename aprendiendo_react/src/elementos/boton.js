/*
    Elemento boton

        - Usado para asignar estilos mediante styled components
        - Tiene la subclase hover

        - Tiene las diferentes propiedades:
            - Propiedad largo que proporciona un ancho dinámico del 100% o automático.
            - Propiedad negro que añade un fondo negro, un color de fuente blanco
                - Contiene un hover que añade un fondo gris y un color de fuente negro
            - Propiedad marginTop que añade un margen de 15px hacia arriba
        
*/
import styled, { css } from 'styled-components';

const Boton = styled.button`
    background: #83d394;
    // margin-top: 15px;
    margin-bottom: 15px;
    padding: 20px;
    display: inline-block;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: .3s ease all;
    width: ${props => props.largo ? '100%' : 'auto'};
    
    &:hover {
        background: #44a559;
        color: #fff;
    }

    ${props => props.negro && css `
        background: black;
        color: white;
        
        &:hover {
            background: gray;
            color: black;
        }  
    `}

    ${props => props.marginTop && css ` margin-top: 15px;`}
    ${props => props.marginRight && css ` margin-right: 15px;`}
    
`;

export default Boton;