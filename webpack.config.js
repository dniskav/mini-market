const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    context: __dirname,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: '/node_modules',
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                'style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
                ]
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
    ],
    devServer: {
        port: 3001,
        open: true,
    },
};
