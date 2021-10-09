import { PartOfSpeech } from './part-of-speech.enum';

export interface Word {
    id?: number;
    theWord?: string;
    definition?: string;
    partOfSpeech?: PartOfSpeech;
    pronunciation?: string;
    origin?: string;
    exampleUsage?: string;
    creationDate?: Date;
    haveLearnt?: boolean;
    createdBy?: string;
    timesViewed?: string;
    note?: string;
}
