const webpack = require("webpack"),
    path = require("path");
    // ExtractTextPlugin = require("extract-text-webpack-plugin"),
    // HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR = "vendor";

const PUBLIC_DIR = "/",
    ROOT_DIR = path.resolve(__dirname, "../.."),
    DLL_DIR = path.resolve(__dirname, "../dll");

const webpackDllPlugin = {
    devtool: "source-map",
    entry: {
        [VENDOR]: ["react", "react-router", "react-dom", "react-addons", "redux", "react-redux", "redux-thunk", "redux-logger", "moment", "prop-types", "redux-devtools", "antd", "babel-polyfill"]
    },
    output: {
        publicPath: PUBLIC_DIR,
        filename: "[name].bundle.js",
        path: DLL_DIR,
        library: "[name]_[chunkhash]"
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DllPlugin({
            path: path.join(DLL_DIR, "[name]_manifest.dll.json"),
            name: "[name]_[chunkhash]",
            context: ROOT_DIR
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                unused: false,
                dead_code: false,
                warnings: true
            },
            comments: true
        })
    ]
};

module.exports = webpackDllPlugin;