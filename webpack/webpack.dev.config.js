var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [
		path.join(parentDir, 'src/index.js')
	],
	module: {
		loaders: [{
			test: /(\.js|\.jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	  },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
	},
    devServer: {
        contentBase: parentDir + '/src',
        historyApiFallback: true
    }
}