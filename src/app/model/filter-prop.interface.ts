import { PartOfSpeech } from './part-of-speech.enum';

export interface FilterProp {
    key: 'theWord' | 'definition' | 'partOfSpeech' | 'createdBy';
    pHolder: string;
    filterBy: boolean;
    value?: string | PartOfSpeech[] | null;
}
