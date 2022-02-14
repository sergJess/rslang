/* eslint-disable */
class ButtonCreator{
  parent: HTMLElement;
  button = document.createElement('button');
  onClick = ():void => {};
  constructor(parentNode: HTMLElement, classes?:string[]){
    this.parent = parentNode;
if(classes){
  this.button.classList.add(...classes);
}
this.button.onclick = this.onClick;
  }

}