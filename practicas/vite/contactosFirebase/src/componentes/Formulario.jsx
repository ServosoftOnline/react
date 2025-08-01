/*
    FORMULARIO

        - Importo:

            - react
            - useState. 
            - Los elementos que contienen los estilos

            - El objeto que contiene la base de datos y las funciones collection y addDoc.
                - Me permite usar Cloud Firestore. Servicio de firebase
                - collection me permite acceder a las colecciones
                    - Indico como crearlas en instalacion.txt                    
                - addDoc permite añadir documentos a uan colección
                    - Uso: addDoc(collection(BaseDeDatos,'coleccion'), Objeto con el documento a añadir);                
        
        - Creo el componente

            - Creo los estados.
                - Los estados serán los valores del input
                - Las funciones que cambian dichos estados estarán en el onChange
                
            - La función addDoc de cloud firestore es asincrona. Por lo que devuelve una promesa
                - Esta nos permitirá comprobar cuando acaba la petición a firebase y cual ha sido su resultado.

                - Gestiono la promesa mediante async/await y try/catch de tal forma:
                    - Le pido a la funcion addDoc que se espere mediante await
                    - La funcion await precisa que se le indique que onSubmit es asincrona mediante async
                    - Le pido que trate de ejecutar la función addDoc mediante try
                    - Si hubiera un error en fireStore catch lo captura en una cte llamada error
                    - Muestro el error que yo quiera y el error que me proporciona fireStore
                    - Cuando acaba una cosa o la otra ya reinicio los estados

                - El estado creado será el valor del input
                - La función que lo cambia será la funcion que se ejecuta en el onChange 
                    - Modificando el estado con lo escrito en el input

            - Devuelvo
                - El formulario
                - Cuando se haga el submit llamo a la función onSubmit
                - Los inputs:
                    - Tendrán como value el estado
                    - El onChange hace que mientras se modifica el input va llamando a la funcion que cambia el estado

*/

// React
import React from "react";
import { useState, useContext } from "react";

// Elementos
import Input from "../elementos/Input";
import Boton from "../elementos/Boton";
import Mensaje from "../elementos/Mensaje";

// Contexto
import { ContextoMensaje } from "../contextos/contextoMensaje";

// FireStore
import db from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


const Formulario = () => {
    
    // Estados
    const [nombre, cambiarNombre] = useState('');
    const [correo, cambiarCorreo] = useState('');

    // Obtengo desde el contexto
    const {mensaje, mensajeOk, mensajeKo, reiniciarMensaje} = useContext(ContextoMensaje);   
        
    // Añado los datos a firestore cuando se pulse el botón de enviar.
    const onSubmit = async (e) => {
        
        // Evito que se refresque el formulario
        e.preventDefault();

        // Gestiono la promesa
        try{
            
            await addDoc(collection(db, 'usuarios'), {
                nombre: nombre,
                correo: correo
            });
            mensajeOk();
        }

        catch(error) {
            mensajeKo();
            console.log(error);            
        }

        // Reinicio los estados nombre y correo para que se muestren los valores de los placeholder
        cambiarNombre('');
        cambiarCorreo('');
        setTimeout(() => {reiniciarMensaje()}, 5000);       
    };
   

    return (
        <form action="" onSubmit={onSubmit}>

            <Input 
                type ="text" 
                value={nombre}
                onChange={(e)=> cambiarNombre(e.target.value)}
                placeholder="Nombre"                
            />

            <Input 
                type ="email" 
                value={correo}
                onChange={(e)=> cambiarCorreo(e.target.value)}
                placeholder="Correo"                
            />

            <Boton type ="submit">Añadir</Boton>
            <Mensaje color = {mensaje.color}> {mensaje.contenido} </Mensaje>
            
        </form>   
    );
}

export default Formulario;