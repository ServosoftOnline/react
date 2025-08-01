/*
    COMPONENTE CALENDARIO

        - Permite crear un calendario del cual obtendre la fecha seleccionada

        - Importo:
            - El calendario llamado Daypicker
            - Sus estilos
            - La libreria date-fns me permitirá cambiar el momento obtenido en días, fechas, meses, año, ...
            - El paquete en español

        - Creo mi componente
            - Tiene como parámetros el estado fecha, que por defecto es la fecha actual, y su función correspondiente
            - Creo un estado que indicará si el Daypicker estará visible o no.

            - Creo la función que se llamará cuando seleccione la fecha en el calendario
                - Cambio la fecha en el estado
                - Oculto el calendario

            - Devuelvo:

                - Un contenedor que cuando haga click en el cambiará el valor de visible a su contrario y contiene:
                    - Un input de lectura que mostrará la fecha ya formateada
                    - El Daypicker que será mostrado solo cuando cuando el estado sea true

                    - Propiedades del DayPicker:
                        - mode="single". Solo puedo hacer click en una fecha
                        - selected={manejarSeleccionFecha}. Contiene el estado fecha que obtuve como parámetro
                        - onSelect={cambiarFecha}. Contiene la función asociada al estado fecha
                        - locale={es}. El idioma español        


*/

// React y Elementos
import React, {useState } from "react";
import {ContenedorInput} from './../elementos/ElementosDeDatePicker';

// Day picker
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';

// date-fns
import { format } from 'date-fns';
import { es } from "date-fns/locale";


// Componente
const DatePicker = ({fecha, cambiarFecha}) => {

    // Estado que almacena si el calendario está visible o no
    const [mostrarCalendario, cambiarMostrarCalendario] = useState(false); 
    
    // Función para manejar la fecha seleccionada en el calendario. Añado al estado la fecha seleccionada y oculto el calendario
    const manejarSeleccionFecha = (date) => {        
        cambiarFecha(date);
        cambiarMostrarCalendario(false);
    };
    
    return (
        
        <ContenedorInput>

            {/* Input solo de lectura que mostrará la fecha seleccionada. Cuando haga click sobre el será visible o invisible*/}            
            <input onClick={() => cambiarMostrarCalendario(!mostrarCalendario)}
                type ="text"
                readOnly
                value={format(fecha, `dd 'de' MMMM 'de' yyyy`, {locale: es})}                
            />

            {/* Calendario visible solo si el estado visible contiene true */}
            {   mostrarCalendario &&                
                    <DayPicker                     
                    mode="single"
                    selected={fecha}
                    onSelect={manejarSeleccionFecha}
                    locale={es}
                />                
            }

        </ContenedorInput>
    );
}
 
export default DatePicker;