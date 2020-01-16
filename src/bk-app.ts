import {
	LitElement, html, customElement, css, property
} from 'lit-element';
import { Site } from './objects/enums/SiteEnum'
import './components/controls/bk-tab';
import './components/views/bk-developer';
import './components/views/bk-musician';

@customElement('bk-app')
export class BKApp extends LitElement {
	// Properties
	@property()
	site: Site = Site.Developer;

	static get styles() {
		return css`
		`;
	}

	handleTabChange(e : CustomEvent) : void {
		this.site = e.detail.value;	
	}

	renderSiteView() {
		switch(this.site) {
			case Site.Developer:
				return html`<bk-developer></bk-developer>`;
				break;
			case Site.Musician:
				return html`<bk-musician></bk-musician>`;
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

