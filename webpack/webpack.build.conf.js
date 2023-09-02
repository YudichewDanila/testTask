const {merge} = require('webpack-merge')
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf.js');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
}
const buildWebpackConfig = merge(baseWebpackConfig, {
  externals:{
    paths:PATHS
},
  mode: 'production',

  module: {
    rules:[
    {
    test:/\.js$/, 
    loader:'babel-loader',
  //  exclude: '/node_modules/'//Исключения чтобы babel не обрабатывал node modules
    },
    {
    test: /\.s[ac]ss$/i,
    use:[ 
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',  
          },{
            loader: 'sass-loader',
          }
        ]
    },
    
   
    {
        test: /\.css$/i,
        use: [  
            MiniCssExtractPlugin.loader,
            'css-loader'  
        ],
    },
    ]
},
plugins: [
  new MiniCssExtractPlugin({
  filename:'app.css', 
})
]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})