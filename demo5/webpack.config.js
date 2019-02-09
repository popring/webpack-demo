const path = require('path');

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        publicPath: __dirname + '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader/useable", "css-loader"] // 注意style-loader 后有 useable
            }
        ]
    }
}