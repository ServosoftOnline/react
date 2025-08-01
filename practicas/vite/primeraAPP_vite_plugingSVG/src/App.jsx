/*
  - PRIMERA APP REALIZADA CON VITE:

    - Fué mi primera app realizada con vite. Describo las diferencias con create react app

      - Sustituye a create-react-app. Usa menos dependencias
      - Web: https://vitejs.dev/
      - Documentacion: https://vitejs.dev/guide/

      - Crea la siguiente extructura de carpetas y archivos:

        - La carpeta raiz:
          - El archivo .eslintrc.cjs que permite trabajar con Eslint para encontrar errores mientras se escribe
          - El archivo index.html se encuentra aquí y no directamente en la carpeta public como en create react app
            - En su interior, en la etiqueta <script>, se encuentra la línea que apunta a main.jsx

          - El archivo package.json contiene:
            - Los scripts que podemos utilizar en consola
              - "dev": "vite". Ejecuta el servidor
              - "build": "vite build". Compila el proyecto
            - Las depencias de mi proyecto (dependencies)
            - Las dependencias de desarrollo (DevDependencies)
            
          - El archivo vite.config.js donde se importan y cargan los plugins
            
        - La carpeta node_modules almacena las dependencias
        - La carpeta public almacenará los archivos que no sufrirán transformaciones por partes de las librerias a usar. Ej: imagenes
        - La carpeta src donde creo los archivos de mi código que ahora tendrán la extension .jsx y no .js como en create react app

          - Dentro de la carpeta src:
            - La carpeta assets donde se almacenan los archivos que sí sufren transformaciones
            - El archivo main.jsx equivale al index.js de create react app

      - Permite la instalacion de plugins
        - Los plugins oficiales y de la comunidad se encuentran en: https://vitejs.dev/plugins/

    - Muestro como usar un plugin de vite que transforma imagenes svg en componentes

      - Instalacion del plugin vite-plugin-svgr
          
          - Crea componentes a partir de imagenes SVG
          - Su web: https://www.npmjs.com/package/vite-plugin-svgr                
          - Instalacion: npm i vite-plugin-svgr

          - En vite.config.js:
            - importo el pluggin mediante: import svgr from "vite-plugin-svgr"; en vite.config.js
            - Cargo el pluggin quedando está linea así: plugins: [react(), svgr()],
          
          - En app.jsx
            - Importo los componentes de esta forma: import {ReactComponent as Componente} from './assets/imagen.svg'

*/

import { useState } from 'react';

// Primera forma de aplicar estilos css en vite. Importanto el archivo que contiene las reglas
import './App.css';

// Segunda forma de aplicar estilos css en vite. Importo estilos mediante modulos css
import styles from './App.module.css';

// Tercera forma de aplicar estilos css en vite. Importo estilos para aplicar SASS
import './scss/App.scss';

// importo los componentes asociados a las imagenes svg
import ReactLogo from './assets/react.svg?react';
import ViteLogo from './assets/vite.svg?react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
          <ViteLogo />
        </a>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          <ReactLogo  />
        </a>
      </div>

      {/* Aplico la regla rojo mediante modulos css (segunda forma de aplicar estilos css en vite) */}
      <h1 className={styles.rojo}>Primera app</h1>

      {/* Aplico la regla azul mediante sass (tercera forma de aplicar estilos css en vite) */}
      <h1 className="azul">con vite</h1>

      {/* Aplico la regla card existente en el archivo App.css (Primera forma de aplicar estilos css en vite) */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
