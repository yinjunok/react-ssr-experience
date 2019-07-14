const path = require('path')
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, 'server-build'),
    filename: 'index.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader'
      }
    ]
  }
}
