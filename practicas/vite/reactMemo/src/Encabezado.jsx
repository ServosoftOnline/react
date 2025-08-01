/*
	ALMACENARE EL COMPONENTE EN MEMORIA.

		- Debo cambiar export default Encabezado por export default React.memo(Encabezado);
		- Solo mostrará el console.log al principio cuando carge la pagina,
		- Solo se recargaría si sus propiedades cambiasen. En esta caso no hay propiedades que puedan cambiar
			- Las propiedades se corresponden con los parámetros de la funcion y esta no tiene
*/

import React from 'react';

const Encabezado = () => {
	
	console.log('Renderizo el encabezado');
	return (
		<div className="encabezado">
			<h1>Contadores</h1>
		</div>
	);
}
 
// export default Encabezado;
export default React.memo(Encabezado);