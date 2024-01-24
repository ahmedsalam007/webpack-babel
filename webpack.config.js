const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        main: {
            import:'./src/index.js',
            dependOn: 'math' 
        },
        math: './src/math.js',
        advanced: './src/advanced.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'My output',
            template: './index.html'
        })
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
            test: /\.css$/i,
            use:['style-loader', 'css-loader']
            },
            {
                test:/\.m?js$/i,
                exclude:'/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    optimization: {
        runtimeChunk:'single',
        splitChunks: {
            chunks: 'all'
        }
    }
}