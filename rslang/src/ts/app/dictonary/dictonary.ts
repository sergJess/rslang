/* eslint-disable */
import './dictonary.scss';
import {IgetWords} from '../api/api';
import DictonaryItem from './dictonary-item';
 export default class Dictonary {
		parent: HTMLElement;
		dictonaryPage = document.createElement('div');
		dictonaryNavigation = document.createElement('div');
  dictonaryItems =	document.createElement('div');
		constructor(parentNode: HTMLElement){
			this.parent = parentNode;
			this.dictonaryNavigation.classList.add('dictonary-navigation');
			this.dictonaryPage.classList.add('dictonary-page');
		}
		render(data: Promise<IgetWords[]>): void {
			data.then((items: IgetWords[])=>{
				for (let i = 0; i<items.length; i += 1){
const itemDictonary = new DictonaryItem(this.dictonaryItems);
itemDictonary.render(items[i], 'https://raw.githubusercontent.com/sergJess/react-rslang-be/main/');
				}
			});
			this.parent.append(this.dictonaryItems);
		}
	}