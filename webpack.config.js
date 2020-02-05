const path = require('path');

module.exports = {
    entry:  {
        index: './src/index.js',
        // quiz: './src/my-ui/quiz.js',
        nasa: './src/my-ui/nasa.js',
        weather: './src/my-ui/weather.js',
        chat: './src/my-ui/chat-app.js'
    },
    output: {
        path: path.resolve(__dirname, 'distro/assets'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'distro'),
        publicPath: "/assets/", // here's the change
    },
    module: {
        rules : [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ["@babel/preset-env"]
                }
            },
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};

