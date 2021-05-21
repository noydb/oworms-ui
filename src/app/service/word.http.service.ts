import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Word } from '../model/word/word.interface';
import { Observable } from 'rxjs';

@Injectable()
export class WordHttpService {

	private static readonly BASE_URL: string = '/o/worms';

	constructor(private readonly http: HttpClient) {
	}

	retrieveAll(): Observable<Word[]> {
		return this.http.get<Word[]>(WordHttpService.BASE_URL);
	}

	create(word: Word): Observable<unknown> {
		return this.http.post(WordHttpService.BASE_URL, word);
	}
}
