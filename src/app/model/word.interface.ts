import { PartOfSpeech } from './part-of-speech.enum';

export interface Word {
    id?: number;
    theWord?: string;
    definition?: string;
    partOfSpeech?: PartOfSpeech;
    createdBy?: string;
    timesViewed?: string;
    pronunciation?: string;
    origin?: string;
    haveLearnt?: boolean;
}
