import webpack from 'webpack';
import path from 'path';

export default {
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'public/'
  },
  module: {
    loaders: [
      // Used for compiling ES2015 JavaScript
      { test: /\.js/, loader: 'babel' },
      // Used for Bootstrap Less Source Files
      { test: /\.less/, loader: 'style!css!less' },
      // Used for Bootstrap Less Source Files
      { test: /\.css/, loader: 'style!css' },
      // Used for Bootstrap Glyphicon Fonts
      { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file' }
    ]
  }
};
