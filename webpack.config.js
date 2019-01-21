var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    target: 'web',
    mode: 'development',
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/index.js",
    output: {
        path: __dirname + "/js",
        filename: "scripts.min.js"
    }
};