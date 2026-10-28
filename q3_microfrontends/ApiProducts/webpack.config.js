import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

export default {
  mode: "development",

  output: {
    publicPath: "auto",
  },

  devServer: {
    port: 4000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "apiProductsApp",
      filename: "remoteEntry.js",

      exposes: {
        "./Syllabus": "./src/Syllabus",
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: "^19.0.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^19.0.0",
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
