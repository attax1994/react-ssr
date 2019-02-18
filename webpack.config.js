var path = require('path')

module.exports = {
  entry: {
    client: './src/client.js',
    bundle: './src/bundle.js',
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            },
          }
        ],
      },
      {
        test: /\.s?[ca]ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
}