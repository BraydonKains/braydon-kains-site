
import {
	LitElement, html, customElement, css, property
} from 'lit-element';
import '../controls/bk-tab'
import { MusicianPages } from '../../objects/enums/MusicianEnum'

@customElement('bk-musician')
export class BKMusician extends LitElement {
	// Properties
	@property()
	currentTab: MusicianPages = MusicianPages.About; 

	static get styles() {
		return css`
		`;
	}

	handleTabChange(e : CustomEvent) : void {
		this.currentTab = e.detail.value
	}

	renderView() {
		switch(this.currentTab) {
			case MusicianPages.About:
				return html`<p>About</p>`;
			case MusicianPages.Bands:
				return html`<p>Bands</p>`;
			case MusicianPages.Booking:
				return html`<p>Booking</p>`;
			case MusicianPages.Music:
				return html`<p>Music</p>`;
			case MusicianPages.Blog:
				return html`<p>Blog</p>`;
		}
	}

	render() {
		return html`
			<bk-tab text="About" value="${MusicianPages.About}" @bk-tab-change="${this.handleTabChange}"]></bk-tab>
			<bk-tab text="Bands" value="${MusicianPages.Bands}" @bk-tab-change="${this.handleTabChange}"></bk-tab>
			<bk-tab text="Booking" value="${MusicianPages.Booking}" @bk-tab-change="${this.handleTabChange}"></bk-tab>
			<bk-tab text="Music" value="${MusicianPages.Music}" @bk-tab-change="${this.handleTabChange}"></bk-tab>
			<bk-tab text="Blog" value="${MusicianPages.Blog}" @bk-tab-change="${this.handleTabChange}"></bk-tab>
			${ this.renderView() }
		`;
  	}
}

