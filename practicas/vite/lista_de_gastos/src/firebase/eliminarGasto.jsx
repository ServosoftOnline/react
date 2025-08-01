/*
    FUNCION QUE ELIMINA UN GASTO DE LA BASE DE DATOS

        - Importo:
            - la base de datos
            - las funciones para acceder al documento y borrarlo

        - Creo la funcion asincrona
            - devuelvo el resultado de la operacion y la promesa la gestiona el llamante
*/

// Firebase
import { db } from './firebaseConfig';
import { doc, deleteDoc } from "firebase/firestore";

// La función
const eliminarGasto = async (id) => {    
    return await deleteDoc(doc(db, "gastos", id));
}

export default eliminarGasto;