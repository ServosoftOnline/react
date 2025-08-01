/*
  LISTA DE CONTACTOS:
  
    - Aplicación que permitirá agregar, eliminar, editar contactos y mostrarlos en el navegador
      - Los agrego en el componente Formulario.jsx
      - Los muestro en el componente ListaContactos.jsx

    - Se almacenará en una base de datos proporcionada por un servicio de google llamado firebase
          
    - Cree el proyecto en firebase llamado contactosFirebase
      - Me asigno un identificador único que se indica en env.local
      - Deshabilité google analytics para este proyecto
      - No configuré Firebase Hosting
      - Comencé la base de datos en modo de prueba

*/

import React from "react";
import styled from 'styled-components';

// Componentes
import Formulario from "./componentes/Formulario";
import ListaContactos from "./componentes/ListaContactos";


const App = () => {
  return (
    <Contenedor>
      <Titulo>Lista de contactos</Titulo>
      <Formulario/>
      <ListaContactos/>
    </Contenedor>
    
  );
}
 
// Estilos
const Contenedor = styled.div`
	margin: 40px;
	width: 90%;
	max-width: 400px;
	background: #fff;
	padding: 40px;
	border-radius: 5px;
	text-align: center;
`;

const Titulo = styled.h2`
	margin-bottom: 10px;
`;


export default App;
