/* eslint-disable */
import './nav.scss';
type clickCallback = () => void;


export default class Navigation{
	private parentNode:HTMLElement;
	private navInner = document.createElement('nav');
	constructor(parent:HTMLElement){
		this.parentNode = parent;
	}

	render(){
		this.navInner.classList.add('nav-inner');
		this.parentNode.append(this.navInner);
	}

createNavElement(navText:string, callback : clickCallback){
	const navEl = document.createElement('div');
	navEl.textContent = navText;
	navEl.classList.add('nav-element');
	navEl.onclick = ():void=>{
		const links = this.navInner.querySelectorAll('.nav-element');
		links.forEach((item)=>{
			item.classList.remove('nav-element_active');		
		});
		navEl.classList.add('nav-element_active');
		callback();
	};
	this.navInner.append(navEl);
}
}