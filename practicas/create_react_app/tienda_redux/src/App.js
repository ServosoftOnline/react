/*
  APLICACION TIENDA REACT:
    
    - Usaré un estado global y evitaré realizar propdriling como hice en la app tienda
      - Cualquier pagina de la app puede acceder a ese estado global.
      - Elimino estados locales y su envio como propiedades al llamar al componente

    - El codigo se basa en app tienda y lo modifico para aplicar la libreria REDUX
    - REDUX está en deshuso. Cabe la posibilidad que lo encuentre en codigos antíguos.
    - Sigo usando react, react router y styled components.
    - En index.js explico como aplicar redux.
    
*/

// React y react router
import {React} from 'react';
import {NavLink,Route, Routes} from 'react-router-dom';

// Elementos
import Contenedor from './elementos/Contenedor';
import Menu from './elementos/Menu';

// Componentes
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Tienda from './componentes/Tienda';
import Carrito from './componentes/Carrito';
import Error404 from './componentes/Error404';


const App = () => {
  
  return (
    <Contenedor>
        <h3>Tienda: Práctica para aprender REDUX. Evito prop driling. Uso boilerplate</h3>

      {/* Menú de navegacion */}
      <Menu>
        <NavLink to = '/'>Inicio</NavLink>
        <NavLink to ='/blog'>Blog</NavLink>
        <NavLink to = '/tienda'>Tienda</NavLink>
      </Menu>

      {/* La parte principal ocupará las dos primeras columnas */}
      <main>

        {/* Rutas hacia las paginas principales */}
        <Routes>
          <Route path='*' element={<Error404 />} />      
          <Route path='/' element={<Inicio/>} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/tienda' element={<Tienda />} />          
        </Routes>

      </main>

      {/* La tercera columna la ocupara el aside */}
      <aside>
        {/* <Carrito carrito={carrito}/> */}
        <Carrito />
      </aside>

    </Contenedor>

  );
}

export default App;