import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WordHttpService } from './word.http.service';

import { Statistics } from '../model/statistics.interface';
import { Word } from '../model/word.interface';
import { WordFilter } from '../model/word-filter.interface';

@Injectable()
export class WordService {
    constructor(private readonly wordHttpService: WordHttpService) {
    }

    retrieveAll(wordFilter: WordFilter | undefined): Observable<Word[]> {
        return this.wordHttpService.retrieveAll(wordFilter);
    }

    retrieve(wordId: number): Observable<Word> {
        return this.wordHttpService.retrieve(wordId);
    }

    retrieveRandom(): Observable<Word> {
        return this.wordHttpService.retrieveRandom();
    }

    retrieveFromOxford(theWord: string): Observable<string> {
        return this.wordHttpService.retrieveFromOxford(theWord);
    }

    create(word: Word): Observable<void> {
        return this.wordHttpService.create(word);
    }

    update(theWord: string, word: Word): Observable<Word> {
        return this.wordHttpService.update(theWord, word);
    }

    getStatistics(): Observable<Statistics> {
        return this.wordHttpService.getStatistics();
    }

    getCSV(): Observable<any> {
        return this.wordHttpService.getCSV();
    }
}
