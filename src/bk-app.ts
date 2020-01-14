import {
	LitElement, html, customElement, css, property
} from 'lit-element';
import { Site } from './objects/enums/SiteEnum'
import './components/bk-tab';

@customElement('bk-app')
export class BKApp extends LitElement {
	// Properties
	@property()
	site: Site = Site.Developer;

	static get styles() {
		return css`
		`;
	}

	handleTabChange(e : any) : void {
		this.site = e.detail.value;	
		console.log(e.detail.value);
		console.log(e.detail.tab);
	}

	render() {
		return html`
			<bk-tab text="Developer" value="1" @bk-tab-change="${this.handleTabChange}"></bk-tab>
			<bk-tab text="Musician" value="2" @bk-tab-change="${this.handleTabChange}"></bk-tab>	
		`;
  	}
}

