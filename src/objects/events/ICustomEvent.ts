export interface ICustomEvent<T> {
	detail: T;
	getEvent(): CustomEvent;
}
