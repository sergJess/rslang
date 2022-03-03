/* eslint-disable */
import './sprint-game.scss';
export default class SprintGame{
	private parent: HTMLElement;
	private gameField = document.createElement('div');
	private gameQuestion = document.createElement('h2');

	constructor(parentNode: HTMLElement) {
this.parent = parentNode;
this.parent.append(this.gameField);
	}
render(): void{
	this.gameField.classList.add('game-field');
	this.gameQuestion.classList.add('game-question');
}
renderStart(): void{
	const startScreen = document.createElement('div');
	startScreen.classList.add('sprint-start-screen');
	const buttonStart = document.createElement('button');
	buttonStart.classList.add('sprint-button-start');
	buttonStart.textContent = 'Начать игру';
	buttonStart.onclick = ()=>{
		this.clearField();
		this.render();
	};
	startScreen.append(buttonStart);
	this.gameField.append(startScreen);
}
clearField(): void{
	this.gameField.innerHTML = '';
}
}