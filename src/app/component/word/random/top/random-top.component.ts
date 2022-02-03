import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { AppRoutes } from '../../../../util/app.routes';

import { WordService } from '../../../../service/word.service';

import { Word } from '../../../../model/word.interface';

@Component({
    selector: 'ow-random-top',
    templateUrl: 'random-top.component.html',
    styleUrls: ['./random-top.component.scss']
})
export class RandomTopComponent {

    word$: Observable<Word>;

    constructor(private readonly service: WordService,
                private readonly router: Router) {
        this.word$ = service.retrieveRandom();
    }

    @Input()
    set word(word: Word) {
        this.word$ = of(word);
    }

    navToDetails({ id }: Word): void {
        void this.router.navigate([AppRoutes.getDetail(id)]);
    }
}
