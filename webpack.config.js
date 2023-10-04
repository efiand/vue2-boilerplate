import CopyPlugin from 'copy-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import CssMqpackerPlugin from 'css-mqpacker-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const baseConfig = {
	devServer: {
		historyApiFallback: true
	},

	entry: './src/main.js',

	optimization: {
		minimizer: [new CssMinimizerPlugin(), new CssMqpackerPlugin(), new TerserPlugin()]
	},

	output: {
		clean: true,
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist')
	},

	plugins: [
		new HtmlPlugin({
			template: 'src/index.html'
		}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].bundle.css'
		}),
		new CopyPlugin({
			patterns: [
				{
					context: 'public',
					from: '**/*'
				}
			]
		})
	],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	}
};

export default (env, argv) => {
	const { mode } = argv;
	const isDev = mode === 'development';

	const config = {
		...baseConfig,

		mode,

		module: {
			rules: [
				{
					loader: 'vue-loader',
					test: /\.vue$/,
					options: {
						prettify: false
					}
				},
				{
					loader: 'babel-loader',
					test: /\.js$/
				},
				{
					test: /\.css$/,
					use: [isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								additionalData: '@import "@/assets/scss/env.scss";'
							}
						}
					]
				}
			]
		}
	};

	return config;
};
