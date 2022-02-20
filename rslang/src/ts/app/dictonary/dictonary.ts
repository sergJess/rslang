/* eslint-disable */
import './dictonary.scss';
import {IgetWords} from '../api/api';
import DictonaryItem from './dictonary-item';
import Navigation from '../navigation/nav';
import DictonaryNav from './dictonary-nav';
import DictonaryNavController from './dictonary-nav-controller';
import Footer from '../footer/footer';
 export default class Dictonary {
		parent: HTMLElement;
		dictonaryPage = document.createElement('div');
		dictonaryNavigation = document.createElement('div');
  dictonaryItems =	document.createElement('div');
		UrlData: string;
		controllerDictonaryNav =	new DictonaryNavController(1,30);
		navDictonary = new DictonaryNav(this.dictonaryPage);
		clickToHome = (): void => {};
  clickToDictonary = (): void => {};
  clickToSprint =	(): void => {};
		constructor(parentNode: HTMLElement, dataUrl: string){
			this.parent = parentNode;
			this.dictonaryNavigation.classList.add('dictonary-navigation');
			this.dictonaryPage.classList.add('dictonary-page');
			this.dictonaryItems.classList.add('dictonary-items');
			this.UrlData = dataUrl;
			
		}
		render(data: Promise<IgetWords[]>): void {
			const nav = new Navigation(this.dictonaryPage); 
			nav.createNavElement('Home', this.clickToHome);
			nav.createNavElement('Dictonary', this.clickToDictonary);
			nav.createNavElement('Sprint', this.clickToSprint);
			nav.render();
		
			this.navDictonary.render();
			this.navDictonary.setNumber(`${this.controllerDictonaryNav.getCounter() + 1}`);
			
		this.renderWords(data, this.UrlData);
			this.dictonaryPage.append(this.dictonaryItems);
			this.parent.append(this.dictonaryPage);
		}

 renderWords(data: Promise<IgetWords[]>, url:string):void{
	data.then((items: IgetWords[])=>{
		for (let i = 0; i < items.length; i += 1){
const itemDictonary = new DictonaryItem(this.dictonaryItems);
itemDictonary.render(items[i], url);
		}
	});
}
clearDictonaryItems():void {
	this.dictonaryItems.innerHTML = '';
}
		clear():void {
			this.dictonaryPage.remove();
		}
	}