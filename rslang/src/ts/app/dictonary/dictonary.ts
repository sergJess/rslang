/* eslint-disable */
import './dictonary.scss';
import {IgetWords} from '../api/api';
import DictonaryItem from './dictonary-item';
import Navigation from '../navigation/nav';
import Footer from '../footer/footer';
 export default class Dictonary {
		parent: HTMLElement;
		dictonaryPage = document.createElement('div');
		dictonaryNavigation = document.createElement('div');
  dictonaryItems =	document.createElement('div');
		clickToHome = ():void => {};
clickToDictonary = ():void => {};
clickToSprint =	():void => {};
		constructor(parentNode: HTMLElement){
			this.parent = parentNode;
			this.dictonaryNavigation.classList.add('dictonary-navigation');
			this.dictonaryPage.classList.add('dictonary-page');
			this.dictonaryItems.classList.add('dictonary-items');
		}
		render(data: Promise<IgetWords[]>): void {
			const nav = new Navigation(this.dictonaryPage); 
			nav.createNavElement('Home', this.clickToHome);
			nav.createNavElement('Dictonary', this.clickToDictonary);
			nav.createNavElement('Sprint', this.clickToSprint);
			nav.render();
			data.then((items: IgetWords[])=>{
				for (let i = 0; i<items.length; i += 1){
const itemDictonary = new DictonaryItem(this.dictonaryItems);
itemDictonary.render(items[i], 'https://raw.githubusercontent.com/sergJess/react-rslang-be/main/');
				}
			});
			this.dictonaryPage.append(this.dictonaryItems);
			this.parent.append(this.dictonaryPage);
		}
		clear():void {
			this.dictonaryPage.innerHTML = '';
		}
	}