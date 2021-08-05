import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

import { Statistics } from '../model/statistics.interface';
import { Word } from '../model/word.interface';
import { filterType, WordFilter } from '../model/word-filter.interface';

@Injectable()
export class WordHttpService {

    private readonly baseURL: string = '/api/o';

    constructor(private readonly http: HttpClient, private readonly lsService: LocalStorageService) {
    }

    retrieveAll(wordFilter: WordFilter | undefined): Observable<Word[]> {
        return this.http.get<Word[]>(
            `${this.baseURL}/worms`,
            {
                params: this.getFilterHttpParams(wordFilter)
            }
        );
    }

    retrieve(wordId: number): Observable<Word> {
        return this.http.get<Word>(`${this.baseURL}/worms/${wordId}`);
    }

    retrieveRandom(): Observable<Word> {
        return this.http.get<Word>(`${this.baseURL}/worms/random`);
    }

    retrieveFromOxford(theWord: string): Observable<string> {
        return this.http.get<string>(
            `${this.baseURL}/worms/oxford/${theWord}`,
            { params: this.getCredentialHttpParams() }
        );
    }

    create(word: Word): Observable<void> {
        return this.http.post<void>(
            `${this.baseURL}/worms`,
            word,
            { params: this.getCredentialHttpParams() }
        );
    }

    update(wordId: number, updatedWord: Word): Observable<Word> {
        return this.http.put<Word>(
            `${this.baseURL}/worms/${wordId}`,
            updatedWord,
            { params: this.getCredentialHttpParams() }
        );
    }

    getStatistics(): Observable<Statistics> {
        return this.http.get<Statistics>('/api/o/settings');
    }

    // https://roytuts.com/download-file-from-server-using-angular/
    // try add types.
    getCSV(): any {
        return this.http.get('/api/o/worms/file/csv', { responseType: 'blob' });
    }

    private getFilterHttpParams(wordFilter: WordFilter | undefined): HttpParams | undefined {
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

    private getCredentialHttpParams(): HttpParams {
        let params: HttpParams = new HttpParams();
        params = params.set('u', this.lsService.get('u'));
        params = params.set('permission_key', this.lsService.get('p'));

        return params;
    }
}
