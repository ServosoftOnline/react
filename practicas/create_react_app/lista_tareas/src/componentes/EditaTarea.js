/*
  FORMULARIO QUE PERMITE EDITAR LAS TAREAS
    
    - Se ejecutará cuando se pulse el botón de editar en la lista de las tareas

    - El componente obtiene la tarea y la funcion que cambia el estado cuando editamos la tarea: 
      - El texto de la tarea será el valor por defecto del estado tareaAModificar
        - Lo mostraremos en pantalla mediante el value del formulario

      - La función cambiarEditandoTarea la uso para que cuando actualize deje de mostrar el formulario que edita la tarea

    - Devuelvo el formulario
      - Que contiene:

        - Un input de tipo texto
          - El value muestra el texto de la tarea original

          - El onChange:
            - Permite escribir en el formulario
            - Ejecutar la funcion que cambiará el estado de tareaAModificar mientras escribimos
            - Añadiendo la modificación de la tarea con el value registrado en el evento

        - Un botón de Actualizar

      - El formulario:
        - No se enviará a ningun lugar. Por eso action esta en blanco
        - Y ejecutará la función handleSubmit dentro del onSubmit cuando pulsemos Actualizar o enter
          - La función evitará que el formulario se actualize
          - Ocultará el formulario de editar tarea


*/
import { useState } from "react";

const EditaTarea = ({tarea, cambiarQuiereEditarTarea, cambiarTextoTarea}) => {
  
  const [tareaAModificar, cambiarTareaAModificar] = useState(tarea.texto);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarTextoTarea(tarea.id, tareaAModificar);
    cambiarQuiereEditarTarea(false);
  }    

  return (
      <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
        <input
          type ="text"
          className="formulario-editar-tarea__input"
          value={tareaAModificar}
          onChange={(e)=>{cambiarTareaAModificar(e.target.value)}}
        />
        
        <button
          type ="submit"
          className="formulario-editar-tarea__btn"
        >
          Actualizar
        </button>
      </form>
  );
}
 
export default EditaTarea;