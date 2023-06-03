import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../util/app.routes';
import { Unsubscribes } from '../../../util/auto-unsubscribe.directive';

import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-word-card',
    templateUrl: './word-card.component.html',
    styleUrls: ['./word-card.component.scss']
})
@Unsubscribes()
export class WordCardComponent {

    @Input()
    word: Word;

    constructor(private readonly router: Router) {
    }

    getViews(daWord: Word): string {
        switch (daWord?.timesViewed) {
            case 0:
                return 'No views';
            case 1:
                return '1 view';
            case null:
                return 'n/a';
            default:
                return daWord.timesViewed + ' views';
        }
    }

    viewWordDetails(): void {
        void this.router.navigate([AppRoutes.getDetail(this.word.uuid)]);
    }
}
