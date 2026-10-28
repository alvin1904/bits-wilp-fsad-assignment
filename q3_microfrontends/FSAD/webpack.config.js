import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

export default {
  mode: "development",

  devServer: {
    port: 4001,
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
      name: "fsadApp",
      filename: "remoteEntry.js",

      exposes: {
        "./Syllabus": "./src/Syllabus",
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.0.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.0.0",
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
