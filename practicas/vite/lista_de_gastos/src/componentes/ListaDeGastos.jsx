/*
  PAGINA QUE MUESTRA LA LISTA DE GASTOS DEL USUARIO ACTIVO

    - Importo:
      - Lo que valla a usar de react
      - Los elementos que valla a usar
      - Componentes, hooks, funciones, ...    
      
    - Creo el componente:
      - Obtengo del hook lo siguiente del usuario actual:
        - Sus gastos
        - La función para obtener 10 gastos mas
        - El estado que almacena si hay mas gastos que cargar

      - Creo una función que usaré únicamente en este componente
        - Me permitirá comprobar si un gasto y su siguiente tienen la misma fecha
        - Si es así no mostraré la fecha en la lista

      - Devuelvo un fragmento que contiene:
        - El titulo de la pestaña indicado entre las etiquetas Helmet
        - La cabecera que contendrá el título y el boton para regresar a la pagina raiz

        - Creo la lista:
            - Recorro todos los gastos y voy devolviendo los elementos de esa lista
            - Estarán englobados en un div que me permite añadirle un solo key a ambos elementos

            - Contendrá:
              - Las fechas no repetidas. Si la fecha no es la misma que la anterior no la muestro
              - El icono de la categoria y la categoria correspondiente
              - Descripción e importe del gasto. Este ultimo le aplico la funcion de convertirAMoneda
              - Un contenedor con los botones editar y borrar gasto. El de editar se comporta como link
              - Un botón de cargar mas, esos se limitarán a 10 articulos por pagina
                - Cuando haga click en el llamará a la funcion obtenerMasGastos del hook
              - Un boton BotonCargarMas que se mostrará o no dependiendo del estado hayMasPorCargar
              - Un mensaje que no hay gastos si no los hubiera
                - Contendrá un botón que actua como link a la raiz para añadir gastos       

        - La barra que muestre los gastos del mes actual 
*/

// React
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { Link } from "react-router-dom";

// Elementos
import {Header, Titulo} from "../elementos/ElementosDeHeader";
import BtnRegresar from "../elementos/BtnRegresar";
import IconosCategorias from "../elementos/IconosCategorias";
import Boton from "../elementos/Boton";

// Elementos para la lista
import { Lista, ElementoLista, Categoria, Descripcion,
Valor, Fecha, ContenedorBotones, BotonAccion,BotonCargarMas, ContenedorBotonCentral,
ContenedorSubtitulo, Subtitulo} from './../elementos/ElementosDeLista';

// Componentes
import BarraTotalGastado from './BarraTotalGastado';

// Hooks
import useObtenerGastos from "../hooks/useObtenerGastos";

// Funciones
import convertirAMoneda from "../funciones/convertirAMoneda";
import formatearFecha from "../funciones/formatearFecha";

// SVG como elemento
import IconoEditar from './../assets/editar.svg?react';
import IconoBorrar from './../assets/borrar.svg?react';



// Componente
const ListaDeGastos = () => {

  // Obtengo del hook lo siguiente
  const [gastos, obtenerMasGastos, hayMasPorCargar] = useObtenerGastos(); 

  // Funcion que comprueba si la fecha del index anterior es igual a la fecha del index actual
  const fechaEsIgual = (gastos, index, gasto) => {

    // La posición 0 no tiene fecha anterior
    if(index!==0) {
      const fechaActual = formatearFecha(gasto.fecha);
      const fechaGastoAnterior = formatearFecha(gastos[index -1].fecha);
      if (fechaActual===fechaGastoAnterior) return true;
      else return false;
    }    
    
  }
 
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Lista de gastos</title>
        </Helmet>

        {/* Cabecera */}
        <Header>
          <Titulo>Lista de gastos</Titulo> 
          <BtnRegresar/>      
        </Header>

        {/* Lista  */}
        <Lista>
          {            
            // Si no hay guardado ningún gasto muestra el mensaje y un botón como link para añadir gastos            
            gastos.length===0 ?
              <ContenedorSubtitulo>
                <Subtitulo>No hay gastos que mostrar</Subtitulo>
                <Boton as={Link} to='/' $primario>Ir a añadir gastos</Boton>
              </ContenedorSubtitulo>
            :
            
              // En caso contrario recorro los gastos. Mostrando:
              // Fechas no repetidas, el gasto y un botón para mostrar más gastos o informar que no hay mas gastos que mostrar
              gastos.map((gasto, index) => {
                return (

                  // Solo tengo un key que debo añadir a los elementos Fecha y ElementosLista
                  // Englobo a los elementos en un div al que le pongo el key
                  <div key={gasto.id}>

                    {/* Solo mostraré la fecha si es diferente a la anterior */}
                    {!fechaEsIgual(gastos, index, gasto) &&
                        <Fecha>
                          {formatearFecha(gasto.fecha)}
                        </Fecha>
                    }

                    <ElementoLista>
                  
                      <Categoria>
                          <IconosCategorias id={gasto.categoria}/>  
                          {gasto.categoria}
                      </Categoria>

                      <Descripcion>
                        {gasto.descripcion}
                      </Descripcion>

                      <Valor>
                        {convertirAMoneda(gasto.importe)}
                      </Valor>

                      {/* Botones para editar o borrar el gasto mostrado */}
                      <ContenedorBotones>

                          <BotonAccion as={Link} to={`/editar/${gasto.id}`}> 
                            <IconoEditar /> 
                          </BotonAccion>

                          <BotonAccion as={Link} to={`/borrar/${gasto.id}`}> 
                            <IconoBorrar />
                          </BotonAccion>

                        </ContenedorBotones>                  
                    </ElementoLista>
                  </div>                
                )
              })
            }          

            {/* Cambio el contenido del botón dependiendo si hay mas gastos por mostrar*/}
            {hayMasPorCargar ?

                // Si hay más ejecuto la función de obtenerMasGastos del obtenida desde el hook
                <ContenedorBotonCentral>
                  <BotonCargarMas onClick={() => obtenerMasGastos()}>Cargar más gastos</BotonCargarMas>
                </ContenedorBotonCentral>         
              :            
                // Si no muestro el mensaje no hay mas gastos sin la función onClick
                <ContenedorBotonCentral>
                  <BotonCargarMas>No hay más que mostrar</BotonCargarMas>
                </ContenedorBotonCentral>
            }

        </Lista>

        {/* Barra de gastos totales del mes */}
        <BarraTotalGastado />
        
      </HelmetProvider>       
    </>      
  );
}
 
export default ListaDeGastos ;

