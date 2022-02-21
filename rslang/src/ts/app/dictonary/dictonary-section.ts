/* eslint-disable */
import './dictonary-section.scss';
class DictonarySection{
	private partInner = document.createElement('div');
	private listInner = document.createElement('ul');
	private sectionsAmount:	number;
	private parent: HTMLElement;
	onClick = (): void => {};
	constructor(parentNode:HTMLElement, sectionsNumber: number){
this.parent =	parentNode;
this.partInner.classList.add('dictonary-section');
this.partInner.textContent = 'Выберите раздел';
this.listInner.classList.add('dictonary-list-section');
this.parent.append(this.partInner);
this.partInner.append(this.listInner);
this.sectionsAmount = sectionsNumber;
this.partInner.onclick = (): void => {

};
	}
createElement(name:string):void{
	const list = document.createElement('li');
	list.textContent = name;
	this.listInner.append(list);
}
}