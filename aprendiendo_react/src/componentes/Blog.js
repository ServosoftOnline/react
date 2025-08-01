/*
    BLOG 
    - Usaré un hooks personalizado
    - Debemos simular la conexion a una base de datos
        - Creo el estado con un valor inicial de un array vacio
        - Despues de tres segundos simulamos obtener un array con los articulos
            - Mientras que se cargue mostraremos un mensaje que diga cargando
                - Usaremos el estado cargando con valor inicial a true y cuando se cargue pasará a false
        - Devolvemos de forma dinámica los títulos de dichos articulos
            - Debemos añadir un key unico para evitar advertencias de la consola del navegador que será el id

*/
          

// CSS
import ContenedorBlog from '../elementos/ContenedorBlog';
import TituloBlog from '../elementos/TituloBlog';
import ArticuloBlog from '../elementos/ArticuloBlog';


// HOOK PERSONALIZADO
import useObtenerArticulos from '../hooks/useObtenerArticulos';


const Blog = () => {
    // const [articulos, cargando] = useObtenerArticulos();
   const [articulos, cargando] = useObtenerArticulos();
    return (
        <ContenedorBlog>
            <TituloBlog>Blog</TituloBlog>
            {
                cargando === true ?
                    <p>Cargando ...</p>
                :
                    <div>
                        {articulos.map((articulo) => {
                            return (<ArticuloBlog key = {articulo.id}>{articulo.titulo}</ArticuloBlog>);
                        })}                
                    </div>
            }            
        </ContenedorBlog>
    );
};

 
export default Blog;