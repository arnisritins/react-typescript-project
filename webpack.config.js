module.exports = {
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'awesome-typescript-loader'
                }]
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
