import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { WordService } from '../../../service/word.service';

import { AppRoutes } from '../../../util/app.routes';

import { Word } from '../../../model/word.interface';

@Component({
    selector: 'ow-word-add',
    templateUrl: 'word-add.component.html',
    styleUrls: ['./word-add.component.scss']
})
export class WordAddComponent {

    constructor(private readonly service: WordService,
                private readonly router: Router,
                private readonly titleService: Title) {
        this.titleService.setTitle('oworms | new');
    }

    createWord(word: Word): void {
        this.service
        .create(word)
        .pipe(take(1))
        .subscribe(() => {
            alert('word created');

            void this.router.navigate([AppRoutes.LIST], { queryParamsHandling: 'preserve' });
        }, (e) => {
            console.error(e);

            alert(e.error.message);
        });
    }
}
