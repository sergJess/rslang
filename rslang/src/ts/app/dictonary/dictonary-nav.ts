/* eslint-disable */
import './dictonary-nav.scss';
export default class DictonaryNav{
	private parent:HTMLElement = document.createElement('div');
	private navInner = document.createElement('div');
	private buttonLeft = document.createElement('button');
	private buttonRight = document.createElement('button');
	private infoText = document.createElement('p');
	private infoTextNumber = document.createElement('span');
	public buttonLeftOnClick = ():void => {};
	public buttonRightOnClick = ():void => {};
	constructor(parentNode: HTMLElement){
		this.parent = parentNode;
		this.navInner.classList.add('dictionaryonary-nav-inner');
		this.buttonLeft.onclick = () => {
			this.buttonLeftOnClick();
		}
		this.buttonRight.onclick = () => {
			this.buttonRightOnClick();
		}
	}
	setNumber(content:string):void {
this.infoTextNumber.innerText = content;
	}
	render():void {
		this.buttonLeft.textContent = 'Prev';
		this.buttonLeft.classList.add('dictonary-nav-button');
		this.buttonRight.textContent = 'Next';
		this.buttonRight.classList.add('dictonary-nav-button');
		this.infoText.textContent = 'Страница';
		this.infoText.classList.add('dictonary-nav-text');
		this.infoTextNumber.classList.add('dictonary-nav-text_number');
		this.infoText.append(this.infoTextNumber);
		this.navInner.append(this.buttonLeft, this.infoText, this.buttonRight);
		this.parent.append(this.navInner);
	}
}