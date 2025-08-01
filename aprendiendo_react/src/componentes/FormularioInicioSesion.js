/*
    FORMULARIO:
        - Tendra en cuenta dos estado.
            - Estado usuario. Por defecto vacio
            - Estado password. igual valor por defecto que el anterior
            - Cuando introduzcamos el usuario por cualquier input cambiará el estado y mostrará lo introducido
*/


import React, {useState} from 'react';
import styles from './FormularioInicioSesion.module.css';
import Boton from '../elementos/boton';


// Contiene como propiedad la funcion cambiarEstadoSesion
const FormularioInicioSesion = (props) => {
       
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');
    
    
    // Cambiará el estado dependiendo del nombre del formulario
    const onChange = (e) => {
        if(e.target.name === "usuario"){
            cambiarUsuario(e.target.value);
        } else if(e.target.name === "password"){
            cambiarPassword(e.target.value);
        }
    }

    // Cuando se haga el submit
    const onSubmit = (e) => {
        // Altero el funcionamiento del formulario para que no envie datos
        e.preventDefault();
        // valido
        if (usuario === 'Oscar' && password === '1234') {
            // cambio el estado de la sesion a correcto
            props.cambiarEstadoSesion(true);
        } else {
            //Reinicamos los datos del formulario
            alert('Datos incorrectos');
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    
    return (
        <div>        
        <form className='formulario' action = '' onSubmit={onSubmit}>
            
            <div>
                <h2>No ha iniciado sesión.</h2>
                <label className = {styles.label} htmlFor='usuario'>Usuario</label>
                <input
                    className={styles.input}
                    type = "text"
                    name = "usuario"
                    id = "usuario"
                    value = {usuario}
                    onChange={(e) => {onChange(e)}}
                />
            </div>
            <div>
                <label className = {styles.label} htmlFor='password'>Contraseña</label>
                <input
                    className={styles.input}
                    type = "password"
                    name = "password"
                    id = "password"
                    value = {password}
                    onChange={(e) => {onChange(e)}}
                />
            </div>
            
            {/* 
            Así trabajaríamos con otros tipos de elementos del formulario
            <div>
                <input type="checkbox" name = "" id = "" checked = "true" onChange={onChange} />
            </div> 
            */}

            <Boton negro marginTop largo type = "submit">Iniciar sesión</Boton>
            
        </form>

        <div>
            <p>Icono hecho mediante styled components </p>
            <p>Añado las propiedades negro y largo</p>
            <p>Usuario: Oscar</p>
            <p>Contraseña: 1234</p>
        </div>

        </div>
    );
}
 
export default FormularioInicioSesion;
