import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WordService } from '../../service/word.service';

import { Word } from '../../model/word.interface';

@Component({
    selector: 'ow-words',
    templateUrl: './words.component.html',
    styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

    words$: Observable<Word[]> = of([]);
    selectedWord: Word = {};
    numberOfElements: number = 50;

    constructor(private readonly wordService: WordService) {
    }

    ngOnInit(): void {
        this.words$ = this.wordService.retrieveAll();
    }

    showMore(): void {
        this.numberOfElements += 25;
    }

    selectWord(word: Word): void {
        this.selectedWord = word;
    }
}
