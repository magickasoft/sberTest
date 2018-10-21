const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const _ = require('lodash');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const VersionPlugin = require('./webpack.version.js');
const pckg = require('./package.json');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const plugins = [
  new HappyPack({
    id: 'js',
    verbose: false,
    threads: 4,
    loaders: ['babel-loader'],
  }),

  new HappyPack({
    id: 'styles',
    verbose: false,
    threads: 2,
    loaders: ['style-loader', 'raw-loader', 'less-loader'],
  }),

  new HappyPack({
    id: 'modules',
    verbose: false,
    threads: 2,
    loaders: [
      {
        loader: 'style-loader',
        options: { sourceMap: !isProd },
      },
      {
        loader: 'css-loader',
        options: {
            sourceMap: !isProd,
        },
      },
      {
        loader: 'postcss-loader',
        options: { sourceMap: !isProd },
      },
      {
        loader: 'less-loader',
        options: { sourceMap: !isProd },
      },
    ],
  }),

  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: JSON.stringify(nodeEnv),
          VER: JSON.stringify(pckg.version),
      },
  }),

  // new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     minChunks: ({ resource }) =>
  //         resource &&
  //         /node_modules/.test(resource) &&
  //         !/antd/.test(resource),
  //     filename: 'vendor.bundle.js',
  // }),

  new webpack.NamedModulesPlugin(),
  new VersionPlugin({ ver: pckg.version }),
  new ProgressBarPlugin(),
];

if (isProd) {
  plugins.push(new UglifyJsPlugin({ parallel: true, uglifyOptions: { compress: { warnings: false } } }))
} else {
  plugins.push(new webpack.SourceMapDevToolPlugin());
  plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
}

const entry = isProd
  ? ['babel-polyfill', './src/index.js']
  : [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      './src/index.js',
  ];

const modulePaths = {
  config: './config',
  assets: './src/assets',
  components: './src/components',
  containers: './src/containers',
  helpers: './src/helpers',
  actions: './src/redux/actions',
  reducers: './src/redux/reducers',
  routes: './src/routes',
  store: './src/redux/store',
  utils: './src/utils'
};

const localGlobalStylesReg = /styles[\\\/][^]+.(css|less)/;

const noCssModulesStylePaths = modulePath =>
    localGlobalStylesReg.test(modulePath) || /antd/.test(modulePath);


module.exports = {

  mode: isProd ? 'production' : 'development',

  entry: {
    entry,
  },

  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]|[\\!/]antd[\\/]/,
          name: 'vendor',
          filename: 'vendor.bundle.js',
          chunks: 'all'
        }
      }
    }
  },

  resolve: {
    extensions: ['.js', '.scss', '.less'],
    alias: _.mapValues(modulePaths, str =>
      path.join(process.cwd(), ...str.split('/'))
    ),
  },

  plugins,

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: __dirname,
        exclude: /node_modules/,
        use: ['happypack/loader?id=js'],
      },
      {
        test: /\.(css|less)$/,
        exclude: noCssModulesStylePaths,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: !isProd },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[folder]__[local]--[hash:base64:5]',
              importLoaders: 2,
              sourceMap: !isProd,
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: !isProd },
          },
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'src/styles')],
              sourceMap: !isProd,
              javascriptEnabled: true
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        include: noCssModulesStylePaths,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: !isProd },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
            },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: !isProd },
          },
          {
            loader: 'less-loader',
            options: { sourceMap: !isProd, javascriptEnabled: true },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ]
  }
};
