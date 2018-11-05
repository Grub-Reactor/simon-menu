const webpack = require('webpack');
const path = require('path');

module.exports = {
    // context: __dirname + '/client',
    entry: path.join(__dirname,'/client/index.js'),
    devtool: 'source-map',
    mode:'development',
    cache: true,
    module: {
        rules: [
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                },
            },
        ],
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    }
};