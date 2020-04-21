export const resolveMessageType = ( className = '' ) => {
	if ( className.includes( 'is-style-event' ) ) {
		return 'event';
	} else if ( className.includes( 'is-style-outbound' ) ) {
		return 'outbound';
	} else {
		return 'inbound';
	}
};
