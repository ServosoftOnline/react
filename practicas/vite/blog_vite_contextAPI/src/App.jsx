/*

  PRACTICA: USO DE CONTEXT API

    - Permite crear un estado global en nuestra aplicacion.
    - No necesitaríamos la libreria REDUX
    - Ya viene integrada en react. No es necesario instalar ninguna libreria
    - Permite generar contextos, que serán globales para toda la app
    - Guardare los contextos en una carpeta llamada contextos


    - En esta aplicacion:
      - Modificaré la practica del blog
      - Usa vite, react router, styled componentes y CONTEXT API para gestionar los contextos

      - Modificará el tamaño de la fuentes y centrará o alineará la pagina a izq o derecha
        - Se aplica a todas las páginas gracias al contexto

      - Aplico contextApi de la siguiente forma:
        - importo el hook useContext y el contexto
        - Accedo al contexto y extraigo el objeto tema
        - Le paso el tema al elemento Main

    
        
 

*/

// importo react y los componentes que necesito de react router
import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

// elementos creados con Styled components
import ContenedorPrincipal from './elementos/ContenedorPrincipal';
import Titulo from './elementos/Titulo';
import ContenedorHeader from './elementos/ContenedorHeader';
import Menu from './elementos/Menu';
import Main from './elementos/Main';

// Páginas
import PaginaInicio from './componentes/paginas/Inicio';
import PaginaBlog from './componentes/paginas/Blog';
import PaginaAcercaDe from './componentes/paginas/AcercaDe';
import Post from './componentes/Post';
import PaginaError404 from './componentes/paginas/Error404';

// Hook useContext y contexto
import { useContext } from "react";
import { ContextoTema } from './contextos/contextoTema';

//Controles del tema
import Controles from "./componentes/controles";


const App = () => {

  // Accedo al contexto y extraigo el objeto tema.
  const {tema} = useContext(ContextoTema);
  
  return (

    <BrowserRouter>
      <ContenedorPrincipal>

        <Titulo>Blog aplicando context api</Titulo>
        <ContenedorHeader>

          {/* Barra de navegacion */}
          <Menu>
            <NavLink to ='/'>Inicio</NavLink>
            <NavLink to ='/blog'>Blog</NavLink>
            <NavLink to ='/acerca-de'>Acerca de ...</NavLink>
          </Menu>
          <Controles/>

        </ContenedorHeader>

        {/* Le paso el tema como propiedad al elemento Main */}
        <Main tema={tema}>
          
          <Routes>
            
            {/* Rutas hacia las paginas principales */}
            <Route path='/' element={<PaginaInicio/>} />
            <Route path='/blog' element={<PaginaBlog />} />
            <Route path='/acerca-de' element={<PaginaAcercaDe />} />

            {/* Rutas hacia los post. ruta dinámica a partir de :id */}
            <Route path='/post/:id' element={<Post />} />

            {/* Ruta hacia la pagina error 404 */}
            <Route path='*' element={<PaginaError404 />} />

          </Routes>
          
        </Main>
        
      </ContenedorPrincipal>
    </BrowserRouter>  

  );
}
export default App;