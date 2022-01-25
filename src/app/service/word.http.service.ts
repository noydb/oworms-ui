import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

import { Statistics } from '../model/statistics.interface';
import { Word } from '../model/word.interface';
import { WordFilter } from '../model/word-filter.interface';

@Injectable()
export class WordHttpService {

    private readonly baseURL: string = '/api/o';

    constructor(private readonly http: HttpClient, private readonly lsService: LocalStorageService) {
    }

    retrieveAll(wordFilter: WordFilter): Observable<Word[]> {
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
            { word, tagIds: word.tagIds },
            { params: this.getCredentialHttpParams() }
        );
    }

    update(wordId: number, updatedWord: Word): Observable<Word> {
        return this.http.put<Word>(
            `${this.baseURL}/worms/${wordId}`,
            {
                word: updatedWord,
                tagIds: updatedWord.tagIds
            },
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

    private getFilterHttpParams(wordFilter: WordFilter): HttpParams | undefined {
        if (!wordFilter) {
            return undefined;
        }

        const { word, partsOfSpeech, definition, origin, exampleUsage, tags, note } = wordFilter;

        let params: HttpParams = new HttpParams();
        params = this.setParam(params, 'word', word);
        partsOfSpeech?.forEach((pos: string) => {
            params = params.append('pos', pos as string);
        });
        params = this.setParam(params, 'def', definition);
        params = this.setParam(params, 'ori', origin);
        params = this.setParam(params, 'ex', exampleUsage);
        tags?.forEach((tag: string) => {
            params = params.append('tags', tag);
        });
        params = this.setParam(params, 'note', note);

        return params;
    }

    private setParam(httpParams: HttpParams, paramKey: string, paramVal: string): HttpParams {
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
