/*
  CONFIGURACION WEBPACK

    - El archivo ha sido obtenido desde la documentacion en el sitio:
      - https://webpack.js.org/guides/getting-started/#using-a-configuration
      - mode: 'development' tuve que añadirlo a posteriori
      - entry indica el archivo de entrada
      - output indica:
        - filename el nombre del archivo ya compilado con el resultado de la empaquetación
        - path es la ruta indicada en node.js donde creará la carpeta indicada, en este caso public, donde se almacenará el archivo.
        

*/

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }

};