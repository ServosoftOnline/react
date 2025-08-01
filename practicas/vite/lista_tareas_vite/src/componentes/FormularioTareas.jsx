/*
    FORMULARIO PARA AÑADIR TAREAS:

        - Recibe como parámetro el estado tarea y la funcion que cambia su estado.
            - Los destructuro para poder usarlos y modificarlos

        - El formulario cuando se envie ejecutará una funcion llamada handleSubmit

        - La funcion handleSubmit:
            - Recibe el evento que contiene los parámetros que recibi en FormularioTareas y puedo trabajar con ellos
            - Evito que se refresque el formulario
            
            - Ejecuto la funcion cambiarTareas
                - De forma automática se cambiará el estado tareas y se ejecutará de nuevo la funcion
                - Se pueden ver los cambios de estado en el navegador en componentes del inspector
                - Se añadirán a las tareas ya existentes la nueva tarea
                - El texto será el estado inputTarea
                - El id lo obtendré de forma automatica y sin duplicados usando el paquete uuid
                    - Enlace a su web: https://www.npmjs.com/package/uuid
                    - Instalar el paquete: npm install uuid
                    - Importar el paquete: import { v4 as uuidv4 } from 'uuid';
                    - LLamar a la funcion: uuidv4()
                
                - Vuelvo a iniciar el valor de inputTarea a un espacio vacio
                    - Esto hará que cuando actue de nuevo el placeholder escriba en el formulario "Escribe una tarea"


        
        - Debemos añadir el value y el onChange al input del formulario
        
            - El value será el texto de la nueva tarea
                - Usaré el estado inputTarea y la funcion que cambiará su estado será cambiarInputTarea

            - El onChange hará que se ejecute la funcion handleInput cada vez que modifique el input del formulario
                - Obtiene el evento y se lo pasa como parámetro a handleInput

            - La funcion handleInput
                - Ejecutará la función asociada al estado inputTarea que es cambiarInputTarea
                - Añadirá el valor del input del formulario a inputTarea

*/

import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
const FormularioTareas = ({tareas, cambiarTareas}) => {

    const [inputTarea, cambiarInputTarea] = useState('');

    const handleInput = (e)=>{
        cambiarInputTarea(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cambiarTareas(
            [
                ...tareas,
                {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]

        );
        cambiarInputTarea('');
    };
    
    return ( 
        <form action ="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
                type ="text" 
                className="formulario-tareas__input"
                placeholder="Añada una tarea"
                value={inputTarea}
                onChange={(e)=> handleInput(e)}
            />
            <button 
                type = "submit"
                className="formulario-tareas__btn"
            >
                {/* Boton de fontawesome. Plan de Javascript gratuito. El de react me dio problemas al instalarlo */}
                <i className="fa-regular fa-square-plus fa-xl formulario-tareas__icono-btn"/>
            </button>                
        </form>        
     );
}
 
export default FormularioTareas;