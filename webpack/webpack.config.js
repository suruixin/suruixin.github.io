var path = require('path');
var fs = require('fs');
let HtmlWebpackPlugin = require('html-webpack-plugin'); //用于生成html
let CleanWebpackPlugin = require('clean-webpack-plugin'); //用于清除dist文件夹
let webpack = require('webpack');

const config = {
	entry: { //入口文件
		vendor: ['jquery'],
		main: path.resolve(__dirname, "main.js"),
	},
	optimization: {
		runtimeChunk: {
			name: "vendor"
		},
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /node_modules/,
					name: "vendor",
					chunks: "all"
				}
			}
		}
	},
	mode: 'development', //模式  development:开发模式	production:生产模式
	output: { //出口
		path: path.resolve(__dirname, "dist"),
		filename: '[name].js',
		libraryTarget: "umd",
		library: 'main', //commin
	},
	externals: { //外部扩展    https://webpack.docschina.org/configuration/externals/#src/components/Sidebar/Sidebar.jsx
		//		jquery: "jQuery"
	},
	devServer: {
		//inline: true,
		HMR: true,
		publicPath: './dist/',
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({ //用于生成html
			title: '', //生成html的标题
			filename: 'index.html', //生成html的文件名
			template: './index.html' //指定你生成的文件所依赖哪一个html文件模板
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
	],
	module: { //模块
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
			},
		]
	}
}

module.exports = config;