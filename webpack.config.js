const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pahtBundle =path.resolve(__dirname, 'bundle')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[contenthash].js',
    path: pahtBundle,
    clean: true,
  },
  devServer: {
    static: pahtBundle,
  },
  mode:"development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template:'./src/index.html'
    }),
  ],

};