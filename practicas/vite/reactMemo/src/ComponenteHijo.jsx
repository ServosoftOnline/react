/*
	ALMACENARE EL COMPONENTE EN MEMORIA.

		- Debo cambiar export default ComponenteHijo por export default React.memo(ComponenteHijo);
		- Solo mostrará el console.log al principio cuando carge la pagina
*/

import React from 'react';

const ComponenteHijo = ({texto, cuenta, sumarUno}) => {
	
	console.log(`Renderizo el ${texto}`)
	return (
		<div className="caja">
			<p>{texto}</p>
			<h1>{cuenta}</h1>
			<button className="boton" onClick={sumarUno}>+1</button>
		</div>
	);
}
 
// export default ComponenteHijo;
export default React.memo(ComponenteHijo);