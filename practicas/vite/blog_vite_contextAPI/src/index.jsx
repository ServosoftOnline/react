/*

PRACTICA REACT: BLOG

  - Aplicacion muy sencilla para aprender como usar react router. No será un blog real.
  
  - Usaré:
    - React. Libreria de Javascript. Que estoy usando durante el curso
    - React router. Libreria de Javascript que permite crear app de mas de una página
    - Styled components. Para aplicar estilos css
    - Context API para crear contextos
    
  - Con respecto al uso de context API
    - importo el proveedor del contexto encerrado entre llaves
    - Encierro al componente ppal App en el interior del proveedor

    
  
  

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importo proveedor del contexto
import {ProveedorTema} from './contextos/contextoTema';


// Encierro al componente App en el componente proveedor del contexto
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProveedorTema>
      <App />
    </ProveedorTema>    
  </React.StrictMode>
);

