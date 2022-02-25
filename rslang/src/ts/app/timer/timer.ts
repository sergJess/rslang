/* eslint-disable */
import './timer.scss';
export default class Timer{
	private parent: HTMLElement;
	private timer: HTMLElement = document.createElement('div');
	private digitalDisplay: HTMLElement = document.createElement('div');
	private time: number;
	private timerUpdate: number = 0;
	constructor(parentNode: HTMLElement, countTime: number){
this.time = countTime;
this.parent = parentNode;
this.timer.append(this.digitalDisplay);
	}
	start():	void {
let counter = this.time;
const step = 1;

const tick = ():void=>{
	counter -= step;
this.digitalDisplay.textContent = `${counter}`;

this.timerUpdate = setTimeout(tick, 1000);
if(counter === 0){
	this.stop();
}
};
this.timerUpdate = setTimeout(tick, 1000);

	}

	stop(): void {
 clearTimeout(this.timerUpdate);
	}

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