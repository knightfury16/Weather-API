const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	mode:'production',
	entry:'./public/ts/index.ts',
	output:{
		filename:'bundle.js',
		path: path.join(__dirname,"./public/dist")
	},
	module: {
		rules:[
			{
				test:/\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve:{
		extensions:['.ts','.js']
	},
	devtool:'eval-source-map',
	plugins:[
		new CleanWebpackPlugin()
	]
}