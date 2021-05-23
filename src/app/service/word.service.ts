import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { WordHttpService } from './word.http.service';

import { Statistics } from '../model/statistics.interface';
import { Word } from '../model/word.interface';

@Injectable()
export class WordService {

    private words: Word[] = [];
    private username: string = '';

    constructor(private readonly wordHttpService: WordHttpService) {
    }

    retrieveAll(): Observable<Word[]> {
        if (this.words.length !== 0) {
            return of(this.words);
        }

        return this.wordHttpService.retrieveAll()
        .pipe(
            tap((words: Word[]) => {
                this.words = words;
            })
        );
    }

    create(word: Word): Observable<void> {
        return this.wordHttpService.create(word);
    }

    getStatistics(): Observable<Statistics> {
        return this.wordHttpService.getStatistics(this.username);
    }

    setUsername(username: string): void {
        this.username = username;
    }
}
