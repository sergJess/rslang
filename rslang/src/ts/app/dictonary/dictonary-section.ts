/* eslint-disable */
import './dictonary-section.scss';

export default class DictonarySection{
	private partInner = document.createElement('div');
	private listInner = document.createElement('ul');
	private sectionsAmount:	number;
	private parent: HTMLElement;
	public controller = new DictonarySectionController();
	private currentPart = document.createElement('span');
  public click = ():void => {};
// callback
	constructor(parentNode: HTMLElement, sectionsNumber: number){
this.parent =	parentNode;
this.partInner.textContent = 'Выберите раздел';
this.listInner.classList.add('dictonary-list-section');
this.currentPart.textContent = '- текущий раздел 1';
this.partInner.append(this.currentPart);
this.currentPart.classList.add('current-part');
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
	const wrapper = document.createElement('div');
	const list = document.createElement('li');
	list.classList.add('dictonary-list');
	list.onclick = ()=>{
this.currentPart.textContent = `- текущий раздел ${num + 1}`;
this.controller.setCounter(num);
this.click();
	};
	list.textContent = name;
	wrapper.append(list);
	this.listInner.append(wrapper);
}
getControllerValue(): number {
	return this.controller.getCounter();
}
}

class DictonarySectionController{
private counter: number = 0;

setCounter(value:number): void{
this.counter =	value;
}
getCounter(): number{
	return this.counter;
}
}