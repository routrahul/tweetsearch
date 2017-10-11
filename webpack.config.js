var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/client/app'
  ],
  output: {
    path: __dirname,
    filename: './dist/app.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval-source-map',
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/, //Check for all js files
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['babel-preset-react', 'babel-preset-stage-2']
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/, //Check for sass or scss file names
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.json$/,
        loader: "json-loader"  //JSON loader
      }
    ]
  }
};



