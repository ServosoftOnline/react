import React, { useState } from 'react';
import './App.css'
import * as XLSX from 'xlsx';

const App = ()=> {

  // Estado
  const [data, setData] = useState([]);

  // Función
  const handleFileUpload = (e) => {

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parseData = XLSX.utils.sheet_to_json(sheet);
      setData(parseData);
    }; 
  };


  return (
    <>      
      <h1>Importar un archivo excel</h1>
      <input 
        type="file"
        accept='.xlsx, xls'
        onChange={handleFileUpload} 
      />
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {
                // Me falla en la siguiente línea porque data no es un array. Es un objeto
                Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App
