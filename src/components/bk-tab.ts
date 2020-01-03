import {
	LitElement, html, customElement, css
} from 'lit-element';

@customElement('bk-tab')
export class BKTab extends LitElement {
	static get styles() {
		return css`
		tab {
			overflow: hidden;
			border: 1px solid #ccc;
			background-color: #f1f1f1;
		}

		.tab button {
		  background-color: inherit;
		  float: left;
		  border: none;
		  outline: none;
		  cursor: pointer;
		  padding: 14px 16px;
		  transition: 0.3s;
		}

		.tab button:hover {
		  background-color: #ddd;
		}

		.tab button.active {
		  background-color: #ccc;
		}

		.tabcontent {
		  display: none;
		  padding: 6px 12px;
		  border: 1px solid #ccc;
		  border-top: none;
		}
		`;
	}

	fireChangeEvent() {
		console.log("hi");
	}

	render() {
		return html`
		<div class="tab">
			<button class="tablinks" @onclick="${this.fireChangeEvent()}">Developer</button>
			<button class="tablinks" @onclick="${this.fireChangeEvent()}">Musician</button>
		</div>
		`;
  	}
}

