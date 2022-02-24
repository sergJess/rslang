/* eslint-disable */
import './timer.scss';
export default class Timer{
	private parent: HTMLElement;
	private timer: HTMLElement = document.createElement('div');
	private digitalDisplay: HTMLElement = document.createElement('div');
	private time: number;
	constructor(parentNode: HTMLElement, countTime: number){
this.time = countTime;
this.parent = parentNode;
this.timer.append(this.digitalDisplay);
	}
	start():	void {
let counter = this.time;
	}

	stop(): void {}

	render():	void {
this.timer.classList.add('timer');
this.digitalDisplay.classList.add('digital-display');
this.digitalDisplay.textContent = `${this.time}`;
this.parent.append(this.timer);
	}
	remove(): void{
		this.timer.remove();
	}
}