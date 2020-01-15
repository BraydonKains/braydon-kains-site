import {
	LitElement, html, customElement, css, property
} from 'lit-element';
import { TabChangeEvent } from '../objects/events/TabChangeEvent';
import { TabChangeDetail } from '../objects/events/details/TabChangeDetail';

@customElement('bk-tab')
export class BKTab extends LitElement {
	// Attributes
	@property({ type: String }) text = '';
	@property({ type: Number }) value = 0;
	
	// Properties
	@property()
	private event?: TabChangeEvent;	

	connectedCallback() {
		super.connectedCallback();

		let detail : TabChangeDetail = {
			tab: this.text,
			value: this.value
		}

		this.event = new TabChangeEvent(detail);
	}

	static get styles() {
		return css`
		`;
	}

	fireChangedEvent() : void {
		if(this.event) {
			this.dispatchEvent(this.event.getEvent());
		}
	}

	render() {
		return html`
			<button @click="${this.fireChangedEvent}">${this.text}</button>
		`;
  	}
}

