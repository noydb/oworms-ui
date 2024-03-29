import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

import { Word } from '../model/word.interface';
import { WordFilter } from '../model/word-filter.interface';

@Injectable()
export class WordHttpService {

    private readonly baseURL: string = '/api/o/worms';

    constructor(private readonly http: HttpClient, private readonly ls: LocalStorageService) {
    }

    retrieveAll(wordFilter: WordFilter): Observable<Word[]> {
        return this.http.get<Word[]>(
            `${this.baseURL}`,
            { params: this.getFilterHttpParams(wordFilter) }
        );
    }

    retrieve(uuid: string): Observable<Word> {
        return this.http.get<Word>(`${this.baseURL}/${uuid}`);
    }

    retrieveRandom(): Observable<Word> {
        return this.http.get<Word>(`${this.baseURL}/random`);
    }

    create(word: Word): Observable<void> {
        return this.http.post<void>(
            `${this.baseURL}`,
            { word, tagIds: word.tagIds },
            { params: this.getBNA() }
        );
    }

    update(uuid: string, updatedWord: Word): Observable<void> {
        return this.http.put<void>(
            `${this.baseURL}/${uuid}`,
            { word: updatedWord, tagIds: updatedWord.tagIds },
            { params: this.getBNA() }
        );
    }

    // https://roytuts.com/download-file-from-server-using-angular/
    // try add types.
    getCSV(): any {
        return this.http.get(`${this.baseURL}/file/csv`, { responseType: 'blob' });
    }

    private getFilterHttpParams(wordFilter: WordFilter): HttpParams | undefined {
        if (!wordFilter) {
            return undefined;
        }

        const {
            size,
            word,
            partsOfSpeech,
            definition,
            origin,
            example,
            tags,
            note,
            createdBy,
            uuids
        } = wordFilter;

        let params: HttpParams = new HttpParams().set('numberOfWords', size);
        params = this.setParam(params, 'word', word);
        partsOfSpeech?.forEach((pos: string) => {
            params = params.append('pos', pos as string);
        });
        params = this.setParam(params, 'def', definition);
        params = this.setParam(params, 'ori', origin);
        params = this.setParam(params, 'ex', example);
        tags?.forEach((tag: string) => {
            params = params.append('tags', tag);
        });
        params = this.setParam(params, 'note', note);
        params = this.setParam(params, 'creator', createdBy);
        uuids?.forEach((uuid: string) => {
            params = params.append('uuids', uuid);
        });

        return params;
    }

    private setParam(httpParams: HttpParams, paramKey: string, paramVal: string): HttpParams {
        if (!paramVal) {
            return httpParams;
        }

        return httpParams.set(paramKey, paramVal);
    }

    private getBNA(): HttpParams {
        return new HttpParams().set('u', this.ls.get('u')).set('bna', this.ls.get('bna'));
    }
}
