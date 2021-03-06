let webpack = require('webpack');
let HtmlWebPackPlugin = require('html-webpack-plugin');
let path = require('path');
let PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: './src/app.js',
  watch:true,
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000
  },
  output: {
    path: __dirname + "/dist",
    filename: PROD ? 'bundle.min.js' : 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use:[
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              alias: {
                "../fonts/bootstrap": "bootstrap-sass/assets/fonts/bootstrap"
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                path.resolve("./node_modules/bootstrap-sass/assets/stylesheets")
              ],
              outputStyle: 'compressed'
            }
          }
        ]
      },
      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },*/
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        use: [{
          loader: "file-loader"
        }]
      }
    ]
  },
  plugins: PROD ?
    [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false,minimize: true }
      })
    ] : [
      new HtmlWebPackPlugin(
        {
          case1: 'TLH',
          case2: 'ALTI',
          case3: 'ALTIFY',
          footObj:'<div class="copy-zone">&copy; David Maser</div> <script> (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){ (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m) })(window,document,"script","https://www.google-analytics.com/analytics.js","ga"); ga("create", "UA-96990517-1", "auto"); ga("send", "pageview"); </script>',
          template:'assets/templates/main.html',
          inject:'head',
          cache:true,
          hash:true
        }
      ),
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery:'jquery'
      })
    ]
};