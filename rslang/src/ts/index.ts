/* eslint-disable */
import './base.scss';
import Navigation from './app/navigation/nav';
const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.append(root);
const nav = new Navigation(root);
nav.createNavElement('about', ()=>{
	console.log('About');
});
nav.createNavElement('Dictonary', ()=>{
	console.log('Dictonary');
})
nav.render();
