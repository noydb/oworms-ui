import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, finalize, map, take, tap } from 'rxjs/operators';

import { Statistics } from '../model/statistics.interface';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    private stats: Statistics | undefined;
    readonly documentClickedTarget: Subject<HTMLElement> = new Subject<HTMLElement>();
    private readonly busy$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    readonly apiVersion$: Observable<string> = inject(HttpClient)
        .get('/api/o/settings/version', { responseType: 'text' })
        .pipe(
            take(1),
            map((version: string) => 'api ' + version),
            take(1),
            catchError(() => of('api'))
        );

    constructor(private readonly route: ActivatedRoute, private readonly httpClient: HttpClient) {
    }

    isBusy(): Observable<boolean> {
        return this.busy$.asObservable();
    }

    getQueryParams(): Observable<Params> {
        return this
            .route
            .queryParams
            .pipe(
                take(1),
                map((param: Params) => isNaN(Number(param['size'])) ? { size: 25 } : param)
            );
    }

    getStatistics(): Observable<Statistics> {
        if (this.stats) {
            return of(this.stats);
        }

        this.busy$.next(true);

        return this.httpClient
            .get<Statistics>('api/o/stats')
            .pipe(
                tap((stats: Statistics) => {
                    this.stats = stats;
                }),
                finalize(() => {
                    this.busy$.next(false);
                })
            );
    }
}
