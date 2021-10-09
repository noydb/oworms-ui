import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { WordHttpService } from './word.http.service';

import { Statistics } from '../model/statistics.interface';
import { Word } from '../model/word.interface';
import { WordFilter } from '../model/word-filter.interface';

@Injectable()
export class WordService {

    private readonly busy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private readonly wordHttpService: WordHttpService) {
    }

    retrieveAll(wordFilter: WordFilter | undefined): Observable<Word[]> {
        this.busy$.next(true);

        return this.wordHttpService
        .retrieveAll(wordFilter)
        .pipe(
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }

    retrieve(wordId: number): Observable<Word> {
        this.busy$.next(true);

        return this.wordHttpService
        .retrieve(wordId)
        .pipe(
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }

    retrieveRandom(): Observable<Word> {
        this.busy$.next(true);

        return this.wordHttpService
        .retrieveRandom()
        .pipe(
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }

    retrieveFromOxford(theWord: string): Observable<string> {
        this.busy$.next(true);

        return this.wordHttpService
        .retrieveFromOxford(theWord)
        .pipe(
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }

    create(word: Word): Observable<void> {
        this.busy$.next(true);

        return this.wordHttpService
        .create(word)
        .pipe(
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }

    update(wordId: number, word: Word): Observable<Word> {
        this.busy$.next(true);

        return this.wordHttpService
        .update(wordId, word)
        .pipe(
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }

    getStatistics(): Observable<Statistics> {
        this.busy$.next(true);

        return this.wordHttpService
        .getStatistics()
        .pipe(
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }

    getCSV(): Observable<any> {
        this.busy$.next(true);

        return this.wordHttpService
        .getCSV()
        .pipe(
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }

    isBusy(): BehaviorSubject<boolean> {
        return this.busy$;
    }
}
