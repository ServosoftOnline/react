/*
    MUESTRA UN CONTACTO DE LA BASE DE DATOS DE FIRESTORE

		- Importo:
			- Lo relacinado con react

			- Lo relacionado con Firestore
				- La base de datos
				- doc.
					- Permite acceder a un documento mediate su id
					- Uso: doc(base de datos,'coleccion', id del documento)

				- deleteDoc
					- Permite eliminar un documento mediante su id
					- Uso: deleteDoc(doc(base de datos,'coleccion', id del documento)

				- updateDoc
					- Permite actualizar un documento mediante su id
					- Uso: updateDoc(doc(base de datos, 'coleccion', id del documento),{
							// Objeto con los cambios
						}
					);

				- deleteDoc y updateDoc son funciones asincronas. Implica tener que usar asinc/await y try/catch
		
		- Creo el componente

			- Tiene como parámetros el id, el nombre y el correo que le pasé desde listaContactos.jsx
			- Creo los estados donde guardaré los nuevos campos y si estoy editando el contacto o no.

			- Creo la función que actualiza los nuevos datos en firestore
				- Paro la actualización del navegador
				- Actualizo el documento gestionando la promesa y usando updateDoc
				- Cambio el estado de editando contacto
			
			- Creo la funcion que elimina un documento de la coleccion de firestore
				- Elimino el documento gestionando la promesa y usando deleteDoc


			- Devuelvo:

				- Un contenedor con sus respectivos estilos.
				- Si no estoy editando el contacto
					- Ejecuto un fragmento que muestra los contactos de la coleccion de firestore y los botones editar y borrar
						- El boton editar cambia el estado de editando contacto y muestro el formulario
						- El boton de borrar llama directamente a la funcion que borra el contacto

				- Sí estoy editando el contacto:
					- Muestro el formulario. Sus inputs son el nombre y el correo
						- Sus value serán sus respestivos estados
							- Contienen inicialmente el valor inicial del estado que es el nombre o correo que pasé como parametros

						- Sus onChange llama a las funciones que cambian sus estados y los modificaré con lo que añada por teclado
						- Los placeholder creo que sobrán porque no llego a utilizarlos. Los dejo por si acaso


*/

// React
import React, {useState, useContext} from "react";
import styled from "styled-components";


// Firestore
import db from "../firebase/firebaseConfig";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

// Elementos
import Mensaje from "../elementos/Mensaje";

// Contextos
import { ContextoMensaje } from "../contextos/contextoMensaje";


const Contacto = ({id, nombre, correo}) => {

	// Estados
	const [nuevoNombre, cambiarNuevoNombre] = useState(nombre);
	const [nuevoCorreo, cambiarNuevoCorreo] = useState(correo);
	const [editandoContacto, cambiarEditandoContacto] = useState(false);

	// Contexto
	const {mensaje, mensajeOk, mensajeKo, reiniciarMensaje} = useContext(ContextoMensaje);  
	
	// Funcion para actualizar un contacto. Contiene promesa
	const actualizarContacto = async(e) => {

		e.preventDefault();	
		try {
			await updateDoc(doc(db,'usuarios',id), {
				nombre: nuevoNombre,
				correo: nuevoCorreo
			});
			mensajeOk();
			console.log('Contacto actualizado correctamente');

		} catch (error) {
			mensajeKo();
			console.log('Error al actualizar el contacto');
			console.log(error);
		}
		
		cambiarEditandoContacto(false);
	}

	// Funcion para eliminar un contacto. Contiene promesa
	const eliminarContacto = async() => {

		try {
			await deleteDoc(doc(db,'usuarios',id));
			console.log('Contacto eliminado correctamente');

		} catch (error) {
			console.log('Error al eliminar el contacto');
			console.log(error);
		}		
		
	}
	
    return (
        <ContenedorContacto>
			{
				editandoContacto ?
					<form action="" onSubmit={actualizarContacto}>
						<Input
							type="text"
							name="nombre"
							value={nuevoNombre}
							onChange= {(e) => cambiarNuevoNombre(e.target.value)}							 
							placeholder="Nombre"
						/>

						<Input
							type="mail"
							name="correo"
							value={nuevoCorreo}
							onChange= {(e) => cambiarNuevoCorreo(e.target.value)}
							placeholder="Correo"
						/>

						<Boton type ="submit">Actualizar</Boton>
						<Mensaje color = {mensaje.color}> {mensaje.contenido} </Mensaje>

					</form>
					
				:
					<>
						<Nombre>{nombre}</Nombre>
						<Correo key ={id}>{correo}</Correo>
						<Boton onClick={() => cambiarEditandoContacto(!editandoContacto)}>Editar</Boton>
						<Boton onClick={() => eliminarContacto()}>Borrar</Boton>
					</>

			}
            
        </ContenedorContacto>        
    );
}
 
// Estilos
const ContenedorContacto = styled.div`
	padding: 10px 0;
	border-bottom: 1px solid rgba(0,0,0,.2);
`;

const Nombre = styled.p`
	font-weight: bold;
`;
 
const Correo = styled.p`
	font-style: italic;
	color: #6B6B6B;
	margin: 5px 0;
`;

const Boton = styled.button`
	padding: 5px 20px;
	border: none;
	cursor: pointer;
	border-radius: 3px;
	margin: 0px 2px;
	margin-bottom: 10px;
	transition: .3s ease all;
	outline: none;
	background: #C4C4C4;
	color: #fff;
	font-size: 12px;

	&:hover {
		background: #3D76E9;
	}
`;

const Input = styled.input`
	padding: 10px;
	border: 2px solid rgba(0,0,0,.2);
	border-radius: 3px;
	width: 100%;
	margin-bottom: 10px;
	transition: .2s ease all;
	outline: none;
	text-align: center;
	
	&:focus {
		border: 2px solid #3D76E9;
	}
`;

export default Contacto;

