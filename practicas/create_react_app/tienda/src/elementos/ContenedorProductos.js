/*
    ESTILOS DEL CONTENEDOR DE LOS PRODUCTOS:
        - 2 columnas, separadas 20px entre ellas y un padding de 20px vertical
*/

import styled from "styled-components";

const ContenedorProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 0;
`;

 
export default ContenedorProductos;

