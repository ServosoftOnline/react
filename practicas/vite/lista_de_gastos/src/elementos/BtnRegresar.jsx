/* 
    ELEMENTO BOTON REGRESAR
    
        - Permite regresar a la ruta que le indiqué al llamarlo. Si no le indiqué ruta envia a la pagina raiz
        - Importo:
            - Las librerias de react y styled components
            - El icono svg para regresar
            - El hook UseNavigate que permite moverse entre paginas

        - Defino los estilos

        - Creo el componente btnRegresar
            - Tiene como parámetro una ruta opcional
            - Creo la cte navigate donde almaceno el resultado de lo que devuelve el hook
            - Cuando se haga un click en el botón me moveré a la pagina indicada al llamar al componente o a la raiz



*/


import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import IconoFlecha from './../assets/flecha.svg?react';

// Estilos
const Btn = styled.button`

    // Tamaño
    display: block;
    width: 3.12rem; /* 50px */
    height: 3.12rem; /* 50px */
    line-height: 3.12rem; /* 50px */
    text-align: center;
    margin-right: 1.25rem; /* 20px */
    border: none;
    background: #000;
    color: #fff;

    // Alineado vertical y horizontal
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.31rem; /* 5px */
    cursor: pointer;
 
    // Cuando el tamaño de la ventana sea inferior a 950 hago el boton mas pequeño
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`;
 
const Icono = styled(IconoFlecha)`
    width: 50%;
    height: auto;
    fill: #fff;
`;

// Componente
const BtnRegresar = ({ruta = '/'}) => {
    const navigate = useNavigate();   
    return (
        <Btn onClick={() => {navigate(ruta)}}><Icono/></Btn>
    );
}
 
export default BtnRegresar;