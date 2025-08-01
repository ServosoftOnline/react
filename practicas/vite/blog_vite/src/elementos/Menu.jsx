/*
    ATENCIÓN A COMO APLICAMOS STYLED COMPONENT EN LA BARRA DE NAVEGACION DE AQUI:

        - App.js importará este elemento y lo aplicará allí
        - En App.js importé Navlink para usar react router. Y realicé los siguiente cambios:

            - Menú fué como llamé al componente que correspondía a la etiqueta nav
                - Por eso lo de const Menu = styled.nav 
            - Tuve que cambiar las etiquetas <a> por <Navlink>
                - Por eso los css los aplico a la etiqueta a
                    - text-decoration: none elimina el subrayado que por defecto se crea debajo 
                    - margin: 0 10px, separa los elementos del menu de forma horizontal
                    - La subclase hover hará que cambie el color cuando pase por encima con el raton
                    - La clase active la añade react router
                        - permite añadir la línea abajo de la pagina seleccionada y separarlo
                    - Combino la pseudo clase hover y la clase active

*/

import styled from "styled-components";

const Menu = styled.nav `
    a {
        text-decoration: none;
        color: #165168;
        margin: 0 10px;        
    }

    a:hover{
        color: #191668;
    }

    a.active {
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
    }
    
`;
export default Menu;