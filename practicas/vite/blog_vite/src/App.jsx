/*
  CONTIENE LA EXTRUCTURA QUE DEBE TENER UNA APP PARA USAR REACT ROUTER

    - Una barra de navegación con los enlaces entre las etiquetas header
    - Las paginas entre las etiquetas main introducidas en etiquetas div

    - Debo importar los siguientes componentes y usarlos:

      - El componente BrowswerRouter
        - Introduzco toda la aplicación dentro del componente
        - Tambien podría importar el componente en index.js e introducir el componente App en su interior

      - El componente NavLink
        - Los uso como etiquetas en los enlaces sustituyendo a la etiqueta <a>
        - Sustituyo los href por to
        - Al usarlo la barra de dirección del navegador cambia y mostraría las rutas escritas despues del to

      - El componente Route
        - Lo uso para crear rutas
        - Se cierra por sí mismo
        - Las rutas dinámicas no servirían en el caso que los artículos fueran obtenidos de una base de datos
          - En este caso simulamos la base de datos con el archivo post.jsx que se encuentra dentro de la carpeta data

        - Tendrá los atributos:
          - element que contendrá código JSX o componentes
            - En este caso contendrá componentes que contendrán el código JSX con las etiquetas div que delimitan una pagina
          - path. Le añado la ruta que indiqué en to

      - El componente Routers. Es un contendor de todas las rutas:
          - Las páginas principales
          - Los post desde PaginaPost. Esta tendrá una parte dinámica
          - Error 404. Por si el usuario cambia la barra de direcciones con una pagina que no existe


    - Seria recomendable tener la app con un mayor orden de los componentes
      - BrowserRouter en index.js
      - NavLink en un componente Header, donde poner toda la barra de navegación
      - Route y Routes en un componente Routes, donde almacenar todas las rutas y las páginas
      - He querido dejar todos los componentes importados en App.js para que se vea y entienda mejor.

    - Aplico styled components para asignar estilos css

*/

// React router
import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';


// Styled components
import ContenedorPrincipal from './elementos/ContenedorPrincipal';
import Titulo from './elementos/Titulo';
import ContenedorHeader from './elementos/ContenedorHeader';
import Menu from './elementos/Menu';
import Main from './elementos/Main';

// Páginas
import PaginaInicio from './componentes/PaginaInicio';
import PaginaBlog from './componentes/PaginaBlog';
import PaginaAcercaDe from './componentes/PaginaAcercaDe';
import Post from './componentes/Post';
import PaginaError404 from './componentes/PaginaError404';


const App = () => {
  return (

    <BrowserRouter>
      <ContenedorPrincipal>

        <Titulo>Blog: Práctica para usar react router. Creada mediante vite</Titulo>
        <ContenedorHeader>

          {/* Barra de navegacion */}
          <Menu>
            <NavLink to ='/'>Inicio</NavLink>
            <NavLink to ='/blog'>Blog</NavLink>
            <NavLink to ='/acerca-de'>Acerca de ...</NavLink>
          </Menu>

        </ContenedorHeader>

        <Main>
          
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