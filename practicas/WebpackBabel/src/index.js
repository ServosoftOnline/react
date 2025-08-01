/*

INSTALO WEBPACK Y AÑADO REACT, BABEL

    - IMPORTANTE: USAR VITE EVITA TENER QUE HACER TODO ESTO. ES SOLO PORQUE HAY EMPRESAS QUE AUN USAN ESTO
    
    - He ido siguiendo las indicaciones del video de youtube: https://www.youtube.com/watch?v=_o7f2NEFD1c
    - Permiten instalar crear aplicaciones en react sin usar create react app o vite
    - Webpack es un empaquetador de módulos que permite seleccionar los módulos que instalar
    - Babel es un compilador de Javascript que permite poder usar ecmascript6 y que lo entiendan los navegadores antiguos
    - Explico como instalar webpack, react, babel y sass

    - Pasos a realizar para instalar webpack:

        1.- La documentación a seguir se encuentra en: https://webpack.js.org/
        2.- Ejecutar npm init
            - Indicamos de forma opcional el resto de información
            - Se genera el archivo package.json

        3.- Ejecutar npm install webpack webpack-cli --save-dev
            - Se genera la carpeta node_modules y el archivo package-lock.json

        4.- Crear este archivo index.js y poner un console.log para probar.

        5.- Hacer a mano el archivo webpack.config.js en el directorio raiz
    	    - Pegar la configuracion existente en la documentacion. https://webpack.js.org/guides/getting-started/#using-a-configuration
            - Añadir mode: 'development'

        6.- Crear el script build en package.json
            - Al ejecutarlo escribiendo npm run build se genera la carpeta de salida y el archivo indicado en webpack.config.js
            - En este caso la carpeta public y el archivo bundle.js
            
        7.- Hacer a mano index.html dentro de la carpeta public
            - En visual studio code escribo !, pulso el tabulador y me crea la estructura básica de un archivo index.html
            - Le añado:
                <div id="root"></div>
                <script src="./bundle.js"></script>

        8.- Abro el archivo index.html y ya tengo mi primera app. Cuyo código será el de este archivo

    - Para añadir react, actualmente en la version 18
        1.- npm install react react-dom
            - Actualizará las dependencias de package.json

    - Para añadir babel:

        Seguir los pasos que indica su web: https://babeljs.io/:
        1.- Seleccionar setup y webpack
        2.- ejecutar npm install --save-dev babel-loader @babel/core en consola
        3.- Añadir en webpack.config.js la configuración que viene indicada en su web en el apartado "Usage"

        4.- Crear el archivo babel.config.json
            - Ejecutando npm install @babel/preset-env --save-dev
            - Añadir la coleccion de plugins o presets para babel:
                {
                    "presets": ["@babel/preset-env"]
                }

        5.- Añado la coleccion de plugins o preset para react
            - Ejecutando npm install --save-dev @babel/preset-react
            - Y añadiendo el presets "@babel/preset-react" en el arreglo de los presents de webpack.config.js y babel.config.json

    - Para añadir sass


    - Pasos para probar la aplicacion.     
        1.- Crea el componente ppal en App.js
        2.- Añade en este archivo index.js las líneas que vienen debajo de los comentarios
            - importa react, reactDom y el componente ppal
            - Obten el id cuyo nombre sea root de index.html, renderiza la app, creala y añadela al DOM

*/

import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(<App />);