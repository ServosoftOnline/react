/*
    FUNCION QUE OBTIENE UNA CANTIDAD Y LA DEVUELVE EN EUROS
        - Devuelve una nueva instancia internacional aplicandole un formato español
        - Le paso una cantidad formada por un numero entero y dos decimales
        - La nueva instanacia devolvía comas en lugar de puntos.
        - Uso la funcion replace para transformar la coma en punto.
        
*/
const convertirAMoneda = (cantidad) => {
    return new Intl.NumberFormat(
        'es-ES',
        {style: 'currency' , currency: 'EUR', minimumFractionDigits: 2}
    ).format(cantidad).replace(',','.');
}
 
export default convertirAMoneda;