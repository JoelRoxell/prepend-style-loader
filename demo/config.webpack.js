const path = require('path');

module.exports = {
  entry: './demo/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./demo/build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              camelCase: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            },
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'prepend-style-loader',
            options: {
              prepend: [
                path.resolve('demo/global/variables'),
                path.resolve('demo/global/mixins')
              ]
            }
          }
        ]
      },
      {
        test: /\.styl/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              camelCase: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            },
          },
          {
            loader: 'stylus-loader'
          },
          {
            loader: 'prepend-style-loader',
            options: {
              prepend: path.resolve('./demo/global/variables.styl')
            }
          }
        ]
      }
    ]
  }
};
