const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const generateHtmlPlugins = require('./helpers/generateHtmlPlugins');

/**
 * Получает root директорию проекта.
 * @type {string}
 */
const projectRootDir = process.cwd();
/**
 * Текущая версия проекта из package.json
 * @type {string}
 */
const version = require('../package.json').version;
/**
 * Кастомный title для сайта
 * @type {string}
 */
const title = 'Create HTML Boilerplate';
/**
 * Директория с шаблонами
 * @type {string}
 */
const templatesPath = path.join(projectRootDir, 'source', 'html', 'views');
/**
 * Базовый конфиг для сайта
 * templatesPath – путь для HTML шаблонов (обязательный параметр)
 * options – любые данные которые необходимы в шаблоне (опциональный параметр)
 * @type {{templatesPath: string, options: {[key]: string | number | any }}}
 */
const config = {
  templatesPath,
  options: {
    version,
    title,
  },
};
/**
 * Определяет в каком режиме работает сборка – девелопмент или продакшн.
 * @type {boolean}
 */
const isProd = process.argv.mode === 'production';
const htmlPlugins = generateHtmlPlugins(config);

module.exports = {
  resolve: {
    alias: {
      source: path.join('..', 'source'),
    },
  },
  mode: isProd ? 'production' : 'development',
  entry: {
    bundle: './source/js/index.js',
    libs: ['picturefill'],
    style: './source/scss/style.scss',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 9001,
    hot: true,
    compress: true,
    watchFiles: ['source/**'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, '../source/html/includes'),
        use: ['raw-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new SpriteLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        /* Копируем шрифты */
        {
          from: 'source/fonts',
          to: './fonts',
        },
        /* Копируем изображения */
        {
          from: 'source/img',
          to: './img',
        },
        /* Копируем внешние библиотеки */
        {
          from: 'source/vendors',
          to: './vendors',
        },
        /* Копируем файлы, которые необходимы нам в корне проекта */
        {
          from: 'source/root',
          to: './',
        },
      ],
    }),
    new ImageminPlugin({
      test: 'source/img/**',
      optimizationLevel: 3,
      progressive: true,
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 85,
          },
        },
      ],
      overrideExtension: true,
      detailedLogs: false,
      silent: false,
      strict: true,
    }),
  ].concat(htmlPlugins),
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../build'),
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: isProd
      ? [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
          }),
        ]
      : [],
  },
};
