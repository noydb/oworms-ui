import { Word } from './word.interface';

export interface User {
    username?: string;
    email?: string;

    // read-only
    uuid?: string;
    status?: string;
    createdWordCount: number;
    likedWords: Word[];
}
