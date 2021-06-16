import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Statistics } from '../model/statistics.interface';
import { Word } from '../model/word.interface';
import { filterType, WordFilter } from '../model/word-filter.interface';

@Injectable()
export class WordHttpService {

    private static readonly BASE_URL: string = '/o/worms';

    constructor(private readonly http: HttpClient) {
    }

    retrieveAll(wordFilter: WordFilter | undefined): Observable<Word[]> {
        return this.http.get<Word[]>(
            WordHttpService.BASE_URL,
            {
                params: this.getHttpParams(wordFilter)
            }
        );
    }

    create(word: Word): Observable<void> {
        return this.http.post<void>(WordHttpService.BASE_URL, word);
    }

    getStatistics(u: string): Observable<Statistics> {
        return this.http.get<Statistics>(`${WordHttpService.BASE_URL}/stats?u=${u}`);
    }

    private getHttpParams(wordFilter: WordFilter | undefined): HttpParams | undefined {
        if (!wordFilter) {
            return undefined;
        }

        const { theWord, definition, partOfSpeech, createdBy, haveLearnt } = wordFilter;

        let params: HttpParams = new HttpParams();
        params = this.setParam(params, 'w', theWord);
        params = this.setParam(params, 'def', definition);
        params = this.setParam(params, 'pos', partOfSpeech);
        params = this.setParam(params, 'creator', createdBy);
        params = this.setParam(params, 'learnt', haveLearnt);

        return params;
    }

    private setParam(httpParams: HttpParams, paramKey: string, paramVal: filterType): HttpParams {
        if (!paramVal) {
            return httpParams;
        }

        return httpParams.set(paramKey, paramVal);
    }
}
