/* eslint-disable */
import './dictonary.scss';
import {IgetWords} from '../api/api';
import DictonaryItem from './dictonary-item';
import Navigation from '../navigation/nav';
import DictonaryNav from './dictonary-nav';
import DictonaryNavController from './dictonary-nav-controller';
import Preloader from '../preloader/preloader';
import Player from '../audio-player/player';
import DictonarySection from '../dictonary/dictonary-section';
import Footer from '../footer/footer';
 export default class Dictonary {
		parent: HTMLElement;
		dictonaryPage = document.createElement('div');
		dictonaryNavigation = document.createElement('div');
  dictonaryItems =	document.createElement('div');
		UrlData: string;
		preloader: Preloader = new Preloader(this.dictonaryItems);
		controllerDictonaryNav =	new DictonaryNavController(1, 30);
		partsDictonary = new DictonarySection(this.dictonaryPage, 6);
		navDictonary = new DictonaryNav(this.dictonaryPage);
		audioPlayer = new Player(this.dictonaryPage);
		public partSection: number = this.partsDictonary.getControllerValue();
		//events
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
			nav.createNavElement('Домой', this.clickToHome);
			nav.createNavElement('Словарь', this.clickToDictonary);
			// nav.createNavElement('Sprint', this.clickToSprint);
			nav.render();
			this.partsDictonary.render();
			this.navDictonary.render();
			this.navDictonary.setNumber(`${this.controllerDictonaryNav.getCounter() + 1}`);
			
		this.renderWords(data, this.UrlData);
			this.dictonaryPage.append(this.dictonaryItems);
			this.parent.append(this.dictonaryPage);
		}

 renderWords(data: Promise<IgetWords[]>, url:string):void{
	this.preloader.render();
	data.then((items: IgetWords[])=>{
		this.preloader.hide();
		for (let i = 0; i < items.length; i += 1){
const itemDictonary = new DictonaryItem(this.dictonaryItems);
itemDictonary.render(items[i], url, this.audioPlayer);
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