/*
    SELECT CON LAS DIFERENTES CATEGORIAS DE GASTOS EXISTENTES.
    
        - Importo lo necesario
        - Creo el componente
            - Obtengo como parámetro el estado con la categoría por defecto y la funcion para cambiarla
            - El estado mostrarSelect almacenará si muestro o no el select. Muestra dinámica
            - La funcion handleClick me permitirá cambiar el estado con la categoria seleccionada

            - Devuelvo:
                - El contenedor del select. Cuando hagla click en el se mostrará o ocultará
                    - La opción seleccionada será la que contenga el estado categoria
                    - Le añado el icono
                    - Las diferentes opciones se mostrarán solo si mostrarSelect contiene true

        - Lo exporto y lo insertaré en el componente ppal donde se añaden los gastos
*/

// React, Elementos, Archivo svg como componente, objeto categorias, iconos,
import React, {useState} from "react";
import {ContenedorSelect, OpcionSeleccionada, Opciones, Opcion} from './../elementos/ElementosDeSelect';
import IconoDown from './../assets/down.svg?react';
import categorias from './../objetos/categorias';
import IconosCategorias from './../elementos/IconosCategorias';


const SelectCategorias = ({categoria, cambiarCategoria}) => {

    // Estados
    const [mostrarSelect, cambiarMostrarSelect] = useState(false);

    // Funciones
    const handleClick = (e) => {
        // Cambio la categoria con el atributo personalizado obtenido
        cambiarCategoria(e.target.dataset.valor);        
    }

    return (
        
        // Cuando haga click en ContenedorSelect mostraré u ocultare el select
        <ContenedorSelect onClick={() => cambiarMostrarSelect(!mostrarSelect)}>
            <OpcionSeleccionada>{categoria}<IconoDown/></OpcionSeleccionada>

            {/* Solo mostraré las opciones si mostrarSelect es true */}
            {mostrarSelect && 
                <Opciones>
                    {/* Recorro el objeto categorias y muestro una categoria en cada iteraccion */}
                    {categorias.map((categoria) => {
                        return <Opcion
                            key= {categoria.id}
                            // Atributo personalizado con el id de la categoria seleccionada
                            data-valor= {categoria.id}
                            onClick={handleClick}
                        >
                            <IconosCategorias id={categoria.id}/>
                            {categoria.texto}
                        </Opcion>;
                    })}
                </Opciones>
            }
            
        </ContenedorSelect>
    );
}
 
export default SelectCategorias;
