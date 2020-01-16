import {
	LitElement, html, customElement, css
} from 'lit-element';

@customElement('bk-musician')
export class BKMusician extends LitElement {
	static get styles() {
		return css`
		`;
	}

	render() {
		return html`
			<p>Welcome to the musician site!</p>
		`;
  	}
}

