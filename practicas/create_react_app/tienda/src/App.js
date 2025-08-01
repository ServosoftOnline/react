/*
  APLICACION TIENDA REACT:

    - Cree esta aplicación para aprender a usar prop driling. Consiste en:
      - Tener los datos o funciones principales en el componente ppal y pasarlos a los componentes como propiedades
      - Los componentes los usarían o se los pasarían a otros componentes en su interior
      - En este caso lo paso esta información al componente tienda que a su vez se lo pasa al componente productos
        - Le paso el array con los productos y la función para agregar productos al carrito

    - Para evitar prop drilink se empezó a usar la libreria REDUX, para crear un estado global, y después CONTEXT API
    - La tercera columna con la etiqueta aside contendrá el carrito y se mantendrá siempre en pantalla      
    - Uso react, react router y styled components. Esto último añadido en cada uno de los elementos
    - La creé mediante create react app
    - Uso react router, styled components
    - Simulo una base de datos mediante el array de objetos productos
    
*/

// React y react router
import {React, useState} from 'react';
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

  const productos = [
    {id: 1, nombre: 'Producto1'},
    {id: 2, nombre: 'Producto2'},
    {id: 3, nombre: 'Producto3'},
    {id: 4, nombre: 'Producto4'}
  ];

  //Estado carrito
  const [carrito, cambiarCarrito] = useState([]);

  // Función que agrega un producto al carrito
  const agregarProductoAlCarrito = ((idProductoAAgregar, nombre)=> {

    // Si no hay productos en el carrito lo inicio con los parámetros obtenidos
    if(carrito.length === 0) {
      cambiarCarrito([{id:idProductoAAgregar, nombre: nombre, cantidad:1}]);

    } else {

      // Compruebo si el producto que queremos añadir ya estuviera en el carrito y en que posición
      let estaEnCarrito = false;
      let enLaPosicion = 0;
      carrito.forEach((productoEnCarrito, index) => {
        if (productoEnCarrito.id === idProductoAAgregar){
          estaEnCarrito = true;
          enLaPosicion = index;
        } 
      });

      // Clono el carrito para poder modificarlo
      const nuevoCarrito = [...carrito];
      
      //Si está en carrito modifico su cantidad en la posición obtenida. Si no lo empujo al final del array
      if(estaEnCarrito) {
        nuevoCarrito[enLaPosicion] = {
          id:idProductoAAgregar,
          nombre: nombre,
          cantidad: nuevoCarrito[enLaPosicion].cantidad +1}        
      } else {
        nuevoCarrito.push({id:idProductoAAgregar, nombre:nombre, cantidad: 1});
      }

      //Cambio el estado del carrito con el nuevo carrito obtenido
      cambiarCarrito(nuevoCarrito);
    }

  });

  return (
    <Contenedor>
        <h3>Tienda: Práctica para aprender prop driling. Creada mediante create react app</h3>

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
          <Route path='/tienda' element={
              <Tienda 
                productos={productos}
                agregarProductoAlCarrito={agregarProductoAlCarrito}                
              />
            } />          
        </Routes>

      </main>

      {/* La tercera columna la ocupara el aside */}
      <aside>
        <Carrito carrito={carrito}/>
      </aside>

    </Contenedor>

  );
}

export default App;