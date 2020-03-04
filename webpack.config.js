const path = require('path');

module.exports = {
    entry:  {
        index: './src/index.js',
        app: './src/my-ui/app.js',
        nasa: './src/my-ui/nasa.js',
        chat: './src/my-ui/chat-app.js',
        todo: './src/my-ui/todo.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'distro/assets'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'distro'),
        publicPath: "/assets/",
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
            use: ['style-loader', 'css-loader']
          },
        ]
    }
};

