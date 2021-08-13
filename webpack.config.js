const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = [
    {
        mode: 'development',
        entry: './server/index.js',
        target: 'node',
        externals: [nodeExternals()],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'server.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    use: 'babel-loader'
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        },
        plugins: [
            new WebpackShellPluginNext({
                onBuildEnd: {
                    scripts: ['nodemon --inspect ./dist/server.js --watch ./dist'],
                    blocking: false,
                    parallel: true
                }
            })
        ]
    },
    {
        mode: 'development',
        // Where files should be sent once they are bundled
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index.bundle.js'
        },
        devtool: 'source-map',
        // Rules of how webpack will take our files, complie & bundle them for the browser 
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /nodeModules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        },
        plugins: [
            new HtmlWebpackPlugin({ template: './src/index.html' })
        ],
    }];