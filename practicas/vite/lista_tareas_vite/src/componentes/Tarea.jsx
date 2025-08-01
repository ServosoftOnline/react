/*
    CADA UNA DE LAS TAREAS

        - Obtengo la tarea desde ListaTareas.js
        - La desectructuro para poder usarla

        - Declaro lo siguiente:
            - El estado quiereEditarTarea
                - Solo contendrá true o false dependiendo si el usuario quiere editar la tarea o no
                - Por defecto tendrá el valor false
        
            - La vble tareaRealizada que contendrá una cadena vacia o la cadena -check
                - Si añado la cadena -check llamo a un icono que representa "completado"
                - Si no la añado llamo a un icono que representa "no completado"
                
        - Devuelvo lo siguente:

            - Una lista de elementos compuesta por:
                - El icono que representa si la tarea esta finalizada o no
                    - Si se hace click en el icono se llama a la funcion toogleCompletada de su componente padre
                
                - Un condicional:
                    - Si el estado quiereEditarTarea es false mostrará el texto de la tarea
                    - Si el usuario pulsa el icono de editar tarea, que se encuentra oculto hasta pasar el raton
                        - Llamará al componente EditaTarea
                            - Le paso la tarea a mostrar
                            - Y cambiarEditandoTarea
                                - Cuando la edite en EditaTarea le cambiaré su estado para que se oculte

                - Un contenedor con dos botones
                    - El que permite editar la tarea
                        - Cuando se haga click sobre el cambiar el estado de quiereEditarTarea
                            - de true a false o de false a true
                            - Afectando al condicional anterior y mostrará o no el componente EditaTarea

                    - El que permite eliminar la tarea
                        - Cuando se haga click sobre el llamará a la funcion eliminarTarea de su componente padre


*/

import {useState}  from "react";
import EditaTarea from "./EditaTarea";

const Tarea = ({tarea , toogleCompletada, cambiarTextoTarea, eliminarTarea}) => {

    const [quiereEditarTarea, cambiarQuiereEditarTarea] = useState(false);
    let tareaRealizada = '';
    tarea.completada ? tareaRealizada = '-check': tareaRealizada = '';
    
    return (
        
        <li className="lista-tareas__tarea">

            <i 
                className={`
                    fa-regular fa-square${tareaRealizada} fa-lg
                    lista-tareas__icono
                    lista-tareas__icono-check
                `}
                onClick={() => {toogleCompletada(tarea.id)}}
            >                
            </i>

            <div className="lista-tareas__texto">

                {quiereEditarTarea ?
                    <EditaTarea
                        tarea={tarea}
                        cambiarQuiereEditarTarea = {cambiarQuiereEditarTarea}
                        cambiarTextoTarea = {cambiarTextoTarea} />                        
                    : tarea.texto}

            </div>

            <div className="lista-tareas__contenedor-botones">
                <i 
                    className="
                        fa-regular fa-pen-to-square fa-lg
                        lista-tareas__icono
                        lista-tareas__icono-accion
                    "
                    onClick = {()=>{cambiarQuiereEditarTarea(!quiereEditarTarea)}}>
                </i>

                <i 
                    className="
                        fa-solid fa-trash fa-lg
                        lista-tareas__icono
                        lista-tareas__icono-accion
                    "
                    onClick = {()=>{eliminarTarea(tarea.id)}}>

                </i>
            </div>
        </li>
      );
}
 
export default Tarea;