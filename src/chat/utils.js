import { intersection } from 'lodash';

export const resolveChatType = ( className = '' ) => {
	return mapTypeFromClasses( className );
};

export const mapTypeFromClasses = ( className ) => {

	const blockClasses = className.split( ' ' );

	const styleClasses = [
		'is-style-app',
		'is-style-imac',
		'is-style-iphone',
		'is-style-laptop',
		'is-style-pixel',
	];
	
	const mapPublicClass = {
		'is-style-app': 'app',
		'is-style-imac': 'imac-pro',
		'is-style-iphone': 'iphone-x',
		'is-style-laptop': 'surface-book',
		'is-style-pixel': 'google-pixel',
	}

	const matches = intersection( styleClasses, blockClasses );
	if ( matches[0] ) {
		let match = matches[0];
		return mapPublicClass[ match ];
	}

	return false;
}

