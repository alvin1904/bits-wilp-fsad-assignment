import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

export default {
  mode: "development",
  devServer: {
    port: 3000, // Shell runs on port 3000
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
      name: "shellApp",
      // The remotes object maps internal module names to the external remoteEntry URLs
      remotes: {
        fsadApp: "fsadApp@http://localhost:4001/remoteEntry.js",
        apiProducts: "apiProductsApp@http://localhost:4000/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.0.0" },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
