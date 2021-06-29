import { PartOfSpeech } from './part-of-speech.enum';

export interface FilterProp {
    key: 'w' | 'def' | 'pos' | 'creator' | 'learnt';
    pHolder: string;
    filterBy: boolean;
    value?: string | PartOfSpeech[] | null;
}
