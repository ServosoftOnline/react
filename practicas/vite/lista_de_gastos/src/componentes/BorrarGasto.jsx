/*
  COMPONENTE QUE PERMITE  BORRAR  UN GASTO

    - Pedirá confirmación antes de borrar un gasto.
    - Muestra por pantalla los datos a borrar y pide confirmación
    - Le paso por la barra de dirección el id del gasto
    - Llamo al hook para obtener toda la informacion de ese id del gasto
    - IMPORTANTE: DEBO CONTROLAR QUE SE HALLA EJECUTADO EL HOOK ANTES DE CONTINUAR. SI NO ME INDICA QUE LA FUNCION .DATA NO EXISTE 
    - Cargo todos los componetes de la pagina editar el gasto
    - El botón que confirma el gasto
    - Cuando haga click en el botón llama a la función llamaAEliminarGasto
    - llamaEliminarGasto llama a la función eliminarGasto que se conecta a la base de datos de forma asincróna
      - Si devolió ok cambia el mensaje de la validación correcta y redirige a lista de gastos pasados unos segundos
      - Si devolvió ko cambia el mensaje de la valicación incorrecta y no dirige para que se aprecie bien el error
      
*/

// React
import React, { useContext } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";

// Elementos
import {Header, Titulo} from '../elementos/ElementosDeHeader';
import BtnRegresar from "../elementos/BtnRegresar";
import IconosCategorias from "../elementos/IconosCategorias";
import { Lista, ElementoLista, Categoria, Descripcion, Valor, Fecha } from '../elementos/ElementosDeLista';
import{ContenedorBoton} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";

// Componentes
import BarraTotalGastado from "./BarraTotalGastado";
import Mensaje from "./Mensaje";

// Contexto
import {ContextoMensaje} from './../contextos/contextoMensaje';

// Hook
import useObtenerUnGasto from "../hooks/useObtenerUnGasto";

// Funciónes importadas
import convertirAMoneda from "../funciones/convertirAMoneda";
import formatearFecha from "../funciones/formatearFecha";
import eliminarGasto from './../firebase/eliminarGasto';


// Mi componente
const BorrarGasto = () => {
  
  // Extraigo el id de la barra de dirección y se lo paso al hook
  const {id} = useParams();
  const [gasto] = useObtenerUnGasto(id);  
  const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje} = useContext(ContextoMensaje);
  const navigate = useNavigate();

  // Función que se ejecuta cuando haga click en el botón
  const llamaAEliminarGasto = () => {
    eliminarGasto(id)
    .then (() =>{
        cambiarMensaje('Gasto borrado con éxito', 'correcta');
        setTimeout(() => {
            reiniciarMensaje();
            navigate('/lista');
          }, 5000);

    }).catch ((error) => {
        cambiarMensaje('Error en la base de datos al borrar el gasto', 'incorrecta');
        console.log(error);
    });
  }

  return (
    <>
      <HelmetProvider>

        <Helmet>
          <title>Borrar Gasto</title>
        </Helmet>
        
        <Header>
          <Titulo>Borrar Gasto</Titulo>
          <BtnRegresar ruta='/lista' />                     
        </Header>

        {/* Si se ejecutó el hook y obtube gasto, muestro la lista con un elemento, el botón centrado y el mensaje de validacion */}
        {gasto && (
          <>                    
            <Lista>    
              <Fecha>{formatearFecha(gasto.data().fecha)}</Fecha>          
            
              <ElementoLista>    

                <Categoria>
                  <IconosCategorias id={gasto.data().categoria}/>
                  {gasto.data().categoria}
                </Categoria>

                <Descripcion>{gasto.data().descripcion}</Descripcion>
                <Valor>{convertirAMoneda(gasto.data().importe)}</Valor>

              </ElementoLista>            
            </Lista>
    
            <ContenedorBoton>
              <Boton
                $primario          
                as="button"
                onClick={() => llamaAEliminarGasto()}              
              > 
                Pulse aquí para borrar el gasto
              </Boton>
            </ContenedorBoton>
            <Mensaje $validacion={rdoValidacion} mensaje={mensajeAMostrar}/>
          </>
        )}
        
        {/* Muestro la barra con el total gastado en el mes actual */}
        <BarraTotalGastado />

      </HelmetProvider>       
    </>
  );
}
 
export default BorrarGasto;