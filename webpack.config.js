const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	mode:'production',
	entry:'./public/js/app.js',
	output:{
		filename:'bundle.js',
		path: path.join(__dirname,"./public/dist")
	},
	devtool:'eval-source-map',
	plugins:[
		new CleanWebpackPlugin()
	]
}