import React from 'react';
import {useState, useEffect} from 'react';
// css
import styles from './ContadorFuncional.module.css';

const ContadorFuncional = (props) => {
    const [contador, cambiarContador] = useState(0);
    
    useEffect(() => {
         console.log('El componente funcional se montó por primera vez');
        //  Llamo a la API
    }, []);

    useEffect(() => {
        console.log('El componente funcional se montó y/o actualizó');
    });

    useEffect(() => {
        console.log('El evento contador funcional se montó o actualizó');
    }, [contador]);

    useEffect(() => {
        return(() => {
            console.log('Se desmontó el componente funcional');
            // Cierro la llamada a la API
        });

    }, []);

    return (
        <div>
            <h3>Contador: {contador} </h3>
            <button className = {styles.boton} onClick = {() => cambiarContador(contador + props.aumenta)}>Incrementa</button>
            <button className = {styles.boton} onClick = {() => cambiarContador(contador - props.disminuye)}>Disminuye</button>
            <p>Componente funcional</p>
            <p>Estilos creados mediante modulos CSS</p>                     
        </div>        
      );
}
 
export default ContadorFuncional;