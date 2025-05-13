
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');


const devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'main.[contenthash].js',
        publicPath: 'http://localhost:3005/',
    },
    devServer: {
        port: 3005,
        historyApiFallback: {
            historyApiFallback: true,
        },
        static: {
            directory: path.resolve(__dirname, '../build'), // ან build
        },
        open: true,
        hot: true,
        liveReload: true,
        compress: true,
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard_test',
            filename: 'remoteEntry.js',
            remotes: {
                react_test: 'react_test@http://localhost:3001/remoteEntry.js',
                angular_test: 'angular_test@http://localhost:4200/remoteEntry.js',
                vue_test: 'vue_test@http://localhost:4201/remoteEntry.js',
            },
            exposes: {
                './Message': './src/components/Message',
                './MessageElement': './src/components/MessageElement',
            },
            shared: packageJson.dependencies,
        })
    ],
};


module.exports = merge(commonConfig, devConfig);
