const path = require('path'); //nos permite trabajar con rutas de archivos y directorios en local o en la nube
const HtmlWebpackPlugin = require('html-webpack-plugin'); //nos permite trabajar con archivos html

module.exports = { // aqui se encuentra toda la configuracion de webpack
    entry: './src/index.js', //aqui se encuentra el codigo inicial y a partir de este se va a generar el archivo final
    output: { //aqui se encuentra el archivo final que se va a generar
        path: resolve(__dirname, 'dist'), //aqui se encuentra la carpeta donde se va a guardar el archivo final
        filename: 'main.js', //aqui se encuentra el nombre del archivo final
    },
    resolve: {
        extensions: ['.js'], //aqui se encuentra las extensiones de los archivos que vamos a utilizar
    },
    module: { //aqui se encuentra los modulos con las reglas necesarias que vamos a utilizar
        rules: [ //aqui se encuentra las reglas
            {
                test: /\.js?$/, //aqui se encuentra la expresion regular que nos permite identificar los archivos con los que vamos a trabajar
                exclude: /node_modules/, //aqui se encuentra la carpeta que vamos a excluir
                use: {
                    loader: 'babel-loader', //aqui se encuentra el loader que vamos a utilizar
                }
            }
        ]
    },
    plugins: [ //aqui se encuentra los plugins que vamos a utilizar
        new HtmlWebpackPlugin([ //permite trabajar con los archivos html
            {
            inject: true, //permite inyectar cualquier tipo de archivos
            template: './public/index.html', //aqui se encuentra la ruta del archivo
            filename: './index.html', //aqui se encuentra el nombre del archivo
            }
        ])
    ]
}