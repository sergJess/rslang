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
    nav.createNavElement('Home', this.toStartPage);
    nav.createNavElement('Dictonary', this.dictonaryOnClick);
    nav.createNavElement('Sprint', this.toGameSprint);
    nav.render();

    const aboutApp = document.createElement('div');
    aboutApp.classList.add('about-app');
    const appTitle = document.createElement('h2');
    appTitle.classList.add('app-title');
    appTitle.textContent = 'RS-Lang';
    const appText = document.createElement('p');
    appText.classList.add('app-text');
    appText.textContent = 'Данное приложение позволит вам прожить чуть дольше в этом мире, тк роботы могут разговаривать только на английском или китайском языках... Работы без них не найти. Нет работы => нет денег => нет жизни => Смерть... the end';
    aboutApp.append(appTitle, appText);
    pageInner.append(aboutApp);
  
    const footer = new Footer(pageInner);
    footer.render();
    this.page.append(pageInner);
    this.parent.append(this.page);
  }
clear():void {
  this.page.innerHTML = '';
}
}
