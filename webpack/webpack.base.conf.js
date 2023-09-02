const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const { VueLoaderPlugin } = require('vue-loader');
const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: path.join(__dirname,'../src/assets/'),
    dirdirector:path.join(__dirname, '../'),
}
module.exports = {

    externals:{
        paths:PATHS
    },

    entry:{
        app:PATHS.src,
    }, 

    output:{
        filename:'[name].js',
        path:PATHS.dist,
    },
      
    module: {
        rules: [
          {
            test:/\.vue$/, 
            loader:'vue-loader',
            options:{
              loader:{
                scss:'vue-style-loader!css-loader!sass-loader'
              }
            }
          },
          {
            test:/\.js$/, 
            loader:'babel-loader',
            exclude: '/node_modules/'
          },
        ],
      },

    plugins: [
    new HTMLWebpackPlugin({
        template:`${PATHS.src}/index.html`
    }),
  

    new VueLoaderPlugin(),
  
 
   

],
    
}