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
export async function getWords(url:	string, page: string, group: string): Promise<IgetWords[]>{
	const urlLink = new URL(url);
	urlLink.searchParams.append('page', page);
	urlLink.searchParams.append('group', group);
	const response = await fetch(`${urlLink}`);
return response.json();
}

// export function getWordsArray(url: string): IgetWords[]{
// const words = getWords(url);

// }

