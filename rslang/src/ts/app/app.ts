/* eslint-disable */
import './base.scss';
import {getWords} from '../app/api/api';
import {WORDS_URL, DATA_RESOURCE } from '../app/constants/constants';
import StartPage from '../app/start-page/start-page';
import Dictonary from '../app/dictonary/dictonary';
import SprintPage from '../app/sprint/sprint-page';
export default class App {
	private parent:HTMLElement;
	constructor(parentNode:HTMLElement){
this.parent =	parentNode;
	}
	start():void{
		const startingPage = new StartPage(this.parent);
//dictonary page starting
startingPage.dictonaryOnClick = () => {
	const dictonary =	new Dictonary(this.parent, DATA_RESOURCE);
	startingPage.clear();
	dictonary.partsDictonary.click = (): void => {
		dictonary.clearDictonaryItems();
		dictonary.renderWords(getWords(WORDS_URL, `${dictonary.controllerDictonaryNav.getCounter()}`, `${dictonary.partsDictonary.getControllerValue()}`), DATA_RESOURCE);
	};
	//events
	dictonary.navDictonary.buttonLeftOnClick = (): void =>{
		dictonary.controllerDictonaryNav.decrementCounter();
		dictonary.clearDictonaryItems();
		dictonary.renderWords(getWords(WORDS_URL, `${dictonary.controllerDictonaryNav.getCounter()}`, `${dictonary.partsDictonary.getControllerValue()}`), DATA_RESOURCE);
		dictonary.navDictonary.setNumber(`${dictonary.controllerDictonaryNav.getCounter() + 1}`);
	}
	dictonary.navDictonary.buttonRightOnClick = (): void =>{
		dictonary.controllerDictonaryNav.incrementCounter();
		dictonary.clearDictonaryItems();
		dictonary.renderWords(getWords(WORDS_URL, `${dictonary.controllerDictonaryNav.getCounter()}`, `${dictonary.partsDictonary.getControllerValue()}`), DATA_RESOURCE);
	
		dictonary.navDictonary.setNumber(`${dictonary.controllerDictonaryNav.getCounter() + 1}`);
	}

	dictonary.clickToHome = (): void => {
		dictonary.clear();
		startingPage.render();
	}
	
	dictonary.render(getWords(WORDS_URL, '0', '0'));

	};
// sprint game starting
	startingPage.toGameSprint = ():void => {
		startingPage.clear();
		const pageSprint = new SprintPage(this.parent);
		console.log('Sprint')};

	// start
startingPage.render();

	}
}