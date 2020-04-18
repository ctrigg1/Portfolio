const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  {
        index: './src/my-ui/index.js',
        app: './src/my-ui/app.js',
        nasa: './src/my-ui/nasa.js',
        chat: './src/my-ui/chat.js',
        todo: './src/my-ui/todo.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'distro/'),
        filename: '[name].js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'distro/'),
        publicPath: "/",
    },
    module: {
      rules : [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(jpg|png)$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        chunks: ['index'],
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/chat.html',
        inject: 'true',
        chunks: ['chat'],
        filename: 'chat.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/app.html',
        inject: true,
        chunks: ['app'],
        filename: 'app.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/nasa.html',
        inject: true,
        chunks: ['nasa'],
        filename: 'nasa.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/todo.html',
        inject: true,
        chunks: ['todo'],
        filename: 'todo.html'
      }),
      new MiniCssExtractPlugin(),
    ],
};

