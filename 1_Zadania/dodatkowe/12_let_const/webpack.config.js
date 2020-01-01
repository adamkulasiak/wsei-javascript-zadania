module.exports = {
    entry: {
        app: [
            './js/app.js',
            './js/zadanie01.js', 
            './js/zadanie02.js', 
            './js/zadanie04.js',
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