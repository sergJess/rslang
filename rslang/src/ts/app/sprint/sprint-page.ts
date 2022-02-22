/* eslint-disable */
import './sprint-page.scss';
export default class SprintPage{
	private parent: HTMLElement;
	private pageSprint = document.createElement('div');
	constructor(parentNode: HTMLElement){
this.parent =	parentNode;
this.pageSprint.classList.add('sprint-page');
this.parent.append(this.pageSprint);
	}
	render(): void{

	}
	clear(): void{
		this.pageSprint.remove();
	}
}