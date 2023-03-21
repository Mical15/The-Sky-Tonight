var path = require("path");
const { mode } = require("webpack-nano/argv");
const { WebpackPluginServe } = require("webpack-plugin-serve");
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(process.cwd(), "/client/dist");

module.exports = {
  mode: mode || "development",
  watch: mode === "development",
  entry: [`${SRC_DIR}/index.jsx`, "webpack-plugin-serve/client"],
  output: {
    path: DIST_DIR,
    // publicPath: "/dist",
  },
  plugins: [
    new MiniHtmlWebpackPlugin({
      context: {
        title: "The Sky Tonight",
        body: `<div id="root"></div>`,
        // publicPath: "/client/dist",
      },
    }),
    new WebpackPluginServe({
      port: parseInt(process.env.PORT, 10) || 3000,
      static: DIST_DIR,
      liveReload: true,
      waitForBuild: true,
      client: {
        address: `localhost:${process.env.PORT || 3000}`,
        // host: `localhost:${process.env.PORT || 3000}`,
      },
      middleware: (app, builtins) => {
        app.use(builtins.proxy('/api', {target:'http://localhost:3000'}))
      }
      // address: `localhost:${process.env.PORT || 3000}`,
      // host: `http://localhost:${process.env.PORT || 3000}`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
};
