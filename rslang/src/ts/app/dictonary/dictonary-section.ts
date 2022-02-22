/* eslint-disable */
import './dictonary-section.scss';
export default class DictonarySection{
	private partInner = document.createElement('div');
	private listInner = document.createElement('ul');
	private sectionsAmount:	number;
	private parent: HTMLElement;
	public controller = new DictonarySectionController();
	onClick = (): void => {};
	constructor(parentNode: HTMLElement, sectionsNumber: number){
this.parent =	parentNode;
this.partInner.textContent = 'Выберите раздел';
this.listInner.classList.add('dictonary-list-section');
this.partInner.append(this.listInner);
this.sectionsAmount = sectionsNumber;
this.partInner.onclick = (): void => {
this.listInner.classList.toggle('dictonary-list-section_visible');
};
	}
	render(): void {
		this.partInner.classList.add('dictonary-section');
		for(let i = 0; i < this.sectionsAmount; i += 1){
			this.createElement(`Раздел ${i + 1}`, i);
		}
		this.parent.append(this.partInner);
	}
createElement(name:string, num:number): void{
	const list = document.createElement('li');
	list.onclick = ()=>{
this.controller.setCounter(num);
	};
	list.textContent = name;
	this.listInner.append(list);
}
getControllerValue(): number {
	return this.controller.getCounter();
}
}

class DictonarySectionController{
private counter: number = 0;
// 	constructor(counterStart: number){
// this.counter = counterStart;
// 	}
setCounter(value:number): void{
this.counter =	value;
}
getCounter(): number{
	return this.counter;
}
}