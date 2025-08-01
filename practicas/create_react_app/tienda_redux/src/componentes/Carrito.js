/*
    MEDIANTE REDUX OBTENGO DESDE EL ESTADO GLOBAL LA PROPIEDAD CARRITO

        - Para usar redux y obtener el estado global
            - importo connect desde react-redux

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

*/


//Elementos
import Producto from "../elementos/carrito/Producto";
import NombreProducto from "../elementos/carrito/NombreProducto";

// Redux
import { connect } from 'react-redux';

//La propiedad carrito ya está accesible sin haberla pasado mediante prop driling
const Carrito = ({carrito}) => {  

    return (
        <div>
            <h2>Carrito</h2>
            {carrito.length > 0 ?
                carrito.map((producto, index) => {
                    return(
                        <Producto key = {index}>
                            <NombreProducto>{producto.nombre}</NombreProducto>
                            <p>{producto.cantidad}</p>              
                        </Producto>
                    );                            
                })                  
            :
                <p>No se añadieron productos</p>
            }
        </div>
     );
}

// Devuelvo la propiedad carrito con el contenido proveniente del carrito del estado global
const mapStateToProps = (estado) => {
    return {
        carrito: estado.carrito
    }
}


// La propiedad carrito la conecto al estado global  
export default connect(mapStateToProps)(Carrito);