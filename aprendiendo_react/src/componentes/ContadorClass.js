/*
    COMPONENTES BASADO EN CLASE: EJEMPLO DE UN CONTADOR

        - Es antiguo. No se suele usar. Lo explico por si lo veo.
        - Importamos react y Component
        - Crear una clase con el nombre del componente extiendo la funcionalidad de componente
        
        - Usabamos un método llamado render
            - Aquí introducimos lo que queremos que se vea en pantalla
            - Dentro introducimos el return
            - En onClick ya no podemos solicitar usar una funcion. en su lugar usaremos un método
                - Este método se declara antes de render
                - Para llamar al método usaremos la palabra reservada this.metodo que indica el metodo de esta clase

        - Crear estados
            - Usar el metodo constructor
                - Se ejecuta siempre que carga la aplicacion
                - Accedemos a las propiedades que le pasemos al componente
                - Usamos el metodo super y añadimos las propiedades
                - this.state permite añadir un estado
                    - Le pasamos un objeto compuesto por una propiedad y un valor
                    
        - Modificar un estado
            - En nuestro ejemplo lo hacemos en las funciones de incrementar y disminuir
            - En el interior del return ya puedo usar el estado y lo muestro entre llaves
            - Para establecer un nuevo estado usamos el metodo this.setState
                - Indicamos el estado anterior
                - Devolvemos un objeto con el nuevo estado
        
        - Métodos de ciclo de vida:
            - componentDidMount
                - Se ejecutará cuando se monta el componente
                - LLamará alguna API si fuera necesario
            - componentDidUpdate
                - Se ejecuta cuando se actualiza el estado
                - Podemos ver que propiedades y estado tenía antes de actualizar
            - componentWillUnmount
                - Se ejecuta justo antes de desmontar el componente
                - Acabamos la llamada a la api si la llamamos al entrar
                - U cualquier otro proceso necesario

*/      


import React, { Component } from 'react';
import './ContadorClass.css';

class ContadorClass extends Component {

    constructor(props){
        super(props);
        this.state = { contador: 0 };
    }

    componentDidMount () {
        console.log('El componente basado en clases se montó por primera vez');
        // Llamo a una API ...
    }

    componentDidUpdate (propiedadesAnteriores, estadoAnterior) {
        console.log ('Se actualizó el componente basado en clases');
        console.log ('Propiedades anteriores', propiedadesAnteriores);
        console.log ('Estado anterior del componente basado en clases', estadoAnterior);
    }

    componentWillUnmount () {
        console.log('Se desmontó componente basado en clases');
        // Acabo la llamada a la API
    }
    
    incrementar(cantidad) {
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador + cantidad
            }
        });
    }

    disminuir(cantidad) {
        this.setState((estadoAnterior) => {
            return {
                contador: estadoAnterior.contador - cantidad
            }
        });
    }
    
    render(){
        return (
            <div>
                <h3>Contador: {this.state.contador}</h3>
                <button className = "boton" onClick={() => this.incrementar(this.props.aumenta)}>Incrementa</button>
                <button className = "boton" onClick={() => this.disminuir(this.props.disminuye)}>Disminuye</button>
                <p>Componente basado en clases</p>
                <p>Estilos aplicados sin usar módulos CSS</p>
            </div>
        );
    }

}

export default ContadorClass;
