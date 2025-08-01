/*
    HOOK QUE OBTIENE UN SOLO GASTO A PARTIR DE SU ID

		- Importo lo necesario

		- Creo el hook:
			- Obtengo el id del gasto obtenido como parámetro
			- Creo:
				- La constante donde almacenare el hook de react router dom para navegar
				- El estado gasto donde almacenaré el gasto obtenido en la consulta

			- Efecto con dependencias en navitate e idGasto 
				- La forma de acceder a los resultados de la base de datos debe ser asíncrona
				- No puedo aplicarle async al useEfect. Debido a esto debo crear una función asincrona y llamarla despues

				- Creo la función asincrona para obtener el gasto de la base de datos:
					- En documento guardo los resultados de la consulta
					- Para ello uso la funcion getDoc(doc(base de datos, 'coleccion', id a buscar))

					- Si la busqueda obtuvo resultado lo almaceno en el estado gasto
						- IMPORTANTE. Formas de almacenar el objeto en la cte documento:
							- La funcion .data() extrae un objeto con los resultados de la consulta
							- Si la uso para uso la funcion .data() como hago en este caso, Ya almaceno el objeto en la cte documento
							- Si no la uso, guardo todo el resultado de la consulta en la cte documento
								- El componente que halla llamado a este hook tendría que usar la funcion .data() para obtener el objeto
							
					- Si no redirijo hacia la lista de gastos. Esto se produciría si el usuario altera la barra de direcciones

				- Llamo a la funcion asincrona
				- Devuelvo el estado gasto que contiene el objeto con las propiedades y valores del resultado


*/

// React
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Firebase
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

// Contextos
import {useAuth} from './../contextos/AuthContext';

// Hook
const useObtenerUnGasto = (idGasto) => {

	// Estados
	const [gasto, establecerGasto] = useState('');	
	const {sesion} = useAuth();
	const navigate = useNavigate();	
	
	// Ejecuto el efecto para realizar la consulta de forma asincrona
	useEffect(() => {

		// Si hay sesión abierta realizo la consulta
		if(sesion) {

			// Declaro la función obtener Gasto
			const obtenerGasto = async () => {

				// Obtengo el documento de forma asincrona			
				const documento = await getDoc(doc(db, 'gastos', idGasto));
				
				// Si lo obtuve lo añado en el estado gasto. si no lo redirigo a lista de gastos
				if(documento.exists) establecerGasto(documento);
				else navigate('/lista');
			}

			// la llamo
			obtenerGasto();
		}		

	}, [navigate, idGasto, sesion]);    

	// Devuelvo el estado con el gasto que contiene un objeto con el gasto
	return [gasto];	
}
 
export default useObtenerUnGasto;