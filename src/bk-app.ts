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
		console.log(this.site);
	}

	renderSiteView() {
		switch(this.site) {
			case Site.Developer:
				return html`<p>Welcome to the Developer site!</p>`;
				break;
			case Site.Musician:
				return html`<p>Welcome to the Musician site!</p>`;
				break;
		}
	}

	render() {
		return html`
			<bk-tab text="Developer" value="${Site.Developer}" @bk-tab-change="${this.handleTabChange}"></bk-tab>
			<bk-tab text="Musician" value="${Site.Musician}" @bk-tab-change="${this.handleTabChange}"></bk-tab>	
			${ this.renderSiteView() }
		`;
  	}
}

