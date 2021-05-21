import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Word } from '../model/word/word.interface';
import { WordHttpService } from './word.http.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class WordService {

	private words: Word[] = [];

	private username: string = '';

	constructor(private readonly wordHttpService: WordHttpService) {
	}

	retrieveAll(): Observable<Word[]> {
		if (this.words.length !== 0) {
			return of(this.words);
		}

		return this.wordHttpService.retrieveAll()
			.pipe(
				tap((words: Word[]) => {
					this.words = words;
				})
			);
	}

	create(word: Word): Observable<unknown> {
		return this.wordHttpService.create(word);
	}

	setUsername(username: string): void {
		this.username = username;
	}
}
