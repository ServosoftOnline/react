/*
    FORMULARIO DEL COMPONENTE PPAL PARA AÑADIR GASTOS

        - Con este mismo formulario podré añadir, modificar o eliminar gastos
        - Dependerá si se le paso como propiedad un gasto a añadir, modificar o eliminar

        - Importo lo necesario

        - Creo el componente
            - Si obtengo un gasto a modificar o a eliminar actuaré en consecuencia. Si no le paso ninguno es que añadiré el gasto

            - los estados:
                - un estado por cada input
                - Un estado para almacenar los mensajes de error en las validaciones
                - Un estado donde almacenaremos la categoria seleccionada en el select
                    - La pasaré como propiedad al componente SelectCategorias
                - Un estado con el momento actual por defecto
                    - La pasaré como propiedad al componente DatePicker

            - Efecto
                - Se ejecutará al principio y cada vez que halla un cambio de usuario o de gasto
                - Comprobará si existe un gasto y si es del usuario actual
                - Si se cumple cambio todos los estados de los inputs con el gasto obtenido

            - las funciones:
                - handleSubmit para validar lo que envio el formulario
                - handleChange para ir modificando los estados de los inputs

            - Devuelve:
                - Los filtros:
                    - Un elemento que mostrará un select con todas las categorias
                        - Le paso el estado categoria y la funcion que lo cambia
                        - Para cuando actualice su estado actualize tambien el select
                    - Un elemento que mostrará el date picker

                - Los inputs:
                    - Para la descripción del gasto
                    - Para el importe. Esté mostrará la fuente mas grande

                - El boton que enviará los inputs del formulario
                    - Tiene un contenedor que lo centra
                    - El botón:
                        - Se comportará como boton y no como enlace
                        - Tendrá la propiedades
                            - primario para que cambie el color
                            - con icono para que sea mas grande
                        - Añado el icono que fue creado como elemento

                - El mensaje de error en la validación si llegara a producirse


                

*/

// React
import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";

// Elementos
import{ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton} from './../elementos/ElementosDeFormulario';
import Boton from "../elementos/Boton";

// Componentes
import SelectCategorias from "./SelectCategorias";
import DatePicker from "./DatePicker";
import Mensaje from "./Mensaje";

// Svg como componente
import IconoPlus from './../assets/plus.svg?react';

// Contextos
import { useAuth } from "../contextos/AuthContext";
import {ContextoMensaje} from './../contextos/contextoMensaje';

// Funciones para editar contenido en firestore
import agregarGasto from "../firebase/agregarGasto";
import editarGasto from "../firebase/editarGasto";

// date-fns
import { fromUnixTime, getUnixTime } from "date-fns";

// Componente
const FormularioGasto = ({gastoAModificar}) => {    

    // Estados
    const [categoria, cambiarCategoria] = useState('comida');
    const [fecha, cambiarFecha] = useState(new Date());
    const [inputDescripcion, cambiarInputDescripcion] = useState('');
    const [inputCantidad, cambiarInputCantidad] = useState('');

    // Contexto: Universal id del usuario que inicio sesión y mensajes de validacion
    const {sesion} = useAuth();
    const usuario = sesion.uid;
    const {mensajeAMostrar, rdoValidacion , cambiarMensaje, reiniciarMensaje} = useContext(ContextoMensaje);

    // Redirigir y reinicio el contexto de mensajes de validacion
    const navigate = useNavigate();
    reiniciarMensaje();
   
    // Compruebo si hay gastos que modificar o eliminar pasado como propiedad
    useEffect(()=> {

        // Si hay gasto a modificar actualizaré el formulario con los resultados de la busqueda
        if(gastoAModificar) {            

            // Si el id del usuario coincide con el uidUsuario que realizó el gasto
            if(usuario === gastoAModificar.data().uidUsuario){

                // Cambio todos los estados de los inputs y se actualizarán los inputs con el gasto a modificar
                cambiarCategoria(gastoAModificar.data().categoria);
                cambiarFecha(fromUnixTime(gastoAModificar.data().fecha));
                cambiarInputDescripcion(gastoAModificar.data().descripcion);
                cambiarInputCantidad(gastoAModificar.data().importe);

            // Si no lo es lo redirijo hacia lista de gastos
            } else navigate('/lista');
        }

    }, [gastoAModificar, usuario]);

    // FUNCIONES
    const validacionCorrecta = (inputDescripcion, inputCantidad) => {

        // Que no halla ningun campo vacio
        if(inputDescripcion==='' || inputCantidad==='') {
            cambiarMensaje('Debe rellenar todos los datos', 'incorrecta');
            return false;
        }

        // Que la cantidad tenga un numero entero seguido de un punto y como máximo dos decimales
        const enteroConDecimalesOpcionales = /^\d+(\.\d{1,2})?$/;
        if(!enteroConDecimalesOpcionales.test(inputCantidad)) {
            cambiarMensaje('El importe debe tener un número entero con un máximo de dos decimales opcionales','incorrecta');
            return false;
        }
        return true;
    }

    const llamaAEditarGasto = () => {

        editarGasto({
            categoria: categoria,
            fecha: getUnixTime(fecha),
            inputDescripcion: inputDescripcion,
            inputCantidad: inputCantidad,
            uidUsuario: usuario,
            idGasto: gastoAModificar.id
        })
        .then(() => {
            cambiarMensaje('Gasto modificado con éxito', 'correcta');
            setTimeout(() => {
                reiniciarMensaje();
                navigate('/lista');
              }, 5000);

        }).catch((error) => {
            cambiarMensaje('Error de la base de datos al modificar el gasto', 'incorrecta');
            console.log(error);
        })
    }

    const llamaAAgregarGasto = () => {

        agregarGasto({
            categoria: categoria,
            fecha: fecha,
            inputDescripcion: inputDescripcion,
            inputCantidad: inputCantidad,
            uidUsuario: usuario
        })
        .then (() => {

            // Restauro los valores por defecto
            cambiarCategoria('comida');
            cambiarFecha(new Date());
            cambiarInputDescripcion('');
            cambiarInputCantidad('');

            // Mensaje correcto
            cambiarMensaje('Gasto añadido con éxito', 'correcta');
            setTimeout(() => {
                reiniciarMensaje();
                navigate('/');
              }, 5000);

        })

        // Error al añadir en firestore
        .catch((error)=>{
            cambiarMensaje('No se pudo añadir el gasto', 'incorrecta');
            console.log(error);
        });

    }

    const handleChange = (e) => {
        if(e.target.name === 'inputDescripcion') cambiarInputDescripcion(e.target.value);
        else if (e.target.name === 'inputCantidad') {

            // Remplazará todo lo que no sea un numero y un punto por un espacio blanco
            cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Si la valicación es correcta veré si hay gasto que modificar o borrar
        if(validacionCorrecta(inputDescripcion, inputCantidad)) {
            // Si hay gasto a modificar lo modifico. Si no agrego
            if(gastoAModificar) llamaAEditarGasto();
            else llamaAAgregarGasto();
        }
    }
    // FIN DE LAS FUNCIONES



    return (
        <>
            <Formulario onSubmit={handleSubmit}>

                {/* Filtros */}
                <ContenedorFiltros>
                    <SelectCategorias
                        categoria={categoria}
                        cambiarCategoria={cambiarCategoria}
                    />
                    <DatePicker
                        fecha = {fecha}
                        cambiarFecha = {cambiarFecha}
                    />
                </ContenedorFiltros>

                {/* Inputs */}
                <Input
                type="text"
                name="inputDescripcion"                
                placeholder="gasto"
                value={inputDescripcion}
                onChange={handleChange}
                />

                {/* El value hara que se muestre en pantalla el caracter euro si input cantidad existe */}
                <InputGrande
                type="text"
                name="inputCantidad"
                placeholder="0.00€"
                value={inputCantidad ? `${inputCantidad}€` : ''}
                onChange={handleChange}
                />

                {/* Boton */}
                <ContenedorBoton>
                    
                    {/* Si hay gastoAModificar muestra el botón sin la propiedad $conIcono y
                    no añade el svg como imagen IconoPlus */}
                    {gastoAModificar ?
                        <Boton
                            $primario                        
                            as="button"
                            type="submit"
                            >Editar Gasto                            
                        </Boton>
                    :
                        <Boton
                            $primario
                            $conIcono                                                   
                            as="button"
                            type="submit"
                        >
                            Agregar Gasto
                            <IconoPlus/>
                        </Boton>                        
                    }
                </ContenedorBoton>

                {/* Mensaje con el resultado de la validacion. Se mostrará en verde u rojo */}
                <Mensaje $validacion={rdoValidacion} mensaje={mensajeAMostrar}/>

            </Formulario>

        </>
     );
}

export default FormularioGasto;