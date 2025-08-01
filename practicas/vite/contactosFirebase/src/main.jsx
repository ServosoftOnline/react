/*
   EN ESTA APLICACION:
    - Usaré vite, styled components, firestore, context api para los resultados de las operaciones
    


*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Contexto
import { ProveedorMensaje } from './contextos/contextoMensaje.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProveedorMensaje>
      <App />
    </ProveedorMensaje>
  </React.StrictMode>,
)
