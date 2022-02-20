/* eslint-disable */
export default class DictonaryNavController{
private counterPage: number = 0;
private bottomLimit: number;
private topLimit: number;
constructor(limitBottom: number, limitTop: number){
this.bottomLimit = limitBottom;
this.topLimit = limitTop;
}
getCounter():	number{
return this.counterPage;
}
incrementCounter():void{
	this.counterPage += 1;
	this.limitCounter(this.bottomLimit, this.topLimit);
}
decrementCounter():void{
	this.counterPage -= 1;
	this.limitCounter(this.bottomLimit, this.topLimit);
}
private limitCounter(bottomLimit:number, topLimit:number):boolean{
if(this.counterPage >= topLimit) {
	this.resetCounter();
	return false;
} 
if(this.counterPage < bottomLimit){
	this.counterPage = this.topLimit - 1;
	return false;
}

return true;
}
resetCounter():void{
	this.counterPage = 0;
}
}