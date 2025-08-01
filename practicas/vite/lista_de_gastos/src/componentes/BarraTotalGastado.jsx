/*
    COMPONENTE DE LA BARRA DONDE SE INDICA EL TOTAL GASTADO EN EL MES
*/

// Importa react, el elemento BarraTotal, la funcion convertirAMoneda
import React from "react";
import BarraTotal from "../elementos/BarraTotal";
import convertirAMoneda from "../funciones/convertirAMoneda";

// Contexto proporcionado por useTotalDelMes
import { useTotalDelMes } from "./../contextos/TotalGastadoEnElMes";

// Componente
const BarraTotalGastado = () => {

    // Extraigo el total del contexto
    const {total} = useTotalDelMes();

    // Lo devuelvo convertido en moneda en el interior de la barra
    return ( 
        <BarraTotal>
            <p>Total gastado en el mes actual:</p>
            <p>{convertirAMoneda(total)}</p>
        </BarraTotal>        
     );
}
 
export default BarraTotalGastado;