const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.less'],
        modules: [
            __dirname,
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: __dirname,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: ["@babel/plugin-transform-react-jsx"]
                }
            },
            {
                test: /\.less$/,
                loader: 'less-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    // optimization: {
    //     minimize: true
    // }
};