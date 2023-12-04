import { Word } from './word.interface';

export interface Statistics {
    dateWordMap: Map<String, Word[]>;
    totalWords?: number;
    totalViewsOnWords?: number;
    numberOfWordsLearnt?: number;
    percentageOfWordsLearnt?: string;
    partsOfSpeechTotals?: any; // Map<String, Integer>
    partsOfSpeechPercentages?: any; // Map<String, String>
    firstLetterTotals?: any; // Map<String, Integer>
    firstLetterPercentages?: any; // Map<String, String>
}
