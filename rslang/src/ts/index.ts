/* eslint-disable */
import './base.scss';
import Navigation from './app/navigation/nav';
import {IgetWords, getWords, make} from './app/api/api';
import {APP_URL} from './app/constants/constants';
const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.append(root);
const nav = new Navigation(root);
nav.createNavElement('Sprint', ()=>{
	console.log('sprint');
});
nav.createNavElement('Dictonary', ()=>{
	console.log('Dictonary');
})
nav.render();

const result = make('https://serg-react-rslang.herokuapp.com/words?page=2&group=0');


const res = getWords('https://serg-react-rslang.herokuapp.com/words?page=2&group=0');
res.then((data)=>{
	console.log(data);
})


