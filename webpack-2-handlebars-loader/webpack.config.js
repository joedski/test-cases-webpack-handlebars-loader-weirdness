const path = require('path')

module.exports = env => ({
  context: path.resolve(__dirname),

  entry: './src/entry.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.mjsx', '.json', '.coffee', '.handlebars', '.hbs'],
  },

  module: {
    rules: [
      {
        test: /\.(hbs|handlebars)$/,
        loader: 'handlebars-loader',
      },
    ],
  },
})
