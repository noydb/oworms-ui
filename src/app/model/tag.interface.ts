import { Word } from './word.interface';

export interface Tag {
    id?: number;
    name?: string;
    words?: Word[];
}
