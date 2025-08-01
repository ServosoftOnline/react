/*
  APP: LISTA DE TAREAS

    - Usaré local storage para almacenar las tareas
    - El archivo App.css contendrá los estilos
    - Usaré la metodologia BEM para nombrar las clases
    - El componente App contiene la aplicacion
    

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componentes/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
