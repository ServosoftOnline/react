// Librerias
import React from 'react';
import {useState} from 'react';

// Componentes
import Usuario from './Usuario';
import FormularioInicioSesion from './FormularioInicioSesion';
import ContadorClass from './ContadorClass';
import ContadorFuncional from './ContadorFuncional';
import ContadorFuncionalUseReducer from './ContadorFuncionalUseReducer';
import Blog from './Blog';

// Elementos
import Boton from '../elementos/boton';

// CSS
import './App.css';


const App = () => {
  
  const [sesion, cambiarEstadoSesion] = useState(false);
 
    return (
      <div  className="contenedor">
      {sesion === true ?
      <div>
        <Usuario />
        <Blog />
        <Boton marginTop onClick = {() => cambiarEstadoSesion(false)}>Cerrar Sesion</Boton>
        <ContadorClass aumenta = {5}  disminuye = {3} />
        <ContadorFuncional aumenta = {4} disminuye = {2} />
        <ContadorFuncionalUseReducer />
      </div>      
      :
      <div>
        {/*
          El formulario cambiará el estado de la sesión. Se lo paso añadido como propiedad
          La propiedad cambiarEstadoSesion tendrá como valor la funcion cambiarEstadoSesion
        */}

        <FormularioInicioSesion cambiarEstadoSesion = {cambiarEstadoSesion} />
        {/* <button onClick = {() => cambiarEstadoSesion(true)}>Iniciar sesión</button> */}
      </div>
      }
    </div>  
    );
  }

  
export default App;