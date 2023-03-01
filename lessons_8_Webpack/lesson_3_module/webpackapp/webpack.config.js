const { resolve } = require('path')
const HtmlWebpackPlagin = require('html-webpack-plugin')

module.export = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        path: resolve(__dirname, dist),
        filename: 'main.[contenthash].js'
    },
    module: {
        reles: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlagin({
            template: resolve(__dirname, 'src', 'index.html')
        })
    ]
}