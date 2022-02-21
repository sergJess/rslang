/* eslint-disable */
import './dictonary-item.scss';
import {IgetWords} from '../api/api';
import Player from '../audio-player/player';
export default class DictonaryItem {
	parent: HTMLElement;
	onClickAudioMeaning = (): void=>{};
	onClickAudioExample = (): void=>{};
	constructor(parentNode: HTMLElement){
		this.parent = parentNode;
		
	}
	render(data: IgetWords, imgUrl: string, player?: Player): void {
const item = document.createElement('div');
item.classList.add('dictonary-item');
// word-inner
const wordInner = document.createElement('div');
wordInner.classList.add('dictonary-inner');
const word = document.createElement('h2');
word.classList.add('item-title');
word.textContent = `${data.word} - ${data.transcription} - ${data.wordTranslate}`;
//sound
const sound = document.createElement('p');
sound.classList.add('dictonary-sound');
sound.textContent = 'click to listen Word';
sound.onclick = (): void =>{
	if(player){
		player.play(`${imgUrl}${data.audio}`);
	}
};
// img
const img = document.createElement('img');
img.classList.add('dictonary-item-img');
img.setAttribute('alt', `${data.word}`);
img.src = `${imgUrl}${data.image}`;
// text meaning
const meaningText = document.createElement('p');
meaningText.classList.add('dictonary-text');
meaningText.innerHTML = `${data.textMeaning}`;
const meaningTranslate = document.createElement('p');
meaningTranslate.classList.add('dictonary-text_translate');
meaningTranslate.textContent = `${data.textMeaningTranslate}`
// text example
const exampleText = document.createElement('p');
exampleText.classList.add('dictonary-text');
exampleText.innerHTML = `${data.textExample}`;
const exampleTranslate = document.createElement('p');
exampleTranslate.classList.add('dictonary-text_translate');
exampleTranslate.textContent = `${data.textExampleTranslate}`;

wordInner.append(word);
item.append(wordInner, sound, img, meaningText, meaningTranslate, exampleText, exampleTranslate);
this.parent.append(item);
	}
}