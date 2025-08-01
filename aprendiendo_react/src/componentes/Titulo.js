import React from 'react';

/* MUESTRO LAS DOS FORMAS DE DEFINIR PROPIEDADES. LAS COMENTO PARA DESPUES DEJARLA EN UNA DESCTUCTURANDO
// primera forma de definir propiedades. Pasando como argumento toda la propiedad y llamarla props
const TituloAzul = (props) => {
    const nombre = props.usuario;
    let color = 'blue';
    return (<p style = {{color: color}}>Bienvenido {nombre}</p>  );
}

// segunda forma de definir propiedades. Destructurando
const TituloRojo = ({usuario}) => {
    let color = 'red';
    return (<p style = {{color: color}}>Bienvenido {usuario}</p>  );
}

export {TituloAzul, TituloRojo};
*/

const Titulo = ({usuario = "Usuario", color = "grey"}) => {
    return (<p style = {{color: color}}>Bienvenido {usuario}</p>  );
}

export {Titulo};


