/*
    PAGINA BLOG:

        - Importo:
            - El array que contiene los posts en la carpeta data
            - El componente Navlink para crear los enlaces
            - El hook useContext para acceder al contexto
            - El contexto

        - Devuelvo:
            - La cabecera con el texto Blog
            - Una lista que contiene una expresión de javascript que hace lo siguiente:
                - Recorre todos los post y devuelve un elemento de la lista en cada pasada
                - Los elementos de la lista son enlaces con el titulo del post y deben ser únicos
                - Donde apunte el enlace debe ser creado de forma dinámica para indicar el id del post

        - Dejo comentados las importaciones del hook useContext, ContextoTema y las formas de acceder
            - Solo valdrían como ejemplo para indicar como poder acceder al contexto
*/


import posts from '../../data/posts';
import { NavLink } from 'react-router-dom';
/*
import { useContext } from 'react';
import { ContextoTema } from '../contextos/contextoTema';
*/

const PaginaBlog = () => {

    /*
    //Puedo acceder al contexto guardando el contenido en un objeto
    const objeto = useContext(ContextoTema);
    console.log(objeto);

    // Puedo extraer del contexto el valor de la propiedad nombre
    const {nombre} = useContext(ContextoTema);
    console.log(nombre);
    */

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