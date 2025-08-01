import React, {useReducer} from 'react';
import Boton from '../elementos/boton';

// Estado inicial
const contadorInicial = {contador: 0};

// Funcion reducer
const reducer = (estado, accion) => {
    switch (accion.tipo) {
        case 'INCREMENTAR':
            return {contador: estado.contador + 1}
        case 'DISMINUIR':
            return {contador: estado.contador - 1}
        case 'REINICIAR':
            return {contador: 0}
        default:
            return {estado};
    }
}

const ContadorFuncionalUseReducer = () => {
    const [estado, dispatch] = useReducer(reducer, contadorInicial);

    return (
        <div>
            <h3>Contador: {estado.contador} </h3>
            <Boton
                negro
                marginRight
                onClick = {() => dispatch({tipo: 'INCREMENTAR'})}
            >
                Aumentar            
            </Boton>

            <Boton
                negro
                marginRight
                onClick = {() => dispatch({tipo: 'DISMINUIR'})}
            >
                Disminuir
            </Boton>

            <Boton
                negro
                onClick = {() => dispatch({tipo: 'REINICIAR'})}
            >
                Reiniciar
            </Boton>

            <p>Componente funcional</p>
            <p>Usa el hook useReduced</p>
            <p>Estilos creados mediante styled components</p>                     
        </div> 
    )

}

export default ContadorFuncionalUseReducer;