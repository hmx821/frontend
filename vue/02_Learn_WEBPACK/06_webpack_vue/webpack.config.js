const path = require('path');
const {
	CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	DefinePlugin
} = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
	// 设置模式
	// development 开发阶段，会设置development
	// production 准备打包上线的时候，设置production
	mode: "development",
	//设置source-map, 建立js映射文件，方便调试代码和错误
	devtool: "source-map",
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "js/bundle.js",
		// assetModuleFilename: "img/[name]_[hash:6][ext]"
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader"
				]
			},
			{
				test: /\.less$/,
				use: [
					"style-loader",
					"css-loader",
					"less-loader"
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				type: "asset",
				generator: {
					filename: "img/[name]_[hash:6][ext]"
				},
				parser: {
					dataUrlCondition: {
						maxSize: 100 * 1024
					}
				}
			},
			{
				test: /\.(eot|ttf|woff2?)$/,
				type: "asset/resource",
				generator: {
					filename: "font/[name]_[hash:6][ext]"
				}
			},
			{
				test: /\.js$/,
				loader: "babel-loader"
				
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			}
			// {
			// 	test: /\.js$/,
			// 	use: {
			// 		loader: "babel-loader",
			// 		options: {
			// 			// plugins: [
			// 			// 	"@babel/plugin-transform-arrow-functions",
			// 			// 	"@babel/plugin-transform-block-scoping"
			// 			// ]
			// 			presets: [
			// 				"@babel/preset-env"
			// 			]
			// 		}
			// 	}
			// }
		]

	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			title: "vue"
		}),
		new DefinePlugin({
			BASE_URL: "'./'",
			// 将vue3代码对vue2做适配，不需要就选false,打包后容量变小
			__VUE_OPTIONS_API__: true,
			// 是否在生产环境下保留devtools
			__VUE_PROD_DEVTOOLS__: false
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "public",
					to: "./",
					globOptions: {
						ignore: [
							"**/index.html"
						]
					}
				}
			]
		}),
		new VueLoaderPlugin()
	]
}
