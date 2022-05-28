import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../util/app.routes';

import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-word-card',
    templateUrl: './word-card.component.html',
    styleUrls: ['./word-card.component.scss']
})
export class WordCardComponent {

    @Input()
    word: Word;

    constructor(private readonly router: Router) {
    }

    viewWordDetails(): void {
        void this.router.navigate([AppRoutes.getDetail(this.word.uuid)]);
    }
}
