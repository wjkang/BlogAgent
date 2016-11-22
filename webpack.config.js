module.exports = {
    entry: {
        content:'./content.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                }
            }
        ]
    }
};