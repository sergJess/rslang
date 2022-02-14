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
this.page.classList.add('start-page');
  }
  render(){
    const nav = new Navigation(this.page); 
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
    this.page.append(aboutApp);
    this.parent.append(this.page);
    const footer = new Footer(this.page);
    footer.render();
  }
}

function appNodeController(node:HTMLElement){

}