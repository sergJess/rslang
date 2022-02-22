/* eslint-disable */
import './start-page.scss';
import Navigation from '../navigation/nav';
import Footer from '../footer/footer';
export default class StartPage {
  parent:HTMLElement;
  page = document.createElement('div');
  dictonaryOnClick = ():void=>{};
  toGameSprint = ():void => {};
  toStartPage = ():void => {};
  constructor(parentNode:HTMLElement){
this.parent = parentNode;
this.page.classList.add('start-page-main');
  }
  render(){
    const pageInner = document.createElement('div');
    pageInner.classList.add('start-page');
    const nav = new Navigation(pageInner); 
    nav.createNavElement('Домой', this.toStartPage);
    nav.createNavElement('Словарь', this.dictonaryOnClick);
    nav.createNavElement('игра Спринт', this.toGameSprint);
    nav.render();

    const aboutApp = document.createElement('div');
    aboutApp.classList.add('about-app');
    const appTitle = document.createElement('h2');
    appTitle.classList.add('app-title');
    appTitle.textContent = 'RS-Lang';
    const appText = document.createElement('p');
    appText.classList.add('app-text');
    appText.textContent = 'Приложение для изучения английских слов';
    aboutApp.append(appTitle, appText);
    pageInner.append(aboutApp);
  
    const footer = new Footer(pageInner);
    footer.render();
    this.page.append(pageInner);
    this.parent.append(this.page);
  }
clear(): void {
  this.page.innerHTML = '';
}
}
