/*
   COMPONENTE PPAL DE LA APLICACION

      - Pagina ppal que servirá para añadir los gastos

      - Importo:
         - Las librerias necesarias para usar react, Helmet
         - Los elementos que usaré en la cabecera
         - El elemento que contiene los estilos del boton


      - Creo el componente ppal
         - Uso helmet para agregar un titulo
         - Defino mi cabecera añadiendo los elementos
            - Creo los botones. Le añado los estilos creados en el elemento Boton
               - Botón fue creado mediante el componente Link de react router.
                  -Implica que puedo usar to="/pagina" para poder acceder a la pagina definidas en los path de las rutas

*/

// React router
import React from "react";
import {Helmet, HelmetProvider} from 'react-helmet-async';

// Elementos
import {Header, Titulo, ContenedorBotones, ContenedorHeader} from "./elementos/ElementosDeHeader";
import Boton from "./elementos/Boton";
import BotonCerrarSesion from "./elementos/BotonCerrarSesion";

// Componentes
import FormularioGasto from "./componentes/FormularioGasto";
import BarraTotalGastado from './componentes/BarraTotalGastado';

const App = () => {
  return (        
      <>
         <HelmetProvider>

            {/* Configuración de la pagina */}
            <Helmet>
               <title>Agregar gastos</title>
            </Helmet>

            {/* Cabecera */}
            <Header>
               <ContenedorHeader>
                  <Titulo>Agregar gasto</Titulo>
                  <ContenedorBotones>
                     <Boton to = '/categorias'>Categorías</Boton>                     
                     <Boton to = '/lista'>Gastos</Boton>
                     <BotonCerrarSesion/>
                  </ContenedorBotones>
               </ContenedorHeader>
            </Header>

            {/* Formulario*/}
            <FormularioGasto/>

            {/* Barra del total gastado */}
            <BarraTotalGastado />


         </HelmetProvider>
      </>  
   );
}

export default App;