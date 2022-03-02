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
}