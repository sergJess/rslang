/* eslint-disable */
import './footer.scss';
export default class Footer{
  parent: HTMLElement;
  footer = document.createElement('footer');
  constructor(parentNode:HTMLElement){
    this.parent = parentNode;
    this.footer.classList.add('footer');
  }
  render(): void{
const footerRs = document.createElement('div');
footerRs.classList.add('footer-rs');
footerRs.textContent = 'Rs-School';
const author =  document.createElement('div');
const authorLink = document.createElement('a');
authorLink.classList.add('footer-author');
authorLink.textContent = 'Sergey Sudakov';
authorLink.setAttribute('href', 'https://github.com/sergJess');
authorLink.setAttribute('target', 'blank');
const year = document.createElement('div');
year.classList.add('footer-year');
year.textContent = '2022';
author.append(authorLink);
this.footer.append(footerRs, author, year);
this.parent.append(this.footer);
  }
  clear(){
    this.footer.innerHTML = '';
  }
}