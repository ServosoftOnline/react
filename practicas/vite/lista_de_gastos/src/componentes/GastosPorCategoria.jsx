/*
  PAGINA QUE MUESTRA LOS GASTOS POR CATEGORIA

    - Importo:
      - La libreria de react
      - El componente helmet de react router
      - Los elementos que valla a usar en el heder
      - El boton regresar que permitirá regresar a la pagina raiz o a la pagina que le indicara como argumento
        - ej: Si quisiera regresar a la pagina de gastos por categoría tendria que escribir: <BtnRegresar ruta = '/categorias'/> 

    - Creo el componente:
      - Devuelvo un fragmento que contiene:
        - El titulo de la pestaña indicado entre las etiquetas Helmet
        - La cabecera que contendrá el boton para regresar a la pagina raiz
        - El titulo de la pagina
        - La cabecera con el título y el botón para regresar
        - La lista de gastos obtenidas por categorias obtenida desde el hook useObtenerGastosDelMesPorCategoria        
        - La barra con el total de los gastos del mes
*/

// React
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo} from "../elementos/ElementosDeHeader";
import BtnRegresar from "../elementos/BtnRegresar";
import IconosCategorias from "../elementos/IconosCategorias";
import {ListaDeCategorias, ElementoListaCategorias, Categoria, Valor} from './../elementos/ElementosDeLista';

// Funciones
import convertirAMoneda from "../funciones/convertirAMoneda";

// Componentes
import BarraTotalGastado from './BarraTotalGastado';

// Hooks
import useObtenerGastosDelMesPorCategoria from "../hooks/useObtenerGastosDelMesPorCategoria";

// Componente actual
const GastosPorCategoria = () => {
  const gastosDelMesPorCategoria = useObtenerGastosDelMesPorCategoria();
  
  return (    
    <HelmetProvider>

      {/* Título de la pagina */}
      <Helmet>
        <title>Gastos por categoria</title>
      </Helmet>

      {/* Cabecera */}
      <Header>
        <Titulo>Gastos por categoría</Titulo>
        <BtnRegresar/>                    
      </Header>

      {/* Muestro la información obtenida desde el hook */}
      <ListaDeCategorias>

        {gastosDelMesPorCategoria.map((elemento, index) => {

          return (
            <ElementoListaCategorias key = {index}>
              <Categoria>
                <IconosCategorias id={elemento.categoria}/>  
                {elemento.categoria}
              </Categoria>
              <Valor>{convertirAMoneda(elemento.cantidad)}</Valor>            
            </ElementoListaCategorias>
          );
          
        })}

      </ListaDeCategorias>
      
      {/* Barra con el total */}
      <BarraTotalGastado />
    </HelmetProvider>       
  );
}
 
export default GastosPorCategoria;
