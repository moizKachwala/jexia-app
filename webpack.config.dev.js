import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {  
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    strictExportPresence: true,
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx|mjs)$/,
            include: path.join(__dirname, 'src'),
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.(scss)$/,
            use: [{
              loader: 'style-loader', // inject CSS to page
            }, {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins: function () { // post css plugins, can be exported to postcss.config.js
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            }, {
              loader: 'sass-loader' // compiles Sass to CSS
            }]
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ]
      }
    ]
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  }
};
