/*
    HOOK QUE OBTIENE LOS GASTOS DEL USUARIO ACTUAL

        - Importo:
			- Lo que precise de react
			- El contexto que contiene información del usuario
			- La base de datos y las funciones que preciso para realizar la consulta

        - Creo la funcion hook:

			- Extraigo la sesión del contexto con la información del usuario
			- Creo el estado que contendrá los gastos obtenidos del hook o consulta
			- Creo un estado donde almacenaré el último gasto cargado
			- El estado booleano hayMasPorCargar que guardará si hay mas elementos por mostrar

			- Creo la función para obtener más gastos.
				- Los resultados están limitados a 10.
				- Cuando se pulse el botón de cargar mas gastos, se ejecutará esta función
				- La consulta mostrará los resultados a partir del último gasto mostrado anteriormente



			- Creo el efecto que se ejecutará al principio y cada vez que cambie el usuario

				- Creo la consulta para los primeros 10 gastos:
					- Obtiene de colección gastos de la base de datos
					- todos los registros cuyo campo uidUsuario coincida con el uid de la sesión actual,
					- ordenalas por fecha en orden descendente
					- limítalos a 10 resultados para que posteriormente mostremos de 10 en 10 en pantalla
					- Esta consulta requiere de un indice compuesto en firestore. 
						- La consola mostrará un enlace donde solucionaremos esto
						- Solo hay que estar seguro de tener abierto el navegador con la misma cuenta donde agregamos firebase

				- Ejecuto la consulta:
					- Ejecuto la función onSnapshot de firestore
					- Le paso la consulta y se ejecutara una funcion cada vez que se actualize la base de datos
					- El parámetro snapshot de esa función contendrá una visión de la base de datos actualmente
					- Cambiará el estado gastos con un nuevo arreglo
						- snapshot.docs es un arreglo con todos los resultados de la consulta
						- Los recorro con la función map y a cada iteracción la llamaré gasto
						- Devolviendo un objeto con todas las propiedades y añado la propiedad id con el valor id del gasto de la db
					- El resultado de ejecutar la consulta lo guardo en unsuscribe

				- Cierro la consulta devolviendo unsuscribe

			- Devuelvo el estado gastos con los resultado de la consulta
				- Que será un array de objetos con un objeto por cada resultado de la consulta

		- Exporto la función hook
			
*/

// React
import {useState, useEffect} from 'react';

// Contextos
import {useAuth} from './../contextos/AuthContext';

// Firebase
import {db} from './../firebase/firebaseConfig';
import { collection, onSnapshot, query, orderBy, where, limit, startAfter} from 'firebase/firestore';

// Hook
const useObtenerGastos = () => {

	// Estados
	const {sesion} = useAuth();	
	const [gastos, cambiarGastos] = useState([]);
	const [ultimoGasto, cambiarUltimoGasto] = useState(null);
	const [hayMasPorCargar, cambiarHayMasPorCargar] = useState(false);
	
	// Funcion que muestra mas gastos a partir del último gasto obtenido
	const obtenerMasGastos = () => {

		// Consulta que obtiene los siguientes 10 gastos a partir del ultimo gasto mostrado
		const consultaObtener10GastosMas = query(
			collection(db, 'gastos'),
			where('uidUsuario', '==', sesion.uid),
			orderBy('fecha', 'asc'),
			limit(10),
			startAfter(ultimoGasto)
		);

		// Ejecuta la consulta de más gastos
		const unsuscribe = onSnapshot(consultaObtener10GastosMas, (snapshot) => {
			// si sigo teniendo mas gastos
			if(snapshot.docs.length > 0 ) {

				// Actualizo mi último gasto
				cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);

				// Concateno los gastos que ya tenía a los nuevos y añado un id con el id del gasto
				cambiarGastos(gastos.concat(snapshot.docs.map((gasto) => {
					return {...gasto.data(), id: gasto.id}
				})));

			} else {
				// Actualizo el estado
				cambiarHayMasPorCargar(false);
			}
			// Si falla la ejecucion de la consulta muestro el error en consola	
		}, error => {console.log(error)});

		// Cierra la consulta de más gastos   
		return unsuscribe;
	}

	// Efecto que se produce al principio y si cambia la sesion
	useEffect(() => {

		// Si existe sesion ejecuto la consulta
		if(sesion){

			// Consulta que obtiene los 10 primeros gastos
			const consultaObtenerPrimeros10Gastos = query(
				collection(db, 'gastos'),
				where('uidUsuario', '==', sesion.uid),
				orderBy('fecha', 'asc'),
				limit(10)
			);
		
			// Ejecuta la consulta de los 10 primeros gastos
			const unsuscribe = onSnapshot(consultaObtenerPrimeros10Gastos, (snapshot) => {
				// Si quedan más gastos por mostrar
				if(snapshot.docs.length > 0){
					// Guardo como último gasto, su índice será la longitud -1 porque los arrays empiezan en 0
					cambiarUltimoGasto(snapshot.docs[snapshot.docs.length -1]);
					// Actualizo el estado
					cambiarHayMasPorCargar(true);
					} else {
						cambiarHayMasPorCargar(false);
					}

				// Añado los primeros gastos y el id del gasto
				cambiarGastos(snapshot.docs.map((gasto) => {
					return {...gasto.data(), id: gasto.id}
				}));
			});		

			// Cierra la consulta de los 10 primeros gastos    
			return unsuscribe;
		}

	}, [sesion]);
    
	// Devuelvo el estado gastos, la función obtenerMasGastos y el estado hayMasPorCargar
	return [gastos, obtenerMasGastos, hayMasPorCargar];
}
 
export default useObtenerGastos;