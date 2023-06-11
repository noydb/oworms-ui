import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AlertService } from '../../service/alert.service';
import { WordService } from '../../service/word.service';

import { AppRoutes } from '../../util/app.routes';
import { ComponentState } from '../../model/component-state.enum';

import { APIFieldError } from '../../model/api-field-error.interface';
import { Word } from '../../model/word.interface';

import { LoadComponent } from '../../component/common/spinner/load.component';

@Component({
    selector: 'ow-word-add',
    templateUrl: 'word-add.component.html',
    styleUrls: ['./word-add.component.scss']
})
export class WordAddComponent extends LoadComponent {

    fieldErrors: APIFieldError[] = [];

    constructor(private readonly service: WordService,
                private readonly router: Router,
                private readonly alertService: AlertService,
                private readonly titleService: Title) {
        super();
        this.titleService.setTitle('new - oworms');
        this.state = ComponentState.COMPLETE;
    }

    createWord(word: Word): void {
        this.state = ComponentState.LOADING;
        this.fieldErrors = [];

        this.service
            .create(word)
            .pipe(take(1))
            .subscribe({
                next: () => {
                    this.alertService.add('Created word');
                    void this.router.navigate([AppRoutes.ALL], { queryParamsHandling: 'preserve' });
                    this.state = ComponentState.COMPLETE;
                },
                error: (e: HttpErrorResponse) => {
                    this.state = ComponentState.COMPLETE;
                    this.fieldErrors = e.error.fieldErrors;
                }
            });
    }
}
