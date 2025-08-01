/*
    MUESTRA EL CONTENIDO DEL ARTICULO SELECCIONADO EN PAGINABLOG.JS

        - Importo el array con todos los post

        - Mostraré el que indique su id en la barra de direccion. Ej: http://localhost:3000/post/1
            - Lo obtengo mediante el hook useParams y lo extraigo mediante {id}
            - Lo usaré como indice dinámico en el array post
            - Los indices de los arrays comienzan en 0 y el primer id de los post es 1
                - Debo mostrar el id obtenido desde la barra y restarle 1

            - Si el usuario modifica el id de la barra y no coincide con algun id de post, el programa se rompe
                - Lo valido en el interior de un fragmento <> </> para poder introducir Javascript en su interior
                    - Si existe posts[id-1] lo muestro y si no
                        - Puedo mostrar un mensaje indicando que no existe o
                        - Puedo redireccionarlo mediante el hook Navigate.
                        - Opto por la segunda opcion y lo redirecciono al inicio

*/

import React from "react";
import post from "../data/posts";
import { useParams, Navigate } from "react-router-dom";

const Post = () => {
    const {id} = useParams()
    
    return (
        <>
            {post[id-1] ?
                <div>
                    <h2>{post[id-1].titulo}</h2>
                    <p>{post[id-1].texto}</p>
                </div>
                :
                <Navigate replace to ="/" />
                
            }
        </>
    );
}
    
export default Post;
