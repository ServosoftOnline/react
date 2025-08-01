/*
    ICONOS QUE VAN JUNTO A LAS CATEGORIAS
*/

// React
import React from "react";

// Iconos como SVG
import IconoComida from './../assets/cat_comida.svg?react';
import IconoCuentasYPagos from './../assets/cat_cuentas-y-pagos.svg?react';
import IconoHogar from './../assets/cat_hogar.svg?react';
import IconoTransporte from './../assets/cat_transporte.svg?react';
import IconoRopa from './../assets/cat_ropa.svg?react';
import IconoSaludeEHigiene from './../assets/cat_salud-e-higiene.svg?react';
import IconoCompras from './../assets/cat_compras.svg?react';
import IconoDiversion from './../assets/cat_diversion.svg?react';

// Le pasaremos el nombre cuando lo llamemos y devolverá el icono asociado
// Los caracteres que indicamos en case deben ser los mismos que los id declarados en el objeto categorias.jsx
const IconosCategorias = ({id}) => {
    switch(id){        
        case 'comida':          return <IconoComida/>;
        case 'cuentas y pagos': return <IconoCuentasYPagos/>;
        case 'hogar':           return <IconoHogar/>;
        case 'transporte':      return <IconoTransporte/>;
        case 'ropa':            return <IconoRopa/>;
        case 'salud e higiene': return <IconoSaludeEHigiene/>;
        case 'compras':         return <IconoCompras/>;        
        case 'diversion':       return <IconoDiversion/>;
        default:                break;
    }
}
 
export default IconosCategorias;