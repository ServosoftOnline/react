/*
    BOTONES:

        - Importo:
            - useContext para acceder al contexto
            - El contexto que contiene a su vez el estado inicial y las funciones que modifican al tema
            - Los elementos que contienen los estilos

        - Creo el componente Controles
            - Contiene:
                - Los valores obtenidos del contexto que incluyen el estado inicial y las funciones
                - Extraigo las funciones

            - Devuelve:
                - Los botones. Si hago click en el botón ejecuto la función correspondiente

*/

// Contexto
import { useContext } from "react";
import { ContextoTema } from "../contextos/contextoTema";

// Elementos
import ContenedorControles from "../elementos/ContenedorControles";
import Boton from "../elementos/Botones";


const Controles  = () => {

    const {aumentarFuente, disminuirFuente, alineaIzda, alineaDcha, alineaAlCentro} = useContext(ContextoTema);    

    return (
        <ContenedorControles>
            <Boton onClick={aumentarFuente}>Aumentar fuente</Boton>
            <Boton onClick={disminuirFuente}>Disminuir fuente</Boton>
            <Boton onClick={alineaIzda}>Alinear a la izda</Boton>
            <Boton onClick={alineaAlCentro}>Centrar</Boton>
            <Boton onClick={alineaDcha}>Alinear a la dcha</Boton>
        </ContenedorControles>
    );
}

export default Controles;
