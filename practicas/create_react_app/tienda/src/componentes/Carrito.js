/*
    COMPONENTE CARRITO:

        - Lo mostraré en la columna de la derecha y siempre estará ahi aunque cambie de pagina
        - Importo los elementos con los estilos creados mediante styled component:
            - Producto contiene los estilos correspondientes a su contenedor
            - Nombre producto contiene los estilos correspondientes a su párrafo

        - Creo el componente Carrito obtenido como propiedad al array carrito proveniente de App.js
            - Devuelvo lo siguiente:
                - Los productos si los hubiese
                    - Los recorro, muestro los productos, los nombres y cantidades.
                        - Productos y nombres con estilos, cantidades no.
                    - Su key será su indice

                - Un mensaje que indica que no hay productos en el carrito


*/


//Elementos
import Producto from "../elementos/carrito/Producto";
import NombreProducto from "../elementos/carrito/NombreProducto";

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
 
export default Carrito;