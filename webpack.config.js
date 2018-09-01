var config = { 
    entry: './app/index.js', 
   
    output: { 
       path: __dirname + "/", 
       filename: 'index.js', 
    }, 
    devServer: { 
       inline: true, 
       port: 5050,
       historyApiFallback: true 
    }, 
    module: { 
        loaders: [ 
           { 
              test: /\.js?$/, 
              exclude: /node_modules/, 
              loader: 'babel-loader', 
       
              query: { 
                 presets: ['es2015', 'react'] 
              } 
           } 
        ] 
     } 
  } 
  module.exports = config;