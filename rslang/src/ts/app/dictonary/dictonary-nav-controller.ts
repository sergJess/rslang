/* eslint-disable */
export default class DictonaryNavController{
private counterPage: number = 1;
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
private limitCounter(bottomLimit:number, topLimit:number):void{
if(this.counterPage < bottomLimit || this.counterPage > topLimit) {
	this.resetCounter();
} 
}
resetCounter():void{
	this.counterPage = 1;
}
}