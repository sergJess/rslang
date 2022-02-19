/* eslint-disable */
import './base.scss';
import {IgetWords, getWords} from '../app/api/api';
import {WORDS_URL} from '../app/constants/constants';
import StartPage from '../app/start-page/start-page';
import Dictonary from '../app/dictonary/dictonary';
export default class App {
	private parent:HTMLElement;
	constructor(parentNode:HTMLElement){
this.parent =	parentNode;
	}
	start():void{
		const startingPage = new StartPage(this.parent);

//dictonary onclick
startingPage.dictonaryOnClick = ()=>{
	const dictonary =	new Dictonary(this.parent);
	startingPage.clear();
	dictonary.clickToHome = (): void => {
		dictonary.clear();
		startingPage.render();
	}

	dictonary.render(getWords(WORDS_URL, '0', '0'));

	console.log('Dictonary')};

startingPage.render();
startingPage.toGameSprint = ():void => {console.log('Sprint')};
	}
}