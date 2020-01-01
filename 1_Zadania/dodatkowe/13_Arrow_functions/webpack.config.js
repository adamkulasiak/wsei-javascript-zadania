module.exports = {
    entry: {
        app: [
            './js/app.js',
            './js/zadanie00.js', 
            './js/zadanie07.js', 
            './js/zadanie08.js',
            './js/zadanie09.js',
        ]
    },
    output: {
        path: `${__dirname}/js`,
        filename: 'out.js'
    },
    watch: false,
    mode: 'development',
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}