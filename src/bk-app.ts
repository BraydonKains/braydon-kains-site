import {
	LitElement, html, customElement, property
} from 'lit-element';
import { Site } from './objects/site-enum';
import './components/bk-tab';

@customElement('bk-app')
export class BKApp extends LitElement {
	@property({type: Site}) site = Site.Developer;

	render(){
		return html`
			<p>${this.site}</p>
			<bk-tab></bk-tab>
		`;
  	}
}

