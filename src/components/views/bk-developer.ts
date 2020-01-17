import {
	LitElement, html, customElement, css, property
} from 'lit-element';
import '../controls/bk-tab'
import { DeveloperPages } from '../../objects/enums/DeveloperEnum'

@customElement('bk-developer')
export class BKDeveloper extends LitElement {
	// Properties
	@property()
	currentTab: DeveloperPages = DeveloperPages.About; 

	static get styles() {
		return css`
		`;
	}

	handleTabChange(e : CustomEvent) : void {
		this.currentTab = e.detail.value
		console.log(e.detail.value);
	}

	renderView() {
		switch(this.currentTab) {
			case DeveloperPages.About:
				return html`<p>About</p>`;
			case DeveloperPages.Technologies:
				return html`<p>Technologies</p>`;
			case DeveloperPages.PullRequests:
				return html`<p>PullRequests</p>`;
			case DeveloperPages.Resume:
				return html`<p>Resume</p>`;
			case DeveloperPages.Blog:
				return html`<p>Blog</p>`;
		}
	}

	render() {
		return html`
			<bk-tab text="About" value="${DeveloperPages.About}" @bk-tab-change="${this.handleTabChange}"]></bk-tab>
			<bk-tab text="Technologies" value="${DeveloperPages.Technologies}" @bk-tab-change="${this.handleTabChange}"></bk-tab>
			<bk-tab text="Pull Requests" value="${DeveloperPages.PullRequests}" @bk-tab-change="${this.handleTabChange}"></bk-tab>
			<bk-tab text="Resume" value="${DeveloperPages.Resume}" @bk-tab-change="${this.handleTabChange}"></bk-tab>
			<bk-tab text="Blog" value="${DeveloperPages.Blog}" @bk-tab-change="${this.handleTabChange}"></bk-tab>
			${ this.renderView() }
		`;
  	}
}
