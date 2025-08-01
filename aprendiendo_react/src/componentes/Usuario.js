import {Titulo} from "./Titulo.js";

// FORMA2: CONDICIONALES EN INSTRUCCIONES JSX
const Usuario = () => {
  const pais = undefined;
  const amigos = ['David', 'Pedro', 'Ariel'];
    return (
        <div>
            <Titulo usuario = "Óscar" color = "red"/>
            <Titulo usuario = "César" color = "green" />
            <Titulo />
            {/* Si no hubiera pais no se ejecutaba esto*/}
            {pais && <p>Tu pais es {pais}</p>}
            <p>Tus amigos son:</p>
            <ul>
            {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
            </ul>
            <p>Que tengas un buen día!</p>
        </div>
    );
}



export default Usuario;

/* 
// FORMA 1: CONDICIONALES EN JAVASCRIPT
const JSX = (
  <>
    <h1 className = "titulo" style = {{color: color}}> Hola {nombre}</h1>
  </>
);

const verificarSesion = (sesion) => {
  if (sesion === true) {
    return JSX;
  } else {
    return <h1>No has iniciado sesion</h1>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {verificarSesion(sesion)}    
  </React.StrictMode>
);
*/