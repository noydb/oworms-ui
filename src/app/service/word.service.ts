import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, map, take, tap } from 'rxjs/operators';

import { UserHttpService } from './user.http.service';
import { WordHttpService } from './word.http.service';

import { Statistics } from '../model/statistics.interface';
import { Word } from '../model/word.interface';
import { WordFilter } from '../model/word-filter.interface';

@Injectable()
export class WordService {

    readonly words$: BehaviorSubject<Word[]> = new BehaviorSubject<Word[]>([]);
    private readonly busy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private readonly wordCount$: BehaviorSubject<number> = new BehaviorSubject<number>(undefined);

    constructor(private readonly wordHttpService: WordHttpService,
                private readonly userHttp: UserHttpService) {
        this
            .retrieveAll(undefined)
            .pipe(take(1))
            .subscribe({
                next: (words: Word[]) => {
                    this.words$.next(words);
                }
            })
    }

    isBusy(): Observable<boolean> {
        return this.busy$.asObservable();
    }

    getWords(): Observable<Word[]> {
        return this.words$;
    }

    retrieveAll(wordFilter: WordFilter): Observable<Word[]> {
        this.busy$.next(true);

        return this.wordHttpService
            .retrieveAll(wordFilter)
            .pipe(
                tap((words: Word[]) => {
                    this.words$.next(words);
                    this.wordCount$.next(words.length);
                }),
                finalize(() => {
                    this.busy$.next(false);
                }),
                catchError((e) => {
                    this.wordCount$.next(0);

                    return throwError(e);
                })
            );
    }

    retrieve(uuid: string): Observable<Word> {
        this.busy$.next(true);

        return this.wordHttpService
            .retrieve(uuid)
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

    update(uuid: string, word: Word): Observable<Word> {
        this.busy$.next(true);

        return this.wordHttpService
            .update(uuid, word)
            .pipe(
                finalize(() => {
                    this.busy$.next(false);
                })
            );
    }

    like(wordUUID: string): Observable<void> {
        this.busy$.next(true);

        return this.userHttp
            .likeWord(wordUUID)
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

    getCount(): Observable<number> {
        return this.wordCount$
            .asObservable()
            .pipe(
                map((value: number) => !value || isNaN(value) ? 0 : value)
            );
    }
}
