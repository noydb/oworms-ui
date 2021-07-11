import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WordService } from '../../../service/word.service';

import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-word-detail',
    templateUrl: 'word-random.component.html'
})
export class WordRandomComponent implements OnInit {

    word$: Observable<Word> = of();

    constructor(private readonly service: WordService) {
    }

    ngOnInit(): void {
        this.word$ = this.service.retrieveRandom();
    }
}
