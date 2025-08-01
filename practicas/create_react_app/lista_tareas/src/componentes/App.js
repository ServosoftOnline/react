/*
  COMPONENTE PRINCIPAL: APP.JS


    - Defino los siguiente estados:

      - El estado tareas que almacenará un arreglo compuesto por un objeto por cada tarea.
        - Su valor inicial es un arreglo vacio.
          - Al empezar a ejecutar localstorage cambie este valor inicial lo cambie por la cte tareasGuardadas

        - A medida que añadimos tareas se añadirán objetos
        - Este arreglo sería el que se almacenase en una base de datos, la nube o guardarlos en el navegador
          - Para esto último Javascript usa local storage y describo como hacerlo al final de estas notas
   
      - El estado mostrarCompletadas contendrá true o false
        - si contiene true mostrará solo las tareas completadas
        - Si contiene false las mostrará todas
            
    - Devolverá:
    
      - El componente Header
        - Contiene la cabecera formada por Lista de tareas y el icono de no mostrar tareas completadas

      - El componente FormularioTareas
        - Contiene un formulario que permite añadir tareas
        - Le paso como argumento las tareas y su función asociada para ir añadiendolas
        
      - El componente ListaTareas
        - Contiene las tareas añadidas

        - Le paso como argumento las tareas y su funcion asociada.
          - Las tareas para que las muestre
          - Su funcion asociada para cambiarlas cuando queden completadas

    
    - LOCAL STORAGE:

      - Es necesario importar la función useEffect
      - Permite almacenar en el navegador informacion como texto y que no se pierda cuando se actualize la pagina
      - Esta cadena de texto podremos verla en Inspeccionar/Almacenamiento/Almacenamiento local en nuestro navegador      

      - Uso la función useEffect:

        - Añadimos una dependencia con el array tareas.
          - Con esto useEffect ejecutará el código que contiene al principio y cada vez que se actualize el estado de tareas
          - Este codigo se encarga de gestionar la informacion que almacenemos
            - El método setItem añade un elemento dentro de localStorage.
              - Le indicamos el nombre de ese elemento y la cadena de texto a almacenar
                - En nuestro caso el elemento será tareas
                - La cadena de texto sera el array que contiene un objeto por cada tareas
                  - Antes debemos transformar ese array en cadena de texto mediante JSON.stringify(elemento)

            - El metodo getItem permite obtener un elemento almacenado en el navegador
              - Lo obtenemos en una cadena de texto
              - Si no hay nada almacenado devuelve null
                - y tareasGuardadas almacenará un array vacio
              - Si devuelve algo, transformo la cadena de texto a array mediante JSON.parse(Elemento obtenido)
                - y lo almaceno en tareasGuardadas
        
        - Repito lo mismo para mostrarCompletadas
          - El valor inicial del estado mostrarCompletadas es false
          - Si lo cambiara en algun momento a true y refescara el navegador volvería a ser false
          - Para pasar de booleano a string usaré toString()

*/

import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import FormularioTareas from './FormularioTareas';
import ListaTareas from './ListaTareas';

const App = () => {

  // Obtengo las tareas guardadas en local storage y la asigno como valor por defecto en el estado tareas
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [] ;  
  const [tareas,cambiarTareas] = useState(tareasGuardadas);
  
  // Almaceno las tareas en local storage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  // Obtengo mostrar completadas de local storage. Si no hay ningun valor le asigno el valor deseado por defecto
  // y si lo hay le asigno el valor booleano de comparar lo que obtuve y la cadena true.
  // Que devolverá true si la cadena devuelta es true o false en caso contrario.
  
  let valorMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas' === null)) valorMostrarCompletadas = false;
  else valorMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  
  // Creo el estado de mostrar tareas completadas y lo almaceno en local storage
  const [mostrarCompletadas, cambiarMostrarCompletadas]= useState(valorMostrarCompletadas);
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

 
  return (
    <div className="contenedor">
      
      <h1>Practica: Uso de formularios, crear, editar y borrar tareas.</h1>
      <h2>Creada mediante create react app</h2>
      <h2>Almacena la informacion de forma local en el navegador</h2>
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />

      <FormularioTareas
        tareas = {tareas}
        cambiarTareas = {cambiarTareas}
      />

      <ListaTareas
        tareas = {tareas}
        cambiarTareas = {cambiarTareas}
        mostrarCompletadas = {mostrarCompletadas}
      />

    </div>
  );
}

export default App;