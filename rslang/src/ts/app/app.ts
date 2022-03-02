/* eslint-disable */
import './base.scss';
import {getWords} from '../app/api/api';
import {WORDS_URL, DATA_RESOURCE } from '../app/constants/constants';
import StartPage from '../app/start-page/start-page';
import SprintPage from '../app/sprint/sprint-page';
import Dictonary from '../app/dictonary/dictonary';

export default class App {
	private parent: HTMLElement;
	constructor(parentNode:HTMLElement){
this.parent =	parentNode;
	}
	start(): void{
		const startingPage = new StartPage(this.parent);
//dictonary page starting
startingPage.dictonaryOnClick = () => {
	const dictonary =	new Dictonary(this.parent, DATA_RESOURCE);
	startingPage.clear();
	// dictonary parts click
	dictonary.partsDictonary.click = (): void => {
		dictonary.clearDictonaryItems();
		dictonary.renderWords(getWords(WORDS_URL, `${dictonary.controllerDictonaryNav.getCounter()}`, `${dictonary.partsDictonary.getControllerValue()}`), DATA_RESOURCE);
	};
	//events click to choose page of words
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
// to home
	dictonary.clickToHome = (): void => {
		dictonary.clear();
		startingPage.render();
	}
	// render words
	dictonary.render(getWords(WORDS_URL, '0', '0'));

	};
// sprint game page starting
startingPage.toGameSprint = ()=>{
	startingPage.clear();
	const sprintGame = new SprintPage(this.parent);
	sprintGame.clickToHome =	(): void => {
		sprintGame.clear();
		startingPage.render();
	};
	sprintGame.clickToDictonary = (): void => {
		const dictonary =	new Dictonary(this.parent, DATA_RESOURCE);
		sprintGame.clear();
		// dictonary parts click
		dictonary.partsDictonary.click = (): void => {
			dictonary.clearDictonaryItems();
			dictonary.renderWords(getWords(WORDS_URL, `${dictonary.controllerDictonaryNav.getCounter()}`, `${dictonary.partsDictonary.getControllerValue()}`), DATA_RESOURCE);
		};
		//events click to choose page of words
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
	// to home
		dictonary.clickToHome = (): void => {
			dictonary.clear();
			startingPage.render();
		}
		// render words
		dictonary.render(getWords(WORDS_URL, '0', '0'));
	};
	sprintGame.renderStartScreen();

};
	// start
startingPage.render();

	}
}

class controllerDictonatyPage{
	private startPage: StartPage;

	constructor( page: StartPage){
this.startPage = page;
	}
	emit(): void{

	}

}