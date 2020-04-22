import { __ } from '@wordpress/i18n';

import { RichText } from '@wordpress/block-editor';

import { InspectorControls } from '@wordpress/editor';

import { PanelBody, TextControl } from '@wordpress/components';

import { Fragment } from '@wordpress/element';

import classNames from 'classnames';

import { resolveMessageType } from './utils';

export default ( { className, attributes, setAttributes } ) => {
	const { content, timestamp } = attributes;

	const type = resolveMessageType( className );

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Message options' ) }>
					<TextControl
						label={ __( 'Timestamp' ) }
						value={ timestamp }
						onChange={ ( timestamp ) =>
							setAttributes( { timestamp } )
						}
					/>
				</PanelBody>
			</InspectorControls>
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
							<span>
								<RichText
									tagName="span"
									value={ content }
									placeholder={ __(
										'Start typing the message content...'
									) }
									onChange={ ( content ) =>
										setAttributes( { content } )
									}
								/>
							</span>
						</div>
						{ timestamp && (
							<div
								class="slds-chat-message__meta"
								aria-label={ `sent at ${ timestamp }` }
							>
								<RichText
									tagName="span"
									value={ timestamp }
									placeholder={ '12:00 PM' }
									onChange={ ( timestamp ) =>
										setAttributes( { timestamp } )
									}
									allowedFormats={ [] }
								/>
							</div>
						) }
					</div>
				</div>
			</li>
		</Fragment>
	);
};
