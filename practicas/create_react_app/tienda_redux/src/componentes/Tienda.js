/*
    PAGINA TIENDA:
        - Importo el componente Productos
        - Creo el componente Tienda que obtiene como propiedad el array productos creado en App.js
        - Devuelvo:
            - La cabecera Tienda
            - LLamo al componente Productos pasandole el array productos que se encagará de mostrarlos
*/

import Productos from "./Productos";

const Tienda = () => {
    return (
        <div>
            <h2>Tienda</h2>
            <Productos />            
        </div>
        
    );
}
 
export default Tienda;