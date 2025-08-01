import {useEffect, useState} from 'react';

const useObtenerArticulos = () => {
    const [articulos, establecerArticulos] = useState([]);
    const [cargando, establecerCargando] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            establecerArticulos([
                {
                    id: 1,
                    titulo: 'Título del primer artículo'
                },
                {
                    id: 2,
                    titulo: 'Título del segundo artículo'
                },
                {
                    id: 3,
                    titulo: 'Título del tercer artículo'
                }
            ]);
            
            establecerCargando(false);

        }, 3000);
    }, []);

    return [articulos, cargando];
}
 
export default useObtenerArticulos;