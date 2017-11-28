var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/app/main.js')],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devtool : "source-map",
    devServer: {
        contentBase : path.resolve(__dirname, './dist'),
        inline: true,
        port: 8000
    },
    module: {
        loaders: [
            {test : /\.js$/,exclude : /(node_modules|bower_components)/,loader:"babel-loader?presets[]=es2015&presets[]=react"},
            {test : /\.css$/,loader:"style-loader!css-loader"},
            {test : /\.less$/,loader:"style-loader!css-loader!less-loader"}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            React : "react",
            $:"jquery"
        })
    ]
};