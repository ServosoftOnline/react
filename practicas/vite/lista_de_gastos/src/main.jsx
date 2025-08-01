/*
  APLICACION DE GASTOS.

    - DESCRIPCION DE LA APLICACION:
      - Aplicación mas completa del curso.
      - Empiezo su desarrollo el dia 8 de enero de 2024. La finalizo el 2 de marzo de 2024.
      - Permite:
        - Crearse un usuario en la base de datos
        - Acceder con ese usuario a la base de datos
        - Añadir, editar o borrar un gasto
        - Muestra los siguientes informres:
          - Todos los gastos realizados por el usuario
          - Todos los gastos realizados por el usuario durante el mes actual divididos en categorias
          - Una barra que muestra el total de los gastos realizados durante el mes actual

      - El front lo hice con react y el backend mediante firebase:    
        - Descrbí las tareas de instalacion de las librerias y configuracion de firebase en instalacion.txt
        
        - Con respecto al front usé las siguientes librerias y/o aplicaciones:
          - react router
          - styled components
          - Context API, para crear los contextos
          - webfontloader, que permite instalar fuentes de google fonts
          - react helmet, que permite entre otras cosas definir el favicon
          - Las ondas del fondo las cree mediante https://getwaves.io/. Fondo.jsx describe como hacerlo
          - react dayPicker para hacer el calendario donde se selecciona la fecha
          - date-fns que permitíra trabajar con fechas

        - Con respecto al backend
          - Usaré un conjuntos de servicios de google llamado firebase.
            - El proyecto:
              - Se llama lista-de-gastos y Está asociado a mi cuenta oscarfernandezsantiago@gmail.com
              - Para su instalacion y vinculacion con la app sigo las instruciones que deje en -env.Local
                - Que permite ocultar el acceso a firebase mediante vbles de ambiente        
              - No habilito google analytics. Al menos por ahora
              - Las reglas de seguridad al inicarla las pongo de prueba.
                - Una vez acabada la aplicacion hay que ponerlas más duras para evitar que accedan al

            - Servicios usados:
              - Authentification permite gestionar los usarios creados desde la app
              - Firestore contiene las colecciones y documentos de la base de datos creados desde la app
                - Cuando inicio la aplicacion y configuro firestore debo crear unas reglas de seguridad-
                - Al principio serán reglas de prueba
                - Una vez acabada la aplicación debo ponerlas más seguras para hacerla privada
              - Hosting me permite subir la app


    - PASOS PARA REALIZÉ PARA CREAR ESTA APP. SE PUEDE APLICAR A OTRAS APLICACIONES:

      1.- Crear las rutas
        1.1.- Crear el elemento contenedor que contendrá a la app
        1.2.- Creo los componentes que contendrán a cada pagina
        1.3.- Importar la fuente de google fonts que valla a usar
        1.4.- Importar BrowserRouter, Route, Routes para usar react router
        1.5.- Encierro todo en BrowserRouter

        1.6.- Creo cada una de las rutas englobadas en Routes
          - Las rutas tendrán el path que será la web que debe escribirse en el navegador y cargará el componente asociado
          - Creo si hubiera alguna ruta dinámica
          - Creo la ruta para el error 404 si pusieran una web inexistente en el navegador
          - Creo la ruta para el directorio raiz. En este caso el componente ppal

        1.7.- Pruebo cada una de las rutas escribiendolas en el navegador y viendo si se carga el componente adecuado

      2.- Creo el favicon y el titulo
      3.- Añado el fondo
      4.- Creo el archivo llamado theme.jsx. Contiene un objeto con las vbles con todos los colores.
      5.- Creo las cabeceras y crear los desplazamientos entre ellas

        5.1.- Creo un archivo llamado ElementosDeHeader
          - Contendrá todos los elementos que usaré en las cabeceras.
          - Los exportaré por separado
          - Importaré solo lo que necesite

        5.2.- Creo el elemento Boton.jsx.
          - Lo usaré para crear los diferentes botones de la aplicacion
          - Le aplicaré el componente Link de react router. lo que permitirá desplazarse hacia la ruta que le indique al llamarlo

          - Tendrá las siguientes propiedades:
            - primario. Tendrá el color primario asignado en theme.jsx. Si no le indico primario lo pintará en negro
            - conIcono. El icono será mas ancho
            - iconoGrande. Contendrá un svg

        5.3.- Creo el elemento BrnRegresar.jsx. Permite regresar a la ruta raiz
        5.4.- Al crear todas las cabeceras de las paginas iré añadiendo los estilos de header, los botones y el boton para regresar
      
      6.- Crear las secciones para iniciar sesion y registrarse         
        6.1.- Creo el elemento llamado ElementosDeFormulario.jsx. Contendrá todos los elementos que usaré en los formularios

        6.2.- Creo la pagina para crear una cuenta en firebase
          - Su elemento asociado al que apunta su ruta se llama RegistroUsuarios.jsx
          - La cabecera contendrá el titulo y un enlace hacia la pagina /iniciar-sesion
            - Usaré elementosDeHeader para crearla
            - Para el botón Iniciar Sesión usaré el elemento Boton.jsx como link. le pasaré la propiedad de primario

          - Usaré una imagen svg que crearé como componente.
          - El formulario que permitirá crear la cuenta en firebase
            - Usaré elementosDeFormulario.jsx para crear los inputos
            - Usaré Boton.jsx como button de submit

          - Creo la logica para crear un usuario en firebase

        6.3.- Creo la pagina para iniciar sesion
          - Su elemento asociado al que apunta su ruta se llama InicioSesion.jsx
          - La cabecera contendrá el titulo y un enlace hacia la pagina /crear-cuenta
          - Tendrá prácticamente la misma estructura que RegistroUsuarios.jsx

      7.- Crear el proyecto en firebase
      
        - Sigo las indicaciones de:
          - instalacion.txt
          - contactosFirebase/.env.local
          - contactosFirebase/src/firebase/firebaseConfig

      8.- Creo la funcionalidad para crear una cuenta en authentification de firebase
        8.1.- Configuro el servicio de authentificación desde la consola de firebase

        8.2.- Agrego la funcionalidad al componente RegistroUsuarios.jsx
          - Agrego los values y onChange al formulario
          - Para definir los values añado un estado para cada input y le asigno su valor.
          - las funciones que se ejecutarán cuando se ejecute el onChange la llamaré handleChange
          - Defino la funcion handleChange. Dependiendo del nombre del input cambiará el estado correspondiente
          - Indico en la etiqueta del formulario que cuando se haga un onSubmit se ejecute la funcion handleSubmit

          - Defino la funcion handleSubmit
            - valido los campos. Sería recomendable validarlos tambien en el lado del servidor
            - Si pasa la validación agrego el usuario en firestore
            - firestore realiza validaciones en el lado del servidor
              - Debo obtener esos errores, los traduzco a mensajes en español que por ahora mostraré en consola
            - Cuando acaben las validaciones del servidor y añada el usuario correctamente redirijo hacia App.jsx y añado gastos
            
          - Defino el componente de alertas
            - Las alertas del curso las ví muy complicadas y no me gustaba su resultado
            - En su lugar definí otro componente llamado Mensaje.jsx donde muestro mensajes de error o correctos, rojos o verdes
            - Componente que evitará tener que mostrar los mensajes en consola y siendo mostrados en pantalla.

      9.- Creo la funcionalidad para iniciar sesion en authentification de firebase
        - Es muy parecido a la funcionalidad de crear una cuenta
        - Seguiré las mismas instrucciones
        - En lugar de crear un usuario debo iniciar la sesión y la validacion del servidor cambia. 
        
      10.- Creo la funcionalidad para que sea obligatorio crear un usuario o iniciar sesión para añadir gastos
        - Si alguien modificara la barra de navegacion y accediera a la raiz o a cualquier otra ruta podría usar la aplicacion
        - Lo soluciono creando un estado global o contexto llamado AuthContext.jsx
          - Este tendrá la información sobre si se ha iniciado sesion o no.
          - Importo el proveedor del estado en main.jsx y englobo a la aplicación dentro de él
          - LLamaré al contexto en cada componente donde comprobaré si se inicio o no sesión antes de realizar operaciones sensibles
        
      11.- Abrego botón para cerrar la sesión y creo su funcionalidad
        - Lo mostraré en App.jsx
        - El elemento que lo define será BotonCerrarSesion.jsx
        - Su funcionalidad será la de cerrar la sesión en firebase y regresar al componente de inicioSesion.jsx

      12.- Creo la lógica para que si no se inició sesion solo se pueda entrar a inicar sesion o crear cuenta
        - Crearé el componente RutaPrivada.jsx
        - Modifico el archivo donde tengo las rutas que hasta ahora eran todas publicas
          - Es el archivo donde me encuentro ahora mismo main.jsx 
          - Añado rutas privadas, cambiando la estructura y usando el componente creado anteriormente.
          - Las rutas públicas se quedan como estaban.
        - Pruebo las rutas. Solo podré acceder a las rutas privadas si inicié la sesion

      13.- Añado al componente ppal el interfaz para añadir gastos
        - Creo el formulario que viene abajo y dejo espacio para el select y el daypicker (FormularioGasto.jsx)
        - Este formulario permitirá añadir gastos o editar un gasto obtenido desde lista de gastos
          - Si le pasé un gasto como propiedad hará la funcionalidad de editar un gasto
          - En caso contrario hará la funcionalidad de añadir un gasto
          - El botón mostrará añadir un gasto o editar un gasto en cada caso

        13.1.- Creo el select con las diferentes categorias de gastos
              - Creo los diferentes elementos que contendrán los estilos del select (ElementosDeSelect.jsx)
              - Creo un elemento para los iconos que estarán juntos a las categorias. (iconoCategorias.jsx)
              - Creo el componente donde importo los estilos (SelectCategorias.jsx)
              - Inserto el componente en FormularioGasto.jsx

        13.2.- Creo el daypicker
          - Es un calendario el cual me permite seleccionar el dia que se produce el gasto
          - Usare un componente externo de react llamado DayPicker para crear el calendario
          
      14.- Creo la funcionalidad del boton de añadir gastos
        - Creo una base de datos mediante firestore en el proyecto de firebase
        - Hasta ahora solo había usado el servicio de authentification
        - Creo el archivo agregarGasto.jsx en la carpeta de firebase
          - Agregará la categoría del gasto, la fecha, la descripción y el importe

      15.- Creo la barra verde de abajo donde se indica el total gastado en el mes
        - La contendrá el componente BarraTotalGastado.jsx
        - Lo llamaré desde los componentes FormularioGastos.jsx, ListaDeGastos.jsx y GastosPorCategoria.jsx
        - Creo la funcion convertirAMoneda.jsx para mostrar el total en euros
        - Por ahora dejaré el total a 0

      16.- Finalizo el componente ListaDeGastos.jsx
        - Creo el hook useObtenerGastos.jsx para realizar una consulta con los gastos del usuario actual
        - Creo el archivo elementosDelista.jsx que contendrá todos los elementos que usaré en el componente listaDeGastos.jsx
        - Creo la lógica del botón que carga más gastos. Los hará de 10 en 10
          - Para ello modifico el hook useObtenerGastos.jsx y el componente listaDeGastos.jsx

        - Creo la funcionalidad para eliminar gastos de la lista
          - El componente se llama BorrarGasto.jsx
          - Creo una ruta dinámica hacia BorrarGasto.jsx, le paso el id del gasto por la barra de direccion
          - Creo el hook llamado useObtenerUnGasto.jsx que obtendrá el gasto a partir de ese id
          - llamo al hook desde el componente y mostraré los resultados
          - Creo un botón para confirmar eliminar el gasto
            - Si lo pulsa llamará a una función que llamará a /firebase/eliminarGasto
            - Gestionará la promesa modificando el mensaje a mostrar con la validacion      

        - Creo la funcionalidad para editar un gasto
          - El componente se llama EditarGastos
          - Uso el hook useObtenerUnGasto.jsx creado en el paso anterior
          - importo el componente FormularioGasto y paso el resultado del hook como propiedad

      17.- Establezco las reglas de seguridad en el proyecto en firebase
        - Las reglas iniciales de prueba solo indicaban que podíamos acceder a todas las colecciones hasta una fecha dada
        - Ahora tengo que indicar que solo accederán los usuarios registrados
        - Ir a firebase/firestore/reglas y dejaré las reglas comentadas

      18.- Subo la aplicacion mediante el servicio de hosting

*/

// React y react router
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Helmet
import {Helmet, HelmetProvider} from 'react-helmet-async';
import favicon from './assets/logo.png';

// Elementos
import Fondo from './elementos/Fondo.jsx';
import Contenedor from "./elementos/Contenedor";

// Componentes
import BorrarGasto from './componentes/BorrarGasto.jsx';
import EditarGastos from './componentes/EditarGastos.jsx';
import GastosPorCategoria from './componentes/GastosPorCategoria.jsx';
import InicioSesion from './componentes/InicioSesion.jsx';
import ListaDeGastos from './componentes/ListaDeGastos.jsx';
import RegistroUsuarios from './componentes/RegistroUsuarios.jsx';
import Error404 from './componentes/Error404.jsx';
import RutaPrivada from './componentes/RutaPrivada.jsx';

// Contextos
import { AuthProvider } from './contextos/AuthContext.jsx';
import {ProveedorMensaje} from './contextos/contextoMensaje.jsx';
import { ProveedorTotalGastadoEnElMes } from './contextos/TotalGastadoEnElMes.jsx';

// WebFontLoader. Descarga fuente de google fonts
import WebFont from 'webfontloader';
WebFont.load({
  google: {
  families: ['Work Sans:400,500,700', 'sans-serif']
}
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

      {/* Helmet */}
      <Helmet>
        <title>Gastos</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      </Helmet>

      {/* Fondo */}
      <Fondo/>
      
      {/* Contexto */}
      <AuthProvider>
        <ProveedorTotalGastadoEnElMes>
          <ProveedorMensaje>      

            {/* React router */}
            <BrowserRouter>
              <Contenedor>
                <Routes>

                  {/* Rutas públicas */}
                    <Route path='/iniciar-sesion' element={<InicioSesion />} />
                    <Route path='/crear-cuenta' element={<RegistroUsuarios />} />
                    <Route path='*' element={<Error404 />} />

                  {/* Rutas privadas */}
                    <Route path='/categorias' element={
                      <RutaPrivada path='/categorias'>
                          <GastosPorCategoria />
                      </RutaPrivada>                  
                    }/>

                    <Route path='/lista' element={
                      <RutaPrivada path='/lista'>
                          <ListaDeGastos />
                      </RutaPrivada>                  
                    }/>

                    {/* En el path de editar le pasaré un id */}
                    <Route path='/editar/:id' element={
                      <RutaPrivada path='/editar/:id'>
                          <EditarGastos />
                      </RutaPrivada>                  
                    }/>

                    {/* En el path de borrar le pasaré un id */}
                    <Route path='/borrar/:id' element={
                      <RutaPrivada path='/borrar/:id'>
                          <BorrarGasto />
                      </RutaPrivada>                  
                    }/>
                                  
                    {/* La ruta cuyo path sea la raiz cargaré el componente ppal */}
                    <Route path='/' element={
                      <RutaPrivada path='/'>
                          <App />
                      </RutaPrivada>                  
                    }/>

                </Routes>            
              </Contenedor>
            </BrowserRouter>

      
          </ProveedorMensaje>
        </ProveedorTotalGastadoEnElMes>
      </AuthProvider>
      
    </HelmetProvider>
  </React.StrictMode>
);