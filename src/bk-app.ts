import {
	LitElement, html, customElement, property
} from 'lit-element';
import { Site } from './objects/site-enum';
import './components/bk-tab';

@customElement('bk-app')
export class BKApp extends LitElement {
	@property() 
	private site: Site = Site.Developer;

	render() {
		return html`
			<bk-tab></bk-tab>
			<p>${this.site}</p>
		`;
  	}
}

