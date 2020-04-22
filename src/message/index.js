/**
 * @wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import save from './save';
import edit from './edit';

import { NS } from '../constants';

registerBlockType( `${ NS }/message`, {

	title: __( 'Message' ),

	description: __( 'A chat message.' ),

	category: 'layout',

	inserter: false,

	parent: [ `${ NS }/chat` ],

	icon: 'admin-comments',

	supports: {
		html: false,
		reusable: false,
	},

	styles: [
		{ name: 'inbound', label: __( 'Inbound' ), isDefault: true },
		{ name: 'outbound', label: __( 'Outbound' ) },
		{ name: 'event', label: __( 'Event' ) },
	],

	attributes: {
		content: {
			type: 'string',
		},
		timestamp: {
			type: 'string',
		},
	},

	edit,

	save,
	
} );
