module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        [
                            "env",
                            {
                                "targets": {
                                    "browsers": ["last 2 version"]
                                }
                            }
                        ]
                    ],
                    "plugins": ["transform-runtime"]
                }
            }
        }]
    }
}