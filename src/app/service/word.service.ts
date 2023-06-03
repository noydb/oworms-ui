import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, OperatorFunction, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';

import { AlertService } from './alert.service';
import { WordHttpService } from './word.http.service';

import { AppRoutes } from '../util/app.routes';
import { ErrorUtil } from '../util/error.util';

import { Statistics } from '../model/statistics.interface';
import { Word } from '../model/word.interface';
import { WordFilter } from '../model/word-filter.interface';

@Injectable()
export class WordService {

    private readonly busy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private readonly wordCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor(private readonly wordHttpService: WordHttpService,
                private readonly alertService: AlertService) {
    }

    isBusy(): Observable<boolean> {
        return this.busy$.asObservable();
    }

    retrieveAll(wordFilter: WordFilter): Observable<Word[]> {
        this.busy$.next(true);

        return this.wordHttpService
        .retrieveAll(wordFilter)
        .pipe(
            tap((words: Word[]) => {
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
            }),
            catchError((e: HttpErrorResponse) => {
                return throwError(() => e);
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
            this.handleActionError(),
            finalize(() => {
                this.busy$.next(false);
            })
        );
    }

    update(uuid: string, word: Word): Observable<void> {
        this.busy$.next(true);

        return this.wordHttpService
        .update(uuid, word)
        .pipe(
            this.handleActionError(),
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

    private handleActionError = (): OperatorFunction<void, void> => catchError((e: HttpErrorResponse) => {
        const message: string = ErrorUtil.getMessage(e);

        if (message.includes('exists')) {
            this.alertService.addWithPath(
                ErrorUtil.getMessage(e) + ". Click here to view it",
                true,
                AppRoutes.getDetail(e.error.uuid)
            );
        } else {
            this.alertService.add(ErrorUtil.getMessage(e), true, 10000);
        }

        return throwError(() => e);
    });
}
