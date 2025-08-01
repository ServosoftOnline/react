/*
    EJEMPLO DE HOOK CUYO PRODUCTO DEPENDE DEL VALOR DE LA SUMA DE SUS CONCEPTOS:
        
        - Un componente se va a ejecutar n veces.
        - No se llaman los hooks unos a otros
            - se usa un estado y cada vez que use su set asociado se recarga de nuevo el componente.

        - El render inicial inicializa productos a un array vacio
        - El useEffect resuelva la ascincronía del useEffect asignando de nuevo los productos y recargando de nuevo el componente
        - En la siguiente pasada el use efect no se recarga porque no se actualiza el concepto
        - Si se recargará el useMemo porque depende de productos y calcula el total      
        
    - APLIQUE ESTOS CONOCIMIENTOS AL FORMULARIOEDITARACTUACIONTECNICO.JSX DEL PROYECTO GESTOR DE ACTUACIONES

*/

const MyComponent = ({numeroFactura}) => {

    const [productos, setProductos] = useState([]) //Inicializamos en array vacío

    // Se pone un watch a numeroFactura y se hace un fetch para recuperar los items de una factura
    useEffect(() => {
        // const response = await getCantidadDe(concepto)
        const response = getCantidadDe(concepto);
        setProductos(response.productos)
    }, [concepto]);

    // Esto es un valor computado que te dice el importe total de tu factura
    const total = useMemo(() => {

        //Mejor un reduce pero si no estás familiarizado se entiende mejor así
        let acc = 0;
        productos.forEach(producto => acc += producto.precio)
        return acc;

    }, [productos]);

    return `La factura ${numeroFactura} tiene un importe total de ${total}`
}