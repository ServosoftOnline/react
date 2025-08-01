/*

PRACTICA REACT: BLOG

  - Aplicacion muy sencilla para aprender como usar react router. No será un blog real.
  
  - Usaremos:
    - React. Libreria de Javascript. Que estoy usando durante el curso
    - React router. Libreria de Javascript que permite crear app de mas de una página
    - Styled components. Para aplicar estilos css
    - Describo como instalarlos en instalacion.txt
    
  - Describo como usar Styled components mas detalladamente en la app aprendiendo_react
  

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

