/* eslint-disable */
export interface IgetWords{
	id: string;
	group: number;
	page: number;
	word: string;
	image:	string;
	audio: string;
	audioMeaning: string;
	audioExample:	string;
	textMeaning:	string;
	textExample:	string;
	transcription:	string;
	textExampleTranslate:	string;
	textMeaningTranslate:	string;
	wordTranslate:	string;
}
export async function getWords(url:	string): Promise<IgetWords[]>{
	const response = await fetch(url);
return response.json();
}

export function make(url:string):void{
const res = getWords(url);
res.then((data)=> {return data});
}