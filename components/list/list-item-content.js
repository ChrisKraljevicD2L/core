import { css, html, LitElement } from 'lit-element/lit-element.js';
import { bodyCompactStyles, bodySmallStyles } from '../typography/styles.js';

class ListItemContent extends LitElement {
	static get properties() {
		return {
			text: { type: String },
			secondaryText: { type: String, attribute: 'secondary-text' }
		};
	}

	static get styles() {
		const layout = css`
			.d2l-list-item-text-primary {
				max-height: 2.4rem;
				overflow: hidden;
				margin: 0;
			}
			.d2l-list-item-text-secondary {
				margin: 0;
				margin-top: 0.3rem;
				overflow: hidden;
			}
		`;
		return [ bodyCompactStyles, bodySmallStyles, layout ];
	}

	render() {
		return html`
			<div class="d2l-body-compact d2l-list-item-text-primary">${this.text}</div>
			<div class="d2l-body-small d2l-list-item-text-secondary">${this.secondaryText}</div>
		`;
	}

	createRenderRoot() {
		return this;
	}
}

customElements.define('d2l-list-item-content', ListItemContent);
