import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UtilService {
    readonly documentClickedTarget: Subject<HTMLElement> = new Subject<HTMLElement>();
    readonly apiVersion$: Observable<string> = inject(HttpClient)
        .get('/api/o/settings/version', { responseType: 'text' })
        .pipe(
            take(1),
            map((version: string) => 'api ' + version),
            take(1),
            catchError(() => of('api'))
        );

    constructor(private readonly route: ActivatedRoute) {
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
}
