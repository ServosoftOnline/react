import './App.css'
import XlsxPopulate from 'xlsx-populate';





const App = () => {
  

  // Funciones
  const crearXlsx = ()=> {
    console.log('Creando archivo xlsx Hola Mundo!!');
    XlsxPopulate.fromBlankAsync()
    .then ((workbook)=> {
      workbook.sheet(0).cell('A1').value('Hola Mundo!!!');
      return workbook.toFileAsync('./salida.xlsx');
    })
  }

  return (
    <>      
      <h1>Uso de xlsx-populate</h1>
      <div className="card">

        <button onClick={crearXlsx}>
          Pulse para crear un archivo exel con Hola Mundo
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
