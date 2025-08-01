/*
    ARRAY DE OBJETOS QUE CONTIENE LOS DIFERENTES POST:

        - Este array simulará los datos obtenidos de una base de datos que no forma parte de este curso
        - Cuando use una base de datos no existirá.

        - Contiene un objeto por cada post con el siguiente contenido:
            - Un id que usare cuando quiera cambiar de post
            - Titulo del post
            - Texto del post

        - Lo exporto.
        - Lo importo en PaginaBlock.

*/

const post = [
    {id:1, titulo: 'Artículo #1', texto: 'Texto del primer articulo'},
    {id:2, titulo: 'Artículo #2', texto: 'Texto del segundo articulo'},
    {id:3, titulo: 'Artículo #3', texto: 'Texto del tercer articulo'}
];

export default post;

