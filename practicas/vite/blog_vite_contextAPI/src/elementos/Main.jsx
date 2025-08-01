/*
  ESTILOS APLICADOS AL SHOWCASE:

    - El tamaño de la fuente estará condicionado
      - Si lo pasé como propiedad tendrá el valor que le pasé si no pase nada será de 16px

    - Igual para el alineado.
    - Bordes redondeados con un radio de 10px y una sombra.
    
    
*/

import styled from "styled-components";

const Main = styled.main`
  
  font-size: ${props => props.tema ? props.tema.fuente + 'px': '16px'};
  text-align: ${props => props.tema ? props.tema.alineado : 'center'};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default Main;