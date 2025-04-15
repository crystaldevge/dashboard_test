
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard_test',
            remotes: {
                marketing: 'reacttest@http://localhost:3001/remoteEntry.js',
                dashboard: 'angulartest@http://localhost:3002/remoteEntry.js',
                profile: 'vuetest@http://localhost:3003/remoteEntry.js',
            },
        })
    ],
};
