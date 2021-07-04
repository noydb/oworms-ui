import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Statistics } from '../model/statistics.interface';
import { Word } from '../model/word.interface';
import { filterType, WordFilter } from '../model/word-filter.interface';

@Injectable()
export class WordHttpService {

    constructor(private readonly http: HttpClient) {
    }

    retrieveAll(wordFilter: WordFilter | undefined): Observable<Word[]> {
        return this.http.get<Word[]>(
            'o/worms',
            {
                params: this.getHttpParams(wordFilter)
            }
        );
    }

    retrieve(theWord: string): Observable<Word> {
        return this.http.get<Word>(`o/worms/${theWord}`);
    }

    create(word: Word, username: string): Observable<void> {
        return this.http.post<void>(
            `/o/worms`,
            word,
            {
                params: { u: username }
            }
        );
    }

    update(theWord: string, updatedWord: Word, username: string): Observable<Word> {
        return this.http.put<Word>(
            `/o/worms/${theWord}`,
            updatedWord,
            {
                params: { u: username }
            }
        );
    }

    getStatistics(): Observable<Statistics> {
        return this.http.get<Statistics>('/o/settings');
    }

    private getHttpParams(wordFilter: WordFilter | undefined): HttpParams | undefined {
        if (!wordFilter) {
            return undefined;
        }

        const { theWord, definition, partsOfSpeech, createdBy, haveLearnt } = wordFilter;

        let params: HttpParams = new HttpParams();
        params = this.setParam(params, 'w', theWord);
        params = this.setParam(params, 'def', definition);
        params = this.setParam(params, 'creator', createdBy);
        params = this.setParam(params, 'learnt', haveLearnt);
        partsOfSpeech?.forEach((pos) => {
            params = params.append('pos', pos as string);
        });

        return params;
    }

    private setParam(httpParams: HttpParams, paramKey: string, paramVal: filterType): HttpParams {
        if (!paramVal) {
            return httpParams;
        }

        return httpParams.set(paramKey, paramVal);
    }
}
