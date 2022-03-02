/* eslint-disable */
import './preloader.scss';
export default class Preloader{
  parent: HTMLElement;
  preloader = document.createElement('div');
  constructor(parentNode: HTMLElement){
this.parent = parentNode;
  }
  render():void{
this.preloader.classList.add('visible','preloader');
this.preloader.textContent = 'Loading...'
this.parent.append(this.preloader);
  }
 
  hide():void{
    this.preloader.classList.remove('visible');
  }
}