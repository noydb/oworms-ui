import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AlertService } from '../../../service/alert.service';
import { WordService } from '../../../service/word.service';

import { ErrorUtil } from '../../../util/error.util';

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
                private readonly titleService: Title,
                private readonly alertService: AlertService) {
        this.titleService.setTitle('oworms | new');
    }

    createWord(word: Word): void {
        this.service
        .create(word)
        .pipe(take(1))
        .subscribe({
            next: () => {
                this.alertService.add('Created word');

                void this.router.navigate([AppRoutes.ALL], { queryParamsHandling: 'preserve' });
            },
            error: (e) => {
                console.error(e);

                this.alertService.add(ErrorUtil.getMessage(e), true);
            }
        });
    }
}
