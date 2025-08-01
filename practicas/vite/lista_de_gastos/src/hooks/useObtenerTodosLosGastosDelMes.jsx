/*
    HOOK QUE OBTIENE TODOS LOS GASTOS DEL MES ACTUAL

		- La consulta:
			- La limitaré entre las fechas de inicio y fin del mes actual y al usuario actual
				- Usando las funciones endOfMonth y startOfMonth para obtenerlas a partir del momento actual
				- Y getUnixTime para pasarla a segundos y poder compararlas con las almacenadas en la base de datos				
			- Ordeno los resultados por orden ascendente

		- Al ejecutar la consulta
			- Ejecuto la consultaObtenerTodosLosGastos
			- Obtengo el resultado en snapshot
			- snapshot.docs contiene todos los documentos obtenidos del resultado
			- Los recorro con la función map, llamo a cada iteracción documento
			- Voy devolviendo un objeto con todos los documentos recorridos y añado la propiedad id con el valor del id del documento
			- TELA MARINERA!!
		
		- EL HOOK useObtenerGastosDelMesPorCategoria llama a este hook y filtra sus resultados
*/

// React
import {useState, useEffect} from 'react';

// Contextos
import {useAuth} from '../contextos/AuthContext';

// Firebase
import {db} from '../firebase/firebaseConfig';
import {collection, onSnapshot, query, orderBy, where} from 'firebase/firestore';

// date-fns
import { endOfMonth, startOfMonth, getUnixTime } from 'date-fns'; 

// Hook
const useObtenerTodosLosGastosDelMes = () => {

	// Estados
	const {sesion} = useAuth();	
	const [gastos, cambiarGastos] = useState([]);
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona					
	useEffect(() => {

		// Si existe sesión abierta realizo la consulta
		if (sesion) {			

			// Consulta 
			const consultaObtenerTodosLosGastos = query(
				collection(db, 'gastos'),			
				where('fecha', '>=', getUnixTime(startOfMonth(new Date()))),
				where('fecha', '<=', getUnixTime(endOfMonth(new Date()))),
				where('uidUsuario', '==', sesion.uid),
				orderBy('fecha', 'asc')
			);
			
			// Ejecuta la consulta. Si se produjera un error lo muestro en consola
			const unsuscribe = onSnapshot(consultaObtenerTodosLosGastos, (snapshot) => {
				cambiarGastos(snapshot.docs.map((documento) => {
					return ({...documento.data(), id: documento.id});
				}));			
			}, (error) => {console.log(error)});		

			// Cierra la consulta
			return unsuscribe;
		}

	}, [sesion]);

	// Devuelvo el estado gastos
	return [gastos];
}
	
	
 
export default useObtenerTodosLosGastosDelMes;