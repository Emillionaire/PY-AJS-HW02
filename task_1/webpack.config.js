const path = require('path');
const HTMLWebpackPlugin  = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.txt$/,
                loader: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin ({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin()
    ],
    // resolve: {
    //     extensions: ['', '.js', '.css'] 
    // }
}