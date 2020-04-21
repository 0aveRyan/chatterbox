import { __ } from '@wordpress/i18n';

import { RichText } from '@wordpress/block-editor';

import classNames from 'classnames';

import { resolveMessageType } from './utils';

export default ( { attributes } ) => {
	const { className, content, timestamp } = attributes;

	const type = resolveMessageType( className );

	return (
		<li
			className={ classNames(
				'slds-chat-listitem',
				'slds-chat-listitem_' + type,
				className
			) }
		>
			<div className="slds-chat-message">
				<div className="slds-chat-message__body">
					<div
						className={ classNames(
							'slds-chat-message__text',
							'slds-chat-message__text_' + type
						) }
					>
						<RichText.Content tagName="span" value={ content } />
					</div>
					{ timestamp && (
						<div
							class="slds-chat-message__meta"
							aria-label={ `sent at ${ timestamp }` }
						>
							<RichText.Content
								tagName="span"
								value={ timestamp }
							/>
						</div>
					) }
				</div>
			</div>
		</li>
	);
};
