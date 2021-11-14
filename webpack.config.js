// IMPORTANT !!! down in the BrowserSyncPlugin plugin options, change proxy to match your local site host
// then when you do: npm run watch, the new localhost:3000 window will open with live reload as you save files.
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const path = require('path'); 

module.exports = {
  // for multiple entries
  /* entry: {
    index: './src/index.js',
    someOtherFile: './src/someOtherFile.js',
  }, */ 

  // comment out mode: 'development', to run webpack in the default production mode 
  mode: 'development', 
  // single entry
  entry: './src/index.js',
  devtool: 'inline-source-map', // debugging /creates source map to individual files
  devServer: {
    static: './dist',
  },
  output: {
    // for multiple outputs
    // filename: '[name].bundle.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //resolves the absolute path to the folder in which this file lives / needs to be required on the top/ const path = require('path');
    clean: true, // cleans up unused files when pushed to output
  },
  module: {
    rules: [
      { 
        test: /\.s[ac]ss$/i,
        //test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      new UglifyJsPlugin()
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new BrowserSyncPlugin({ // used to watch files
      files: '**/*', // watches all files
      proxy: 'https://moj-webdev-portfolio.local/' // change proxy to fit your local site hoast
    })
  ],
};
