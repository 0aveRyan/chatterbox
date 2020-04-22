/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import save from './save';
import edit from './edit';

import { NS } from '../constants';

registerBlockType( `${ NS }/chat`, {
	
	title: __( 'Chatterbox' ),

	description: __( 'A group of chat messages.' ),

	styles: [
		{ name: 'borderless', label: __( 'Borderless' ), isDefault: true },
		{ name: 'app', label: __( 'App' ) },
		{ name: 'imac', label: __( 'iMac' ) },
		{ name: 'iphone', label: __( 'iPhone' ) },
		{ name: 'laptop', label: __( 'Laptop' ) },
		{ name: 'pixel', label: __( 'Pixel' ) },
	],

	category: 'layout',

	icon: 'format-chat',

	supports: {
		html: false,
	},

	edit,

	save,
} );
