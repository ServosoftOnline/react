/*
  - PARA APLICAR REDUX DEBO:

    - Importar los siguientes componentes:
      - Provider proveniente de react-redux
      - createStore proveniente de redux
    
    - Importo la funcion reducer proveniente de ./reducers/tiendaReducer.js
      - En tiendaReducer.js la explico

    - Creo la cte store:
      - Almacenará el estado global devuelto por createStore que tiene como parámetro a la funcion reducer
      - Este estado global tiene varios métodos:
        - dispatch(Accion)
        - getState(). Permite acceder al estado

    - El componente Provider debe:
      - Contener en su interior al componente ppal App.js
      - Añadirle la propiedad store que contiene la cte store

    - REDUX está en deshuso. Esta forma de trabajar se llama boilerplate. Indico como hacerlo por si me lo encuentro    

*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

//REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/tiendaReducer';
const store = createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
