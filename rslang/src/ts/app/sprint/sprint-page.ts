/* eslint-disable */
import './sprint-page.scss';
import Navigation from '../navigation/nav';
export default class SprintPage{
	private parent: HTMLElement;
	private pageSprint = document.createElement('div');
	private gameFieldInner = document.createElement('div');
	clickToHome = ():	void => {};
 clickToDictonary = (): void => {};
	constructor(parentNode: HTMLElement){
this.parent =	parentNode;
this.pageSprint.classList.add('sprint-page');
this.parent.append(this.pageSprint);
	}
	renderStartScreen(): void{
		const nav = new Navigation(this.pageSprint); 
			nav.createNavElement('Домой', this.clickToHome);
			nav.createNavElement('Словарь', this.clickToDictonary);
			nav.render();
			this.pageSprint.append(this.gameFieldInner);
	}
	clear(): void{
		this.pageSprint.remove();
	}
}