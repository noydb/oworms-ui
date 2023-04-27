import { Word } from './word.interface';

export interface UserProfile {
    createdWordCount: number;
    likedWords: Word[];
}
