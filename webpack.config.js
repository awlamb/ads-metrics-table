var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './script.jsx',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'script.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react',"stage-1"]
				}
			}
			]
	}
};