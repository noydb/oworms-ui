import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WordHttpService } from './word.http.service';

import { Statistics } from '../model/statistics.interface';
import { Word } from '../model/word.interface';
import { WordFilter } from '../model/word-filter.interface';

@Injectable()
export class WordService {
    private username: string = '';

    constructor(private readonly wordHttpService: WordHttpService) {
    }

    retrieveAll(wordFilter: WordFilter | undefined): Observable<Word[]> {
        return this.wordHttpService.retrieveAll(wordFilter);
    }

    retrieve(theWord: string): Observable<Word> {
        return this.wordHttpService.retrieve(theWord);
    }

    create(word: Word): Observable<void> {
        return this.wordHttpService.create(word, this.username);
    }

    update(theWord: string, word: Word): Observable<Word> {
        return this.wordHttpService.update(theWord, word, this.username);
    }

    getStatistics(): Observable<Statistics> {
        return this.wordHttpService.getStatistics();
    }

    setUsername(username: string): void {
        this.username = username;
    }

    getUsername(): string {
        return this.username;
    }
}
