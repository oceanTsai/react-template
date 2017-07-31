/**
 * @author
 * @name 
 * @class
 * @description webpack common config
 */

const path = require('path');
const utils = require('./utils');
const config = require('../config');

function resolve (dir) {
	return path.join(__dirname, '..', dir);
}

const publicPath = () => {
}

module.exports = {
	//進入點
	entry: {
		app: './src/main.js'
	},
	//輸出
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		modules: [
			resolve('src'),
			resolve('node_modules')
		],
		alias: {
			'src': resolve('src'),
			'assets': resolve('src/assets'),
			'@css': resolve('src/css'),
			'@components': resolve('src/components'),
			'@container': resolve('src/container'),
			'@routes': resolve('src/routes'),
			'@views': resolve('src/views'),
			'@redux': resolve('src/redux'),
			'@actions': resolve('src/redux/actions'),
			'@constants': resolve('src/redux/constants'),
			'@reducers': resolve('src/redux/reducers'),
			'@store': resolve('src/redux/store'),
			'@middlewares' : resolve('src/redux/middlewares'),
			'@history' : resolve('src/redux/history'),
			'@config' : resolve('src/config')
		}
	},
	module: {
		rules: [
			/*
			{
				
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [resolve('src'), resolve('test')],
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			},
			*/
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test')]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				query: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	}
};
