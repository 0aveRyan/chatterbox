<?php
/**
 * Plugin Name:     Chatterbox
 * Description:     Create chat threads using WordPress Blocks inside app and device wrappers. 
 * Version:         0.1.1
 * Author:          Dave Ryan
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     chatterbox
 *
 * @package         chatterbox
 */
namespace Chatterbox\Plugin;

function init() {
	$dir 		= __DIR__;
	$prefix 	= 'chatterbox';

	$script_asset_path = "$dir/build/index.asset.php";

	if ( ! file_exists( $script_asset_path ) ) {
		throw new \Error(
			'You need to run `npm start` or `npm run build` for the "create-block/chatterbox" block first.'
		);
	}

	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	\wp_register_script(
		"{$prefix}-block",
		\plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/chatterbox-editor.css';
	\wp_register_style(
		"{$prefix}-editor",
		\plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/chatterbox-style.css';
	\wp_register_style(
		"{$prefix}-block",
		\plugins_url( $style_css, __FILE__ ),
		array(),
		time()
		// filemtime( "$dir/$style_css" )
	);

	\register_block_type( 
		"{$prefix}/chat", 
		array(
			'editor_script' 	=> "{$prefix}-block",
			'editor_style'  	=> "{$prefix}-editor",
			'style'         	=> "{$prefix}-block",
		) 
	);
}
\add_action( 'init', __NAMESPACE__ . '\\init' );
