import { css, html, LitElement } from 'lit-element/lit-element.js';
import './list-item.js';

class List extends LitElement {
	static get properties() {
		return {

		};
	}

	static get styles() {
		const layout = css`
			ul {
				list-style-type: none;
			}
			::slotted(*) {
				display: none;
			}
			::slotted(d2l-list-item) {
				display: list-item;
				box-sizing: content-box;
				margin: 1px 0;
				--d2l-list-item-divider-bottom: block;
			}
			::slotted(d2l-list-item:last-of-type) {
				--d2l-list-item-divider-bottom: none;
			}
		`;

		const specialDividers = css`
			:host(.d2l-list-divider-all) ::slotted(d2l-list-item) {
				--d2l-list-item-divider-top: block;
				--d2l-list-item-divider-bottom: block;
			}
			:host(.d2l-list-divider-extended) ::slotted(d2l-list-item) {
				--d2l-list-item-content-padding: 0 18px;
			}
		`;
		return [layout, specialDividers];
	}

	render() {

		return html`
			<ul>
				<slot></slot>
			</ul>
		`;
	}
}

customElements.define('d2l-list', List);
