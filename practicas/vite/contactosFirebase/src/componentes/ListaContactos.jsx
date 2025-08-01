/*
    MUESTRA LOS CONTACTOS QUE EXISTEN EN LA BASE DE DATOS DE FIRESTORE:
        - Me permite conectarme a la base de datos de firebase, obtener los contactos y mostrarlos

        - Importo:

            - Lo que preciso de react
                - el hook useState
                - el hook useEffect para establecer la conexion a firestore cuando inicie el componente
                    - Como primer parámetro le añado la función que se ejecuta cada vez que cambie el estado de la app
                    - El segundo parámetro es [], indicando que solo se ejecutará al inicio

            - Lo que preciso de firestore
                - la base de datos
                - La funcion collection, para poder ingresar en una coleccion
                - La función onSnapshot,  para devolver una vista actualizada de la base de datos. Se ejecuta de nuevo cada vez que halla un cambio

        - Creo el componente:

            - Creo el estado donde almacenaré los contactos
            - Leo los datos de la base de datos al iniciarse la app y detectará modificaciones en tiempo real
                - Uso de onSnapshot:
                    onSnapshot(
                        collection(base de datos, 'coleccion'),
                        funcion que se ejecuta cada vez que halla un cambio en la base de datos,
                        función que se ejecuta si hubiera un error en la base de datos
                        )

                - La funcion tiene un parametro que suele llamarse snap o snapshot que contiene la vista de la base de datos
                    - Genero un arreglo que contiene a los usuarios de la colección
                        - La propiedad docs contiene un array con todos los documentos guardados cada uno en un objeto
                        - La funcion data devuelve el objeto con el documento
                        - Recorro todos los documentos, voy devolviendo un objeto con todo los documentos que tenia mas el id que genero firestore
                        - Añado el arreglo al estado de los contactos

            - Devuelvo:
                - El contenedor con sus estilos correspondientes
                - Recorro el array con los contactos
                - Creo un elemento contacto en cada pasada que quien le asigno un key y le paso como parámetros el id, nombre y correo.
*/

// React
import React,{ useState, useEffect }  from "react";
import styled from "styled-components";

// Firestore
import db from "../firebase/firebaseConfig";
import { collection, onSnapshot} from "firebase/firestore";

// Componentes
import Contacto from "./Contacto";

const ListaContactos = () => {

    const [contactos, cambiarContactos] = useState([]);

    // Abro una conexion con la base de datos en la coleccion usuarios. Se mantendrá abierta y en alerta a los cambios.
    // En snapshot tengo la vista actualizada de la base de datos

    useEffect(() => {
        onSnapshot(
            collection(db, 'usuarios'),
            (snapshot) => {
                const arregloUsuarios = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id }
                });
                cambiarContactos(arregloUsuarios);
            },
            (error) => {
                console.log(error);
            }
        );
        
    }, []);

    return (
        <ContenedorContactos>
            {
                contactos.map((contacto) => {
                    return (
                        <Contacto 
                            key = {contacto.id}
                            id = {contacto.id}
                            nombre = {contacto.nombre}
                            correo ={contacto.correo}
                        />             
                    )                        
                })
            }

        </ContenedorContactos>      
    );
}



// Estilos
const ContenedorContactos = styled.div`
    margin-top: 40px;
`;

export default ListaContactos;