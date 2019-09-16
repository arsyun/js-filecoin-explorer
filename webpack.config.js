var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/client/src/index',
    output: {
        path:path.join(__dirname + '/client/dist'),
        filename:'bundle.js',
    },

    module :{
        rules : [{
            test :/(\.jsx|\.js)$/,
            exclude : /node_modules/,
            loader :'babel-loader',
            options:{
                presets:[
                    "env", "react" 
                ]
            }
        },
        {
            test : /\.css$/,
            loader:'style-loader!css-loader'
        },
        {
            test: /\.less/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=8192'
　　　　 },
        {
            test:/\.svg/,
            loader:'svg-url-loader'
        }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/client/public/index.html"
        }),

        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        })
    ],
}