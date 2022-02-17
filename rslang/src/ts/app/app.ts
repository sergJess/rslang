/* eslint-disable */
import './base.scss';
import {IgetWords, getWords} from '../app/api/api';
import {APP_URL} from '../app/constants/constants';
import StartPage from '../app/start-page/start-page';
import Dictonary from '../app/dictonary/dictonary';
export default class App {
	private parent:HTMLElement;
	constructor(parentNode:HTMLElement){
this.parent =	parentNode;
	}
	start():void{
		const startingPage = new StartPage(this.parent);
startingPage.dictonaryOnClick = ()=>{
	const dictonary =	new Dictonary(this.parent);
	startingPage.clear();
	dictonary.clickToHome = ():void => {
		dictonary.clear();
		console.log(dictonary);
	
	}
	dictonary.render(getWords('https://serg-react-rslang.herokuapp.com/words?page=2&group=0'));

	console.log('Dictonary')};
	startingPage.toGameSprint = ():void => {console.log('Sprint')};
startingPage.render();
	}
}