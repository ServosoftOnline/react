/*
    MEDIANTE REDUX OBTENGO DESDE EL ESTADO GLOBAL LA PROPIEDAD PRODUCTOS

        - Para usar redux y obtener el estado global
        - importo connect desde react-redux

        - Para obtener la propiedad productos desde el estado global:

            - Defino la función mapStateToProps
                - recibe como parámetro un objeto con el estado global.
                - devuelve un objeto que contiene:
                    - Las propiedades que queremos inyectar al componente Productos
                    - cuyo contenido lo obtengo del parámetro recibido con el objeto estado global

            - antes de exportar el componente Productos:
                - Lo Mapeo al estado global a propiedades. (función mapStateToProps)
                - Y lo conectamos con el estado global (connect)

            - Ahora la propiedad productos ya está accesible desde el estado global
                - Puedo usar la propiedad productos dentro del componente Productos

        - Para obtener la funcion agregarProductoAlcarrito desde el estado global:
            - Defino la funcion mapDispatchToProps
                - contiene el valor dispatch como argumento
                - Devuelvo un objeto:
                    - Su propiedad será el nombre de la función
                    - Su valor es una función
                        - Le indico los parámetros necesarios
                        - El valor dispatch contiene un objeto con las siguientes propiedades y valores:
                            - type: el nombre de la acción
                                - Coincide con el nombre que puse en la funcion reducer de tiendaReducer.js
                            - Añado el resto de propiedades asignandole el valor con los parámetros



            - La exporto e injecto al estado global mediante connect
            - La función reducer recibe el nombre de la acción y ejecuta la funcion asociada a esta acción

            




*/

// Elementos
import ContenedorProductos from './../elementos/ContenedorProductos';
import Producto from './../elementos/Producto';
import Boton from './../elementos/Boton';

// Redux
import { connect } from 'react-redux';

//La propiedad productos ya está accesible sin haberla pasado mediante prop driling
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

// Devuelvo la propiedad productos con el contenido de productos procedente del estado global
const mapStateToProps = (estado) => {
    return {
        productos: estado.productos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        agregarProductoAlCarrito: (idProductoAAgregar, nombre) => {
            dispatch(
                {
                    type: 'AGREGAR_PRODUCTO_AL_CARRITO',
                    idProductoAAgregar: idProductoAAgregar,
                    nombre: nombre
                }
            );
        }
    }
}
    
// La propiedad productos la conecto al estado global 
export default connect(mapStateToProps, mapDispatchToProps)(Productos);