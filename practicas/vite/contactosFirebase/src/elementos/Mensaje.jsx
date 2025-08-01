// CONTIENE LOS ESTILOS DE LOS MENSAJES CON LOS RESULTADOS DE LAS OPERACIONES

import styled from "styled-components";

const Mensaje = styled.p`
    margin-top: 20px;
    color: ${(props) => props.color};
    
`;
     
export default Mensaje;