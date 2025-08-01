/*
    MUESTRA LAS TAREAS ALMACENADAS EN EL ESTADO TAREAS

        - Obtengo las tareas y su funcion asociada a su estado como parámetro
        - Las desextructuro para poder usarlas

        - Defino las funciones que usaré en los componentes hijos:
            - Para seguir buenas prácticas debo definirlas aquí en el componente padre
            - Y pasarlas como propiedades a sus componentes hijos

            - La funcion toogleCompletada ejecuta la funcion cambiarTareas que hará lo siguiente:

                - Cuando se pulse el boton de tarea completada en tareas.js:
                - Recorremos todas las tareas
                    - Si los ids coinciden devuelve la tarea cambiando el valor de completada a lo contrario que tuviera
                        - De true a false o de false a true                        
                    - Si no coinciden devuelvo la tarea sin modificar
            
            - La función cambiarTextoTarea ejecuta la funcion cambiarTareas que hará lo siguiente:

                - Cuando se pulse el boton de editar tarea en tareas.js
                - Recorre todas las tareas.
                    - Si los id coinciden devuelve la tarea modificando el texto existente con el nuevo
                    - Si los id no coinciden devuelve la tarea sin modificar

            - La función eliminarTarea ejecuta la funcion cambiarTareas que hará lo siguiente:
                - Cuando pulse el boton de eliminar tareas en tareas.js
                - Filtra todas las tareas
                - Si los ids son diferentes devuelve la tarea y si no devuelva nada.


        - Devuelvo lo siguiente:
            - La lista
            - Si hay alguna tarea:
                - Las recorro con map y por cada una llamo al componente Tarea que creará los elementos de la lista
                - Debe tener un key único que será el id único que genera el paquete uuid en FormularioTareas.js
                - Le paso la tarea y la función toogleCompletada definida anteriormente.

            - Si no hay tareas:
                - Muestro un mensaje que lo indique

*/
import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) => {
        
    const toogleCompletada = (id) => {
        cambiarTareas(
            tareas.map((tarea)=>{                
                if(tarea.id === id) return({...tarea, completada: !tarea.completada});                
                return tarea;
            })
        );
    };

    const cambiarTextoTarea = (id, nuevoTexto) => {
        cambiarTareas(            
            tareas.map((tarea)=>{
                if(tarea.id === id) return({...tarea, texto: nuevoTexto});
                return tarea;
            })
        );
    };

    const eliminarTarea = (id) =>{
        cambiarTareas(
            tareas.filter((tarea) => {
                if(tarea.id !== id) return tarea;
                return false;
            })            
        );
    }
    
    return (

        <ul className="lista-tareas">
            {   
                tareas.length > 0
                ?
                    tareas.map((tarea)=>{

                        if(mostrarCompletadas) {
                            return <Tarea
                                key = {tarea.id}
                                tarea = {tarea}
                                toogleCompletada = {toogleCompletada}
                                cambiarTextoTarea = {cambiarTextoTarea}
                                eliminarTarea = {eliminarTarea}
                            />

                        // Si la tarea no está completada la devolvemos
                        } else if(!tarea.completada) {
                            return <Tarea
                                key = {tarea.id}
                                tarea = {tarea}
                                toogleCompletada = {toogleCompletada}
                                cambiarTextoTarea = {cambiarTextoTarea}
                                eliminarTarea = {eliminarTarea}
                            />
                        }

                        // Si ya está completada no la devolvemos
                        return false;                  
                    
                    })
                :
                    <div className="lista-tareas__mensaje ">~ No hay tareas agregadas ~</div>                   
            }
        </ul>
    );
}
 
export default ListaTareas;