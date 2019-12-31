const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template:  path.resolve('./index.html'),
        })
    ]
};
