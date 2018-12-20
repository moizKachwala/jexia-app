const path = require('path');
const webpack = require('webpack');
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const cssFilename = 'static/css/[name].[contenthash:8].css';

export default {
  bail: true,
  devtool: shouldUseSourceMap ? 'source-map' : false,
  entry: ['./src/index.js'],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
      favicon: './src/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        comparisons: false,
      },
      mangle: {
        safari10: true,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: shouldUseSourceMap,
    }),

    new ExtractTextPlugin({
      filename: cssFilename,
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
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
              
              compact: true,
            },
          },
          {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
              Object.assign(
                {
                  fallback: {
                    loader: require.resolve('style-loader'),
                    options: {
                      hmr: false,
                    },
                  },
                  use: [
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: shouldUseSourceMap,
                      },
                    },
                    {
                      loader: require.resolve('postcss-loader'),
                      options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                          autoprefixer({
                            browsers: [
                              '>1%',
                              'last 4 versions',
                              'Firefox ESR',
                              'not ie < 9', // React doesn't support IE8 anyway
                            ],
                            flexbox: 'no-2009',
                          }),
                        ],
                      },
                    },
                    {
                      loader: require.resolve('sass-loader'),
                    },
                  ],
                },
              )
            ),
          },
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
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
};
