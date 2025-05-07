
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');


const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        publicPath: 'http://localhost:3005/',
    },
    devServer: {
        port: 3005,
        historyApiFallback: {
            historyApiFallback: true,
        },
        static: {
            directory: path.join(__dirname, 'build'), // ან build
        },
  
    },
    
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard_test',
            remotes: {
                react_test: 'react_test@http://localhost:3001/remoteEntry.js',
                angular_test: 'angular_test@http://localhost:4200/remoteEntry.js',
                vuetest: 'vuetest@http://localhost:4201/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        })
    ],
};


module.exports = merge(commonConfig, devConfig);
