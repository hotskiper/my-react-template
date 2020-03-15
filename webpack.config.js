const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlPlugin = new htmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {
    mode: 'development',
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{ loader: "style-loader" },
                {
                    loader: "css-loader",
                }]
            },
            {
                test: /\.scss$/,
                use: ["style-loader" ,
                 "css-loader",
                {
                    loader: "sass-loader",
                    // options: {
                    //     modules: {
                    //         localIdentName: "[path][name]-[local]-[hash:5]"
                    //     }
                    // }
                }]
            },
            {
                test: /\.ttf|woff|woff2|eot|svg$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], //后缀名可省略,
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
}