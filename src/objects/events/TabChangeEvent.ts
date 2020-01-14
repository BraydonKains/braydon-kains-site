import { IConstantCustomEvent } from './IConstantCustomEvent';
import { TabChangeDetail } from './details/TabChangeDetail';

export class TabChangeEvent implements IConstantCustomEvent {
	private eventName: string = "bk-tab-change";
	private detail: TabChangeDetail;
	private event: CustomEvent;

	constructor(in_detail: TabChangeDetail) {
		this.detail = in_detail;	

		this.event = new CustomEvent(
			this.eventName,
			{
				'detail': this.detail
			}
		);
	}

	getEvent() : CustomEvent {
		return this.event;
	}
}
