/*
HOOK QUE OBTIENE TODOS LOS GASTOS DE CADA CATEGORIA EN EL MES ACTUAL CUYA CANTIDAD SEA MAYOR DE CERO	

	- Obtengo todos lo gastos acontecidos en el mes actual mediante el hook useObtenerTodosLosGastosDelMes	
	- Le aplico el método reduce para sumar todos los importes de las categorias del arreglo obtenido

		- Devolverá un objeto donde:
			- Sus propiedades serán las categorías 
			- Y sus valores las sumas de los importes

		- Hay que pasarle dos parámetros:
			- Una función o call back
				- Se ejecutará por cada elemento obtenido del hook useObtenerTodosLosGastosDelMes
				- Tendrá a su vez otros dos parámetros
					- El objeto que devolverá (llamado objetoResultante)
					- El objeto de la iteracción actual (Llamado objetoActual)
				- En cada pasada almacenaré sus categorías y cantidades del objeto actual
				- En el objeto resultante de su categoria actual le sumo la cantidad actual
				- Devuelvo el objeto resultante que se almacenará en la cte.

			- Un valor inicial
				- En este caso un objeto con todas las categorías iniciadas a 0

	- El objeto que almacené en la cte sumaDeGastos lo paso a un array llamado arraySumaDeGastos
		- Al objeto resultante le aplico el método keys para obtener sus propiedades
		- Le aplico el metodo map y voy devolviendo un array de objetos
			- con dos propiedades con sus respectivos valores
				- El elemento recorrido es la categoria obtenida mediante keys
				- La propiedad categoría y su valor es el elemento recorrido
				- la propiedad importe con la sumaDeGastos cuyo indicé es el elemento recorrido

	- Filtro el arraySumaDeGastos generando otro array arraySumaDeGastosMayoresDeCero al cual le elimino las cantidades que sean cero
	- Modifico el estado con el array filtrado
	- Devuelvo el estado con el resultado de todo el proceso
	
*/

// React
import { useEffect, useState } from "react";

// Hook
import useObtenerTodosLosGastosDelMes from "./useObtenerTodosLosGastosDelMes";

// Contextos
import {useAuth} from './../contextos/AuthContext';

const useObtenerGastosDelMesPorCategoria = () => {

	// Estados
	const [gastosPorCategoria, cambiarGastosPorCategoria] = useState([]);
	const {sesion} = useAuth();
	const [gastos] = useObtenerTodosLosGastosDelMes();

	// Uso este efecto para realizar de forma asincrona la consulta
	useEffect(() => {

		// Si hay sesión ejecuto la consulta
		if(sesion){

			// Método reduce
			const sumaDeGastos = gastos.reduce((objetoResultante, objetoActual) => {

				const categoriaActual = objetoActual.categoria;
				const cantidadActual = objetoActual.importe;
				objetoResultante[categoriaActual] += cantidadActual;
				return objetoResultante;

			}, {
				'comida': 0,
				'cuentas y pagos': 0,
				'hogar': 0,
				'transporte': 0,
				'ropa': 0,
				'salud e higiene': 0,
				'compras': 0,
				'diversion': 0
			});

			// Paso el objeto recogido en suma de gastos a un array de objetos			
			const arraySumaDeGastos = (Object.keys(sumaDeGastos).map((elemento) => {
				return {categoria: elemento, cantidad:sumaDeGastos[elemento]};
			}));

			// Filtro el array y elimino todos cuya cantidad sea cero
			const arraySumaDeGastosMayoresDeCero = arraySumaDeGastos.filter((gasto) => {
				if(gasto.cantidad > 0){
					return gasto;
				}
			});

			// Modifico el estado con el array ya filtrado
			cambiarGastosPorCategoria(arraySumaDeGastosMayoresDeCero);
		}
		
	},[gastos, sesion]);

	// Devuelvo el estado
	return gastosPorCategoria;	
}
 
export default useObtenerGastosDelMesPorCategoria;