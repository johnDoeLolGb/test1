const path = require ('path')
const ExtractTextPlugin = require ('mini-css-extract-plugin')
const HtmlPlugin = require ('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve (__dirname, 'src', 'index.js')
    },
    output: {
        path: path.resolve (__dirname, 'dist'),
        filename: 'bundle.js'
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
                use: [
                  {
                    loader: ExtractTextPlugin.loader,
                    options: {
                      publicPath: '../',
                      hmr: process.env.NODE_ENV === 'development',
                    },
                  },
                  'css-loader',
                ],
              }
        ]
    },
    plugins: [
        new ExtractTextPlugin ({filename: 'style.css'}),
        new HtmlPlugin ({
            template: path.resolve (__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
}