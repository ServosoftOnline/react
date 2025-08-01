/*
    PAGINA BLOG:

        - Importo el array que contiene los posts en la carpeta data
        - Importo el componente Navlink para crear los enlaces

        - DevuelvO:
            - La cabecera con el texto Blog
            - Una lista que contiene una expresión de javascript que hace lo siguiente:
                - Recorre todos los post y devuelve un elemento de la lista en cada pasada
                - Los elementos de la lista son enlaces con el titulo del post y deben ser únicos
                - Donde apunte el enlace debe ser creado de forma dinámica para indicar el id del post
*/

// import posts from './../data/post';
import { NavLink } from 'react-router-dom';
import posts from '../data/posts';

const PaginaBlog = () => {
    
    return (
        <div>
            <h2>Blog</h2>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key = {post.id}>
                            <NavLink to ={`/post/${post.id}`}>{post.titulo}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
 
export default PaginaBlog;