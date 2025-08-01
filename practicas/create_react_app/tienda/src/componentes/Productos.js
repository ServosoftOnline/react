/*
    PAGINA DE PRODUCTOS:

        - La llamo desde la pagina tienda
        - Importo los elementos que usaré que contienen los estilos definidos mediante styled components
        - Creo el componente Productos obteniendo como propiedad el array con los productos    
                
        - Devuelvo:
            - El elemento contenedor productos con los estilos aplicados mediante styled components
            - Recorro el array productos y en cada pasada:
                - Devuelvo un producto que contiene un parrafo y un boton con sus estilos asociados                
                - Le asigno como key su id

*/

// Elementos
import ContenedorProductos from './../elementos/ContenedorProductos';
import Producto from './../elementos/Producto';
import Boton from './../elementos/Boton';


const Productos = ({productos, agregarProductoAlCarrito}) => {

    return (
        <ContenedorProductos>
            {productos.map((producto, index) => {
                return(
                    <Producto key= {index} >
                        <p>{producto.nombre}</p>
                        <Boton onClick={()=>agregarProductoAlCarrito(producto.id, producto.nombre)}
                            >Agregar al carrito
                        </Boton>
                    </Producto>
                );
            })}
        </ContenedorProductos>
    );        
    
}

    

 
export default Productos;