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
	private detail: TabChangeDetail = {} as any;
	@property()
	private event: TabChangeEvent;	

	constructor() {
		super();

		this.event = new TabChangeEvent(this.detail);
	}

	connectedCallback() {
		super.connectedCallback();

		this.detail.tab = this.text;
		this.detail.value = this.value;

		this.event = new TabChangeEvent(this.detail);
	}

	static get styles() {
		return css`
		`;
	}

	fireChangedEvent() : void {
		this.dispatchEvent(this.event.getEvent());
	}

	render() {
		return html`
			<button @click="${this.fireChangedEvent}">${this.text}</button>
		`;
  	}
}

