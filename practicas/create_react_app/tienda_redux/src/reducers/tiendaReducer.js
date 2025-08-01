/*
    FUNCION REDUCER:

        - Funciones que editan el estado global
        - Serán guardadas en una carpeta llamada reducers en archivos independientes
        - En este caso la tienda modificara el estado global añadiendo productos al carrito

        - Defino su estado inicial que será un objeto con las siguientes propiedades:
            - productos que será un arreglo que contiene un objeto por cada producto
            - carrito que será un arreglo con los ids de los productos agregados

        - Defino la función reducer y la exporto por defecto
            - Modifica el estado global de la app
            - Tendrá dos argumentos:
                - Su estado inicial definido anteriormente
                - Una acción a ejecutar
                    - Es un objeto que tiene la propiedad .type
                    - La evaluaremos usando una instruccion switch. 
                    - Dependiendo del contenido de la acción ejecutaremos una función u otra editando su estado
                    - Si la acción no se registra en ninguno de los casos devuelvo el estado sin editar
   

*/

const estadoInicial = {

    productos: [
        {id: 1, nombre: 'Producto1'},
        {id: 2, nombre: 'Producto2'},
        {id: 3, nombre: 'Producto3'},
        {id: 4, nombre: 'Producto4'}
    ],
    
    carrito : []
}

const reducer = (estado = estadoInicial, accion) => {
    switch(accion.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO' : 
            
            // Extraigo id del producto a agregar y su nombre de la acción
            const {nombre, idProductoAAgregar} = accion;

            // Si no hubiera productos en el carrito lo añado al estado global
            if (estado.carrito.length === 0) {
                return {
                    ...estado,
                    carrito: [{id: idProductoAAgregar, nombre: nombre, cantidad: 1}]
                }
            } else {

                // Hay productos ya en el carrito.
                // Compruebo si el producto a añadir ya estuviera en el carrito y su posición
                let estaEnCarrito = false;
                let enLaPosicion = 0;
                estado.carrito.forEach((productoEnCarrito, index) => {
                    if (productoEnCarrito.id === idProductoAAgregar){
                       estaEnCarrito = true;
                       enLaPosicion = index;
                     } 
                  });

                // Clono el carrito para poder modificarlo
                const nuevoCarrito = [...estado.carrito];

                //Si está en carrito modifico su cantidad en la posición obtenida. 
                if(estaEnCarrito) {

                    nuevoCarrito[enLaPosicion] = {
                    id:idProductoAAgregar,
                    nombre: nombre,
                    cantidad: nuevoCarrito[enLaPosicion].cantidad +1
                    }        

                //Si no está empujo el producto que deseo añadir al final del array
                } else {
                    nuevoCarrito.push({id:idProductoAAgregar, nombre:nombre, cantidad: 1});
                }

                //Devuelvo el nuevo carrito como halla quedado
                return {
                    ...estado,
                    carrito: nuevoCarrito
                }
            }
            
        default:
            return estado;
    }    
    
}
 
export default reducer;