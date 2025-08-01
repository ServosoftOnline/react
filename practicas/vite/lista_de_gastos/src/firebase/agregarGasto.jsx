/*
FUNCION QUE AGREGA UN GASTO A LA BASE DE DATOS
    - los datos ya se encuentran validados antes de llamar a esta función
    - Importo lo necesario para usar firebase y date-fns

    - Creo la función:
        - Antes de introducir los gastos en la base de datos:
            - La fecha la paso a segundos mediante la funcion getUnixTime
            - El inputCantidad lo paso a numero con decimales con dos digitos
                - Quitando así el caracter €
                
        - Devuelvo el resultado de añadir la coleccion a formularioGasto.jsx que gestiona la promesa

*/

// Firebase
import { db } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

// date-fns
import { getUnixTime } from "date-fns";

// La función
const agregarGasto = async ({categoria, fecha, inputDescripcion, inputCantidad, uidUsuario}) => {    

    return addDoc(collection(db, 'gastos'), {
        categoria: categoria,
        fecha: getUnixTime(fecha),
        descripcion: inputDescripcion,
        importe: Number(parseFloat(inputCantidad).toFixed(2)),
        uidUsuario: uidUsuario
    });        
}

export default agregarGasto;