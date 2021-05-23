import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Word } from '../model/word.interface';
import { Statistics } from '../model/statistics.interface';

@Injectable()
export class WordHttpService {

    private static readonly BASE_URL: string = '/o/worms';

    constructor(private readonly http: HttpClient) {
    }

    retrieveAll(): Observable<Word[]> {
        return this.http.get<Word[]>(WordHttpService.BASE_URL);
    }

    create(word: Word): Observable<void> {
        return this.http.post<void>(WordHttpService.BASE_URL, word);
    }

    getStatistics(u: string): Observable<Statistics> {
        return this.http.get<Statistics>(`${WordHttpService.BASE_URL}/stats?u=${u}`);
    }
}
