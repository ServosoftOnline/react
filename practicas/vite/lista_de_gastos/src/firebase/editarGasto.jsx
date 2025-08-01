/*
    FUNCION EDITA UN GASTO DE LA BASE DE DATOS

*/

// Firebase
import { db } from './firebaseConfig';
import { doc, updateDoc } from "firebase/firestore";


// La función
const editarGasto = async ({categoria, fecha, inputDescripcion, inputCantidad, uidUsuario, idGasto}) => {
        
    return await updateDoc(doc(db, 'gastos', idGasto), {
        categoria: categoria,
        fecha: fecha,
        descripcion: inputDescripcion,
        importe: Number(parseFloat(inputCantidad).toFixed(2)),
        uidUsuario: uidUsuario
    });
           
}

export default editarGasto;