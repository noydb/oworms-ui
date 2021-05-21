import { PartOfSpeech } from './part-of-speech.enum';

export interface Word {
	id?: number;
	theWord?: string;
	definition?: string;
	pronunciation?: string;
	origin?: string;
	partOfSpeech?: PartOfSpeech;
	haveLearnt?: boolean;
}
