const path = require('path')

module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/client')
        ],
        loader: 'babel-loader'
      }
    ]
  }
}