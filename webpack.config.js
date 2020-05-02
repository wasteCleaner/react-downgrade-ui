const path = require('path');
const webpack = require('webpack');

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

const config = {
    mode: 'production',
    context: paths.src,
    entry: './index',
    output: {
        path: paths.dist,
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },

        ]
    },
};

module.exports = config;