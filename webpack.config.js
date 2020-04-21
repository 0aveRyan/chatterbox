const path = require( 'path' );
const wpScriptsConfig = require( '@wordpress/scripts/config/webpack.config' );
const merge = require( 'webpack-merge' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const FixStyleOnlyEntriesPlugin = require( 'webpack-fix-style-only-entries' );

const isProduction = process.env.NODE_ENV === 'production';

const chatterboxConfig = merge( wpScriptsConfig, {
	entry: {
		'chatterbox-editor': path.resolve( process.cwd(), 'src/editor.scss' ),
		'chatterbox-style': path.resolve( process.cwd(), 'src/style.scss' ),
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { url: false, sourceMap: ! isProduction },
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: ! isProduction },
					},
				],
			},
		],
	},
	plugins: [
		new FixStyleOnlyEntriesPlugin(),
		new MiniCssExtractPlugin( { filename: '[name].css' } ),
	],
} );

module.exports = chatterboxConfig;
