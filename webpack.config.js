var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./lib/index.d.ts",
    output: {
        path: "dist/",
        filename: "bundle.js"
    },
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        // Two lines below fix dependency resolution when npm linking the component.
        fallback: path.join(__dirname, "node_modules")
    },
    resolveLoader: {fallback: path.join(__dirname, "node_modules")},

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    noParse: [
        path.join(__dirname, 'node_modules', 'zone.js', 'dist')
    ],
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ]
};
