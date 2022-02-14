/* eslint-disable */
import './base.scss';
import {IgetWords, getWords} from './app/api/api';
import {APP_URL} from './app/constants/constants';
import StartPage from './app/start-page/start-page';
const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.append(root);
const startingPage = new StartPage(root);
startingPage.dictonaryOnClick = ()=>{console.log('Dictonary')};
startingPage.toGameSprint = ():void => {console.log('Sprint')};
startingPage.render();
const res = getWords('https://serg-react-rslang.herokuapp.com/words?page=2&group=0');
res.then((data)=>{
	console.log(data);
})


