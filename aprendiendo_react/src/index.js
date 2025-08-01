/*
APRENDIENDO React
  
- Instrucciones JSX. 
  - Son instrucciones de javascript y html juntas que serán renderizadas y mostradas en el navegador.
  - Es recomendable trabajar siempre con la consola abierta para mostrar posibles errores.
  - Existe un div con el id llamado root que lo engloba todas las instrucciones JSX
    - Puedo añadir más div dentro del root
  - Las instrucciones javascript deben ir entre llaves
  - Para definir clases debemos usar className en lugar de class
  - Podemos añadir estilos de forma dinámica usando variables
  
  - Atajos:
    - imr + tab importa react
    - sfc + tab forma la estructura de un componente
    - imsc + Tab importa styled components

    - Para imr y sfc tuve que añadir la extension Simple React Snippers
    - Para imsc lo tuve que añadir a mano de la siguiente forma:
      - Ir a Archivo/Preferencias/Configurar fragmentos de usuario
      - Indicar el lenguaje Javascript
      - Copiar este codigo en json y guardar:
        "Import Styled Components": {
          "prefix": "imsc",
          "body": [
            "import styled from 'styled-components';",
            "$0"
          ],
          "description": "Import Styled Components"
        }
        
  - Condicionales:
    - Forma 1: Usando sentencias if de javascript en funciones fuera de JSX. Menos usual. Lo inserté en Usuario.js
    - Forma 2: Insertando condicionales en el interior de las instrucciones JSX de la siguiente manera:
      - {condicion ? Instrucciones si se cumple la condicion : Instrucciones si no se cumple} 
        - Si quiero poner mas de una instruccion debo separarlos por una etiqueta div o similar
        - Añadir condiciones anidadas. {condicion && instrucciones}
    - Muestro ejemplos de ambas formas en Usuario.js. Comento la forma 1 que es menos usual
    
  - Arreglos
    - Podemos mostrar el contenido de un arreglo y mostrarlos en una lista mediante el método map
      - Añado cada elemento de forma dinámica
      - Cada hijo de una lista debe tener una única clave. Para ello usaremos el parámetro index 

- Componentes
  - Permite crear un código que podemos encapsular y reutilizar. Los usamos como etiquetas html
  - Tipos:
  
    - Componentes basados en clases. 
      - Menos usual. Antes se hacía asi. No había hooks, ni trabajar con estados.
      - Puede ser que encontremos código antiguo que se basen en estos componentes
      - Lo explico detalladamente en el archivo contadorClass.js

    - Componente funcionales. 
      - Reglas:
        - Los nombres de los componentes sigue la estructura camelcase pero con el primer caracter en mayusculas
        - Siempre debe devolver código JSX
        - Los llamamos como si fueran etiquetas html. Ej: <Componente />      
        - Debemos crear un archivo javascript por cada componente
        - Importar la libreria de react (imr+tab)
        - Genera la estructura de un componente exportado (sfc+tab)
        - Pueden anidarse unos dentro de otros
        - Se suele crear un componente llamado App que es el único que renderizamos
          - Desde App vamos llamando al resto de componentes

      - Para exportarlos e importarlos:
        - Si solo queremos exportar e importar un solo componente:
          - Usamos export default Componente y import Componente from "./Archivo.js";
        - Si queremos exportar e importar mas de un componente:
          - Usamos export {Componente1, Componente2} y import {Componente1, Componente2 from "./Archivo.js";
          - Si el archivo destino solo va a usar un componente debemos solo importar dicho componente
      
      - Propiedades:
        - Muestro ejemplos de ambas formas en Titulo.js. Dejando comentada la forma 1 menos usual
        - Forma 1 de usarlas:
          - Al crear el componente:
            - Pasamos como argumento la propiedad, la llamamos props y podemos usarla como props.propiedad
          - Al llamarlo al componente:
            - <Componente propiedad = "valor" />
        - Forma 2: Desctructuracion. Mas común y dinámico
          - props es un objeto formado por la propiedad y el valor que le pasamos al llamar al componente
          - Podemos destructurar y quedarnos solo con el valor.
          - Al crear el componente en lugar de llamar props al argumento pondremos entre llaves las propiedades
          - Al crear el componente podemos establecer valores por defecto a las propiedades añdiendo un = valor
          - Podemos pasar como propiedad:
            - Texto
            - Números
            - Arreglos
            - Objetos
            - Instrucciones JSX
            - ....
      
      - Agregar un evento al componente
        - Se agrega al llamar al componente
          - <Componente evento = {funcion} > </Componente>
          - La función contendrá el codigo a ejecutar.
          - Podrá ser declarada dentro de las llaves o llamarla y declararla fuera

    - Estado
      - Situación en la que se encuentra una aplicación
      - Crear un estado:
        - let vble = valor;
          const [vble, cualSeraLaFuncionQueCambieSuEstado] = hook(valorInicial)
      - Cada vez que cambiemos un estado el componente vuelve a cargarse

    - Hooks
      - Permite añadirle mas funcionalidad a nuestro código
      - Debemos importarlos asi: import { hook1, hook2, ... } from 'react';
          - Ejemplo import {useState} from 'react'; 
      - Empiezan por use.
      - Podemos crear nuestros hooks personalizados
      - Se usan en lugar de las vbles para detectar los cambios de estado
      
      - Reglas:
        - Hay que crearlo y usarlo dentro del componente funcional o dentro de otro hook
        - No se pueden usar dentro de ciclos o condicionales
        - No se pueden usar en funciones a no ser que usemos hooks personalizados
        - Pueden llamarse varias veces

      - Ejemplos de hooks basicos que vienen con react:
        
        - useState. 
            - Añade la posibilidad de trabajar con estados
              - const [vble,funcionQueCambiaraSuEstado] = useState(valor_inicial)
            - Lo uso en FormularioInicioSesion.js
          
        - useEffect. 
          
          - Equivale a los métodos de ciclo de vida de los componentes basados en clases
            - componentDidMount. Que se ejecutaba al montarse el estado
            - componentDidUpdate. Que se ejecutaba cada vez que se actualizaba el estado
            - componentWillUnmount. Que se ejecutaba justo antes de desmontar el estado.
          
          - Es una función que recibe siempre como parámetro a otra función que se ejecutara en estos casos:
            - Se ejecutará en cada renderazión:
              - useEffect(()=>{código})
            
            - Se ejecutará solo cuando se monte el componente.
              - useEffect(()=>{código, []})
              - Añado argumento una dependencia vacia
              - Lo podría usar para conectarme a APIs o bases de datos
            
            - Se ejecutará cuando se monte o actualize uno o mas eventos concretos
              - useEffect(()=>{código, [evento]})
              - añado una dependencia con el o los eventos
              - Es muy usual

            - Se ejecutará justo antes de desmontar el componente
              - useEffect(() => {
                  return ({
                    codigo
                  });
                }, []);

                - Se usarían para desconectarse de APIs o bases de datos
        
          - Lo aplico en ContadorFuncional.js

        - useReducer

          - Es útil si tenemos muchos botones
          - Tambien lo usaremos en redux.
          - Ahorra tener que crear una función por cada botón
          - En su lugar usaremos una instruccion switch-case, pondremos un case por cada acción y cambiaremos su estado
          
          - Sintaxis:
            - const [estado, dispatch] = useReducer(reducer, estado_inicial);
              - estado_inicial es un objeto
              - reducer es una función que escucha que tipo de acción vamos a ejecutar
                - Función que tiene dos parametros, el estado a modificar y la accion
                - En su interior usaremos sentencias switch - case para establecer los diferentes nuevos estados
                  - Hay que añadir un default

              - Devuelve un arreglo con el estado y una función llamada dispatch
              - Usaremos la funcion de dispatch dentro de la función onclick y le pasamos una acción
                  - Las acciones son objetos que describen como cambiar el estado
                  - El valor se indica en mayusculas

            - Lo aplico en ContadorFuncionalUseReducer.js
      
      - Hooks personalizados
        - Sacamos la lógica de un componente en un archivo independiente que usaremos en diferentes paginas
        - Las funciones no puede usar estados. Con los hooks personalizados, sí.
            - Esas funciones son las que podremos reutilizar en toda nuestra app.
            - Podrán tener argumentos
        - Los crearemos todos en una carpeta
        - Los llamaremos empezando por use
        - Es igual que un componente pero no devolvemos instrucciones JSX
          - Devolvemos un array con los valores
          - Que los usamos donde lo necesitamos previamente imporanto y sabiendo que la función devolverá un array
        - Lo aplico en blog.js

    - Relacion Estados y hook
      - Dependiendo del estado y el hook que usemos podremos usar un código u otro
        - Se mostrará en pantalla una información u otra
      - Lo aplico en App.js

    - Formularios
      - Eventos de formulario
        - onChange permitirá ejecutar una función cada vez que el input cambie. 
          - Si no lo uso la consola advertira que un componente está cambiando de forma incontrolada
          - En su interior ejecutaremos una función
            - La función la llamamos y declaramos fuera
              - Esta función llamará a la función que cambia el estado  
              - Tendremos como parámetro el evento, accedemos a su target y asignamos el value del formulario
          - onSubmit
            - Ejecutará una función cuando se envie el formulario
            - preventDefault. Permite modificar el comporamiento por defecto. 
              - En este caso no enviará los datos del formulario y podremos validarlo antes
            - Validamos los datos mediantes condicionales
        - En el archivo FormularioInicioSesion.js aplico lo anterior. Es un formulario no seguro

- Añadiendo estilos a los componentes
  - Hay varias formas que pueden combinarse entre ellas
    
    - Primera forma:  Crear un archivo css por cada componente
      - Viene integrado en create-react-app
      - Ponerle el mismo nombre que el componente, añadirle la extensión .css y ponerlo en la misma carpeta
      - Importarlo desde el componente como un archivo
        - Cuidado!!. Al importarlos se pueden aplicar sin tener control sobre ellos
        - Hay que poner nombres mas especificos y asegurarnos de llamarlos bien
        - Podría usarse la metodología BEM
                - Al contenedor ppal le pongo un nombre. Ejemplo: contenedor
                - A las etiquetas que contiene le pongo el nombre del contenedor seguido de __ y el nombre de la etiqueta
                - Ej:
                  <div classname = "contenedor">
                    <h1 classname = "contenedor__etiqueta">
                    </h1>
                  </div>

      - El componente ContadorClass usa esta primera forma
      
    - Segunda forma: Modulos CSS
      - Viene integrado en create-react-app
      - Soluciona el problema de la primera forma
      - Seguimos usando archivos separados
      - Podremos llamar de igual forma a los estilos y no se sobrescribirán
      - Se aplicarán donde sean importados
      
      - Para aplicarlos:
        - Los archivos css deben tener al final de su nombre .module.css
        - Al importarlos debemos hacerlo asi: import styles from './archivo.module.css'
        - Debemos llamarlos así dentro de la etiqueta: className = {styles.clase}
      
        - De forma automática Create React App añade un identificador único al componente
        - Lo llamam <etiqueta class="componente_clase_identificadorUnico"

      - El componente ContadorFuncional usa esta segunda forma
    
    - Tercera forma: styled components
      - La que se usará en el curso
      - Repetimos menos código que en la segunda forma.
        
      - Instalación:
        - Ejecutar npm install styled-components en la consola git bash
          - En la carpeta que creamos al inicar el comando de Create React App
      
      - Usaremos elementos
        - Los guardaremos todos dentro de la misma carpeta
        - Se recomienda que tengan muchos archivos
          - Uno por cada elemento html que tenga estilos propios. Ej: títulos, párrafos, inputs, select ...
        - Los exportamos e importamos para poder reutilizarlos
        
        - Reemplazamos la etiqueta html con los elementos y podemos aplicarle propiedades asi:
          - <Elemento propiedad1 propiedad2 .... > </Elemento> 
        
        - Creamos el elemento de esta forma:
          - Creo el archivo con el nombre del elemento.js
          - Importo styled-components: 
            - import styled, {css} from 'styled-components'; (imsc+tab)       

          - Creo los elementos:
            - const elemento = styled.etiquetaHtmlOriginal`codigo_css`;
                
          - Los exporto:
            - export default elemento;
          
          - Añadimos pseudo elementos asi:
            - &:pseudoElemento {Instrucciones css}
            - Ejemplo de pseudo elemento o subclase: hover
            
          - Añadimos propiedades asi:
            - ${props => props.propiedad && css `codigo_css`}; en la declaración del elemento
            - Podemos añadir pseudo elementos situandolos entre las llaves de las propiedades

        - Lo importo y uso en el destino de esta forma:
          - import Elemento from './elementos/elemento';
          - <Elemento> </Elemento>

      - Aplico esta tercera forma de styled components:
        - El botón de iniciar sesión de FormularioInicioSesion.js le añado la propiedades negro y largo.
        - El botón de cerrar sesion situado en el componente App.js usa esta tercera forma y le añado la propiedad marginTop
 
*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componentes/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />        
  </React.StrictMode>
);
