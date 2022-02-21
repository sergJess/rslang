/* eslint-disable */
import './player.scss';
export default class Player{
  parent: HTMLElement;
  player = document.createElement('audio');
  constructor(parentNode: HTMLElement){
this.parent = parentNode;
this.parent.append(this.player);
  }
  createHidden(): void{
    this.player.classList.add('player', 'player-hidden');
  }
  play(src: string):void{
this.player.setAttribute('src', src);
this.player.play();
  }
}