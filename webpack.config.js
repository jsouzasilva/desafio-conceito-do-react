const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // Primeiro arquivo a ser chamado
  //Configurações de saída
  output: {
    path: path.resolve(__dirname, 'public'), //Diretório onde o arquivo transpilado será salvo.
    filename: 'bundle.js' //Nome do arquivo transpilado.
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
  },


  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }

        ]
      },
      {
        test:/.*\.(gif|png|jpeg|jpg)$/i,
        use:{
          loader:"file-loader"
        }

      }
    ]
  }
}