"use strict";
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require("path");
var webpack = require("webpack");

var isDevelopmentMode = process.env.NODE_ENV === "development";
var BUILD_DIR = path.resolve(__dirname, "build/");
var APP_DIR = path.resolve(__dirname, "src/");

var appEntry = [
  // js files
  "react-hot-loader/patch",
  // activate HMR for React

  "webpack-dev-server/client?http://localhost:3000",
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  "webpack/hot/only-dev-server",
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates

  APP_DIR + "/styles/global.scss",
  // scss files
  APP_DIR + "/scripts/index.jsx",
];

// allows splitting vendor modules
function isExternal(module) {
  var context = module.context;

  if (typeof context !== 'string') {
    return false;
  }

  // returns true if module's context includes node_modules
  return context.indexOf('node_modules') !== -1;
}


var config = {
  entry: {
    app: appEntry
  },

  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: "/build/"
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: "inline-source-map",
  // enable source maps

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ["awesome-typescript-loader"],
        include: APP_DIR,
        exclude: /node_modules/
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["es2015", { modules: false }],
                // webpack understands the native import syntax, and uses it for tree shaking
                // https://webpack.js.org/guides/hmr-react/#babel-config
                "stage-2",
                "react"
              ]
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader", // The css-loader interprets @import and url() like import/require() and will resolve them
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader", // Loads a SASS/SCSS file and and compiles it to CSS
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          ],

          fallback: "style-loader" // Adds CSS to the DOM by injecting a <style> tag
          // use style-loader when not extracting (for eg: in development)
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['build'], { verbose: true }),
    // clean build directory

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.bundle.js",
      minChunks: function (module) {
        return isExternal(module);
      }
    }),
    // code splitting for vendor

    new ExtractTextPlugin({
      filename: "bundle.css",
      disable: true
    }),
  ],

  devServer: {
    host: "localhost",
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true
    // enable HMR on the server
  },

  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
    alias: {
      resources: path.resolve(APP_DIR, "resources")
    }
  }
};

module.exports = config;
